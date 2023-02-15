import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentForm(props) {
  let { id } = useParams();
  const { commentDetails } = props;
  let [postDate, setPostDate] = useState("");

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    month = `0${month}`;
  }

  let currentDate = `${month}-${day}-${year}`;

  //   setPostDate(currentDate);

  console.log(postDate);

  //   currentDate();

  const [comment, setComment] = useState({
    commenter: "",
    comment: "",
    post_date: currentDate,
    art_id: id,
  });

  const handleTextChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (commentDetails) {
      setComment(commentDetails);
    }
  }, [id, commentDetails, props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(comment, id);
    if (commentDetails) {
      props.toggleView();
    }
    setComment({
      commenter: "",
      comment: "",
      post_date: "",
      art_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter">Commenter:</label>
        <input
          id="commenter"
          value={comment.commenter}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          required
          value={comment.comment}
          onChange={handleTextChange}
        />

        <br />

        <input id="submit" type="submit" />
      </form>
      <h3>Comments</h3>
    </div>
  );
}

export default CommentForm;
