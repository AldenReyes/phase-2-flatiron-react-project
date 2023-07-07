import { Comment } from "semantic-ui-react";
export default function CommentsPage({ comments }) {
  console.log(comments);
  if (comments.length === 0) {
    return <Comment>No Comments</Comment>;
  }
  return comments.map((comment) => {
    return (
      <Comment key={comment.id}>
        <Comment.Author as="h5">{comment.name}</Comment.Author>
        <Comment.Text>{comment.comment}</Comment.Text>
      </Comment>
    );
  });
}
