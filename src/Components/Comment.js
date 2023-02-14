import { useState } from "react";
import CommentForm from "./CommentForm";

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
          <h5>{commenter}</h5>
          <p>{comment}</p>
          <p>Posted: {post_date}</p>
        </div>
      )}
      <button onClick={() => handleDeleteComment(id)}>Delete Comment</button>
      <button onClick={toggleView}>Edit This Comment</button>
    </div>
  );
};

export default Comment;
