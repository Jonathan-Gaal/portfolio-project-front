import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.scss";

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
        <div className="Comment__commentContainer">
          <div className="Comment__commenter">Posted by: {commenter} -</div>
          <div className="Comment__datePosted"> On: {post_date}</div>
          <div className="Comment__comment">{comment}</div>
        </div>
      )}
      <div className="Comment__deleteAndCommentButtonsContainer">
        <button
          className="Comment__deleteCommentBtn"
          onClick={() => handleDeleteComment(id)}>
          Delete
        </button>
        <button className="Comment__editCommentBtn" onClick={toggleView}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Comment;
