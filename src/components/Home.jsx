import Deals from "./DealsContainer";
export default function SavedDeals() {
  return (
    <main>
      <Deals
        link={
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&sortBy=Deal Rating&pageSize=12"
        }
      />
    </main>
  );
}
