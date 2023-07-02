import DealsContainer from "./DealsContainer";
export default function SavedDeals() {
  return (
    <>
      <header>
        <h1>Saved Deals</h1>
      </header>
      <main>
        <DealsContainer link="http://localhost:3001/saved" />
      </main>
    </>
  );
}
