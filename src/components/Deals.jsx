import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "../styles/Deals.css"
import DealCard from "./DealCard";

export default function Deals() {
  const [test, setTest] = useState("testtext")

  useEffect(()=>{
    console.log("effect has been used")
  },[])
  
  return (
    <main>
        <div className="ui horizontal divider">
          Placeholder for sort
        </div>
      <Container className="ui fluid center aligned">
        <DealCard test={test}/>
      </Container>
    </main>
  )
}
