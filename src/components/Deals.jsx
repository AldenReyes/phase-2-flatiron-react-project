import { useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import "../styles/Deals.css"
import DealCard from "./DealCard";
import Header from "./Header";

export default function Deals() {
  const [deals, setDeals] = useState(null)

  useEffect(()=>{
    console.log("effect has been used")
    setDeals([
    {
        "internalName": "HALFLIFE2",
        "title": "Half-Life 2",
        "metacriticLink": "/game/pc/half-life-2",
        "dealID": "Vz5eZMF1sKvs02I4cuEgrGnmM1r%2BkWHig0YMa0lJ0vM%3D",
        "storeID": "1",
        "gameID": "59",
        "salePrice": "0.99",
        "normalPrice": "9.99",
        "isOnSale": "1",
        "savings": "90.090090",
        "metacriticScore": "96",
        "steamRatingText": "Overwhelmingly Positive",
        "steamRatingPercent": "97",
        "steamRatingCount": "128185",
        "steamAppID": "220",
        "releaseDate": 1100563200,
        "lastChange": 1688061751,
        "dealRating": "10.0",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/220/capsule_sm_120.jpg?t=1666823596"
    },
    {
        "internalName": "HALFLIFE",
        "title": "Half-Life",
        "metacriticLink": "/game/pc/half-life",
        "dealID": "G%2BXAA0GGjaN4wXzRSpEpKtspbGp%2Bz3TJoNnhJI72Bug%3D",
        "storeID": "1",
        "gameID": "75",
        "salePrice": "0.99",
        "normalPrice": "9.99",
        "isOnSale": "1",
        "savings": "90.090090",
        "metacriticScore": "96",
        "steamRatingText": "Overwhelmingly Positive",
        "steamRatingPercent": "96",
        "steamRatingCount": "72585",
        "steamAppID": "70",
        "releaseDate": 911433600,
        "lastChange": 1688061771,
        "dealRating": "10.0",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/70/capsule_sm_120.jpg?t=1683302000"
    },
    {
        "internalName": "PORTAL2",
        "title": "Portal 2",
        "metacriticLink": "/game/pc/portal-2",
        "dealID": "rwQ2JCEr5NOySyBsAj6fyPuZg4qMlh9w67U%2BmM6b2VE%3D",
        "storeID": "1",
        "gameID": "36",
        "salePrice": "0.99",
        "normalPrice": "9.99",
        "isOnSale": "1",
        "savings": "90.090090",
        "metacriticScore": "95",
        "steamRatingText": "Overwhelmingly Positive",
        "steamRatingPercent": "98",
        "steamRatingCount": "283088",
        "steamAppID": "620",
        "releaseDate": 1303084800,
        "lastChange": 1688061668,
        "dealRating": "10.0",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/capsule_sm_120.jpg?t=1683129624"
    },
    {
        "internalName": "TUMBLESTONE",
        "title": "Tumblestone",
        "metacriticLink": "/game/pc/tumblestone",
        "dealID": "dJNCeHkZV3iaXZQFBSpYh3B2tz6ZuMvBaFpI6d1QYiU%3D",
        "storeID": "1",
        "gameID": "154838",
        "salePrice": "2.49",
        "normalPrice": "24.99",
        "isOnSale": "1",
        "savings": "90.036014",
        "metacriticScore": "91",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "86",
        "steamRatingCount": "140",
        "steamAppID": "269710",
        "releaseDate": 1468281600,
        "lastChange": 1688065760,
        "dealRating": "10.0",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/269710/capsule_sm_120.jpg?t=1673726244"
    },
    {
        "internalName": "HALFLIFE2EPISODETWO",
        "title": "Half-Life 2: Episode Two",
        "metacriticLink": "/game/pc/half-life-2-episode-two",
        "dealID": "S0Ig5YiyefrWVD4DC7ZKSQLcr9sBbVuLAvP17Tq4Vfw%3D",
        "storeID": "1",
        "gameID": "81",
        "salePrice": "0.79",
        "normalPrice": "7.99",
        "isOnSale": "1",
        "savings": "90.112641",
        "metacriticScore": "90",
        "steamRatingText": "Overwhelmingly Positive",
        "steamRatingPercent": "97",
        "steamRatingCount": "27448",
        "steamAppID": "420",
        "releaseDate": 1191974400,
        "lastChange": 1688061869,
        "dealRating": "10.0",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/420/capsule_sm_120.jpg?t=1666824206"
    }
])
  },[])

  return (
    <>
      <Header />
      <main>
          <div className="ui horizontal divider">
            Placeholder for sort
          </div>
        <Container className="ui fluid center aligned">
          <Card.Group itemsPerRow={3}>
            <DealCard deals={deals}/>
          </Card.Group>
        </Container>
      </main>
    </>
  )
}
