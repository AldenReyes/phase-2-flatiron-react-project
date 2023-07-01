import { Button, Card } from "semantic-ui-react";
import "../styles/DealCard.css"

export default function DealCard({deals}) {
  if (deals === null) {
    return (<Card>Loading ... </Card>)
  } else {
    return (deals.map(deal => {
        return (
            <Card key={deal.gameID} className="ui center aligned">
              <Card.Content>                 
                <div className="right floated meta">
                  -{parseInt(deal.savings, 10)}%
                </div>
                  <i className="left floated star icon"></i>
                {<img 
                    src={deal.thumb} 
                    alt={deal.title + " Thumbnail"} 
                    className="ui image"
                  />
                  }                   
                  <Card.Header id="card-header" className="ui header">
                    {deal.title}
                  </Card.Header>
                <p>
                  Metacritic Score: {
                    <a href={"https://metacritic.com" + deal.metacriticLink}>
                      {deal.metacriticScore}%
                    </a>
                    }
                </p>
                <p>
                  Steam Rating: {
                  <a href={"https://steamcommunity.com/app/" + deal.steamAppID + "/reviews/?browsefilter=toprated"}>
                    {deal.steamRatingPercent}%
                  </a>}  
                </p>
                <p>
                  {deal.steamRatingText}
                </p>
                <p id="sale-price-text">
                  <span id="normal-price-text">${deal.normalPrice}</span>
                  &nbsp;| <strong>${deal.salePrice}</strong>
                </p>
                <Button className="ui icon button black">
                  <i className="steam icon"></i>
                </Button>              
              </Card.Content>
            </Card>
        )
      }))
  }
}
