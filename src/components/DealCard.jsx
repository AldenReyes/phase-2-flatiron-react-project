import { Card, Loader } from "semantic-ui-react";
import "../styles/DealCard.css";

export default function DealCard({ deals }) {
  async function postToDb(deal) {
    try {
      const response = await fetch("http://localhost:3001/saved", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...deal, id: deal.gameID }),
      });
      if (!response.ok) {
        alert("An error occurred while adding, deal may already be saved");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding, deal may already be saved");
    }
  }

  if (deals === null) {
    return (
      <Loader className="ui active huge inline centered">Loading...</Loader>
    );
  } else {
    return deals.map((deal) => {
      function handleStarClick() {
        postToDb(deal);
      }
      return (
        <Card key={deal.gameID} className="ui center aligned">
          <Card.Content>
            <div className="right floated meta">
              -{parseInt(deal.savings, 10)}%
            </div>
            <i
              className="left floated star icon"
              onClick={(e) => handleStarClick()}
            ></i>
            <img
              src={deal.thumb}
              alt={deal.title + " Thumbnail"}
              className="ui image"
            />
            <Card.Header id="card-header" className="ui header">
              {deal.title}
            </Card.Header>
            <p>
              Metacritic Score:{" "}
              {
                <a
                  href={"https://metacritic.com" + deal.metacriticLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {deal.metacriticScore}%
                  <i className="top right corner tiny external icon"></i>
                </a>
              }
            </p>
            <p>
              Steam Rating:{" "}
              {
                <a
                  href={
                    "https://steamcommunity.com/app/" +
                    deal.steamAppID +
                    "/reviews/?browsefilter=toprated"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {deal.steamRatingPercent}%
                  <i className="top right corner tiny external icon"></i>
                </a>
              }
            </p>
            <p>{deal.steamRatingText}</p>
            <p
              id="sale-price-text"
              data-tooltip="USD"
              data-position="top center"
            >
              <span id="normal-price-text">${deal.normalPrice}</span>
              &nbsp;| <strong>${deal.salePrice}</strong>
            </p>
            <a
              className="ui icon button black"
              href={"https://www.cheapshark.com/redirect?dealID=" + deal.dealID}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="steam icon"></i>
              <i className="top right corner tiny fitted external alternate icon"></i>
            </a>
          </Card.Content>
        </Card>
      );
    });
  }
}
