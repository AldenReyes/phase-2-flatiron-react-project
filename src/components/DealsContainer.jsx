import { useEffect, useState } from "react";
import { Card, Checkbox, Container, Form, Loader } from "semantic-ui-react";
import "../styles/Deals.css";
import DealCard from "./DealCard";

export default function Deals({ link }) {
  const [deals, setDeals] = useState(null);
  const [sort, setSort] = useState(null);
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
    async function fetchSort() {
      try {
        const response = await fetch("http://localhost:3001/sort/1");
        const data = await response.json();
        setSort(data.type);
      } catch (error) {
        console.log(error);
        alert("Failed to fetch Sort, please refresh");
      }
    }
    fetchDeals();
    fetchSort();
  }, [link]);

  function handleSortRadio(event, { value }) {
    setSort(value);
    handleSortSubmit(event, value);
  }

  function handleSortSubmit(event, value) {
    event.preventDefault();
    async function patchToDb() {
      try {
        const response = await fetch("http://localhost:3001/sort/1", {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            type: value,
          }),
        });
        if (!response.ok) {
          alert("An error occurred while sorting, please try again");
        }
      } catch (error) {
        console.log(error);
        alert("An error occurred while sorting, please try again");
      }
    }
    patchToDb();
  }

  function sortDeals(currentDeals) {
    if (sort === null) {
      return currentDeals;
    }
    switch (sort) {
      case "Deal Rating":
        return currentDeals.sort((a, b) => b.dealRating - a.dealRating);
      case "A-Z":
        return currentDeals.sort((a, b) => a.title.localeCompare(b.title));
      case "Current Price":
        return currentDeals.sort((a, b) => a.salePrice - b.salePrice);
      default:
        return currentDeals;
    }
  }

  if (deals === null || sort === null) {
    return (
      <Loader className="ui active huge inline centered">Loading...</Loader>
    );
  }
  return (
    <main>
      <Form>
        <Form.Group widths="equal" inline>
          <Form.Field>
            <label>Sort By:</label>
            <Checkbox
              radio
              label="Deal Rating"
              name="radioGroup"
              value="Deal Rating"
              checked={sort === "Deal Rating"}
              onChange={handleSortRadio}
            />
            <Checkbox
              radio
              label="A-Z"
              name="radioGroup"
              value="A-Z"
              checked={sort === "A-Z"}
              onChange={handleSortRadio}
            />
            <Checkbox
              radio
              label="Current Price"
              name="radioGroup"
              value="Current Price"
              checked={sort === "Current Price"}
              onChange={handleSortRadio}
            />
          </Form.Field>
        </Form.Group>
      </Form>
      <Container className="ui fluid center aligned">
        <Card.Group itemsPerRow={5} doubling>
          <DealCard deals={sortDeals(deals)} sort={sort} />
        </Card.Group>
      </Container>
    </main>
  );
}
