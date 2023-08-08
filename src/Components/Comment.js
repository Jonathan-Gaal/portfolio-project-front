import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

//props = comment from map in Comments
const Comment = ({ oneComment, handleDeleteComment, handleSubmit }) => {
  const { commenter, comment, post_date, id } = oneComment;

  const [viewCommentEditForm, toggleViewCommentEditForm] = useState(false);

  const toggleView = () => {
    toggleViewCommentEditForm(!viewCommentEditForm);
  };

  return (
    <div className="Comment">
      {viewCommentEditForm ? (
        <CommentForm
          commentDetails={oneComment}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h3>{commenter}</h3>
          <p>{comment}</p>
          <p>Posted: {post_date}</p>
        </div>
      )}
      <div className="Comment__deleteAndCommentButtonsContainer">
        <button
          className="deleteCommentBtn"
          onClick={() => handleDeleteComment(id)}>
          Delete Comment
        </button>
        <button className="editCommentBtn" onClick={toggleView}>
          Edit Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
