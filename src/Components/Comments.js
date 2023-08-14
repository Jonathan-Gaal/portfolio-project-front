import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "./Comments.scss";

const API = process.env.REACT_APP_API_URL;

const Comments = ({ showComments }) => {
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  const handleCreateComment = (newComment) => {
    axios
      .post(`${API}/gallery/${id}/comments`, newComment)
      .then(
        (res) => {
          setComments([res.data, ...comments]);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDeleteComment = (id) => {
    axios
      .delete(`${API}/gallery/${id}/comments/${id}`)
      .then(
        (res) => {
          const copyCommentArr = [...comments];
          const indexOfDeletedComment = copyCommentArr.findIndex((comment) => {
            return comment.id === id;
          });
          copyCommentArr.splice(indexOfDeletedComment, 1);
          setComments(copyCommentArr);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEditComment = (updatedComment) => {
    axios
      .put(`${API}/gallery/${id}/comments/${updatedComment.id}`, updatedComment)
      .then((res) => {
        const copyCommentArr = [...comments];
        const indexupdatedComment = copyCommentArr.findIndex((comment) => {
          return comment.id === updatedComment.id;
        });
        copyCommentArr[indexupdatedComment] = res.data;
        setComments(copyCommentArr);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios.get(`${API}/gallery/${id}/comments`).then((res) => {
      //   console.log(res.data);
      setComments(res.data);
    });
  }, [id]);
  return (
    <>
      {showComments ? (
        <section className="Comments">
          <CommentForm handleSubmit={handleCreateComment}></CommentForm>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              oneComment={comment}
              handleSubmit={handleEditComment}
              handleDeleteComment={handleDeleteComment}
            />
          ))}
        </section>
      ) : null}
    </>
  );
};

export default Comments;
