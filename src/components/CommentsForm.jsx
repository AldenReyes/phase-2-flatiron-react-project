import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";

export default function CommentsForm({ onHandleViewButton, onHandleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  return (
    <Container>
      <Form onSubmit={(e) => onHandleSubmit(e, formData)}>
        <Form.Group widths={16} inline>
          <Form.Field>
            <Form.Input
              label="Name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.TextArea
            placeholder="Enter your comment or suggestion"
            required
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
        </Form.Field>
        <Button
          type="button"
          content="View Comments"
          onClick={onHandleViewButton}
          secondary
        />
        <Button.Group>
          <Button type="submit" content="Add Comment" icon="edit" primary />
        </Button.Group>
      </Form>
    </Container>
  );
}
