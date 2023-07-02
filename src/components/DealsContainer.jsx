import { useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import "../styles/Deals.css";
import DealCard from "./DealCard";
import Header from "./Header";

export default function Deals() {
  const [deals, setDeals] = useState(null);

  async function fetchDeals() {
    try {
      const response = await fetch(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&sortBy=Deal Rating&pageSize=12"
      );
      if (!response.ok) {
        throw new Error("Request failed, Status: " + response.status);
      }
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="ui horizontal divider">Placeholder for sort</div>
        <Container className="ui fluid center aligned">
          <Card.Group itemsPerRow={5} doubling>
            <DealCard deals={deals} />
          </Card.Group>
        </Container>
      </main>
    </>
  );
}
