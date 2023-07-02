import DealsContainer from "./DealsContainer";
import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const queryValue = query.get("query");
  return (
    <>
      <header>
        <h1>Search Results</h1>
      </header>
      <main>
        <DealsContainer
          link={`https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Deal Rating&pageSize=20&title=${queryValue}`}
        />
      </main>
    </>
  );
}
