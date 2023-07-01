import { Card } from "semantic-ui-react";
export default function DealCard({deals}) {
  if (deals === null) {
    return (<Card>Loading ... </Card>)
  } else {
    return (deals.map(deal => {
        return (
            <Card key={deal.gameID} className="ui aligned">
              <Card.Content>
                {<img src={deal.thumb} alt={"Thumbnail of" + deal.title}/>}
                <Card.Header>
                  {deal.title}
                </Card.Header>
                &nbsp;
                Metacritic Score: {<a href={"https://metacritic.com" + deal.metacriticLink}>{deal.metacriticScore}</a>}
                &nbsp;
              </Card.Content>
            </Card>
        )
      }))
  }
}
