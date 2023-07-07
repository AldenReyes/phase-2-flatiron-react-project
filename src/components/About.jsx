import { Button, Container, Divider, Form, Header } from "semantic-ui-react";

export default function About() {
  return (
    <main>
      <h2 className="ui icon header">
        <i className="circular icon">
          <i
            className="fa-brands fa-react fa-spin"
            style={{ color: "#61dbfb" }}
          ></i>
        </i>
        <i className="fa-sharp fa-regular fa-browsers"></i> Built with React
      </h2>
      <Container>
        <p>
          Powered by{" "}
          <span>
            <a href="https://apidocs.cheapshark.com/">CheapShark API</a>
          </span>
        </p>
        <p>
          Developed with ❤️ by{" "}
          <span>
            <a href="https://github.com/AldenReyes/phase-2-steam-game-deals-finder">
              Alden Reyes
            </a>
          </span>
        </p>
        <p>Not affiliated with Steam. All rights respective.</p>
        <Divider />
        <Header as="h3" className="aligned">
          Have a suggestion or comment?
          <Header.Subheader content="Enter it below"></Header.Subheader>
        </Header>
        <Form>
          <Form.TextArea />
          <Button content="View Comments" />
          <Button content="Add Comment" icon="edit" primary />
        </Form>
      </Container>
    </main>
  );
}
