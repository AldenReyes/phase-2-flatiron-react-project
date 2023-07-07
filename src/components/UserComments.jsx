import { Comment } from "semantic-ui-react";
export default function UserComments() {
  return (
    <Comment>
      <Comment.Author as="h5">Test</Comment.Author>
      <Comment.Text>Lovely</Comment.Text>
    </Comment>
  );
}
