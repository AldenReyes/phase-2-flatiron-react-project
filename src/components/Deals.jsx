import { Card, Container } from "semantic-ui-react";
import "../styles/Deals.css"

export default function Deals() {
  return (
    <main>
        <div className="ui horizontal divider">
          Placeholder for sort
        </div>
      <Container className="ui fluid center aligned">
        <Card id="TEST" className="ui fluid center aligned">STATIC TEST</Card>
        <Card id="TEST" className="ui fluid center aligned">STATIC TEST</Card>
        <Card id="TEST" className="ui fluid center aligned">STATIC TEST</Card>
      </Container>
    </main>
  )
}
