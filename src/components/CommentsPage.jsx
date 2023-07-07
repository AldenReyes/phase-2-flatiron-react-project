import { Comment } from "semantic-ui-react";
export default function CommentsPage() {
  return (
    <Comment>
      <Comment.Author as="h5">Test</Comment.Author>
      <Comment.Text>Lovely</Comment.Text>
    </Comment>
  );
}
