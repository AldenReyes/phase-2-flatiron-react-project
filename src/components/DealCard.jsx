import { Card } from "semantic-ui-react";
export default function DealCard({test}) {
  return (
    <>
      <p>{test}</p>
      <Card id="TEST" className="ui fluid center aligned">STATIC TEST</Card>
      <Card id="TEST" className="ui fluid center aligned">STATIC TEST</Card>
      <Card id="TEST" className="ui fluid center aligned">STATIC TEST</Card>
    </>
  )
}
