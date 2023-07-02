import Deals from "./DealsContainer";
import DatedHeader from "./DatedHeader";
export default function Home() {
  return (
    <>
      <DatedHeader />
      <main>
        <Deals link="https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&sortBy=Deal Rating&pageSize=20" />
      </main>
    </>
  );
}
