import { Button, Form } from "semantic-ui-react";
export default function CommentsForm({ onHandleViewButton, onHandleSubmit }) {
  return (
    <Form onSubmit={onHandleSubmit}>
      <Form.Group widths={16} inline>
        <Form.Field>
          <Form.Input label="Name" placeholder="Name" required />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <Form.TextArea
          placeholder="Enter your comment or suggestion"
          required
        />
      </Form.Field>
      <Button content="View Comments" onClick={onHandleViewButton} />
      <Button type="submit" content="Add Comment" icon="edit" primary />
    </Form>
  );
}
