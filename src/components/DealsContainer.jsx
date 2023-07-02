import { useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import "../styles/Deals.css";
import DealCard from "./DealCard";

export default function Deals({ link }) {
  const [deals, setDeals] = useState(null);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error("Request failed, Status: " + response.status);
        }
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.log("Error:", error);
        alert("Failed to fetch deal data, please refresh");
      }
    }
    fetchDeals();
  }, [link]);

  return (
    <main>
      <div className="ui horizontal divider">Placeholder for sort</div>
      <Container className="ui fluid center aligned">
        <Card.Group itemsPerRow={5} doubling>
          <DealCard deals={deals} />
        </Card.Group>
      </Container>
    </main>
  );
}
