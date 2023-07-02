export default function DatedHeader() {
  const date = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <header>
      <h1>
        Top Steam Deals for{" "}
        {month[date.getMonth()] +
          "/" +
          date.getDate() +
          "/" +
          date.getFullYear()}
      </h1>
    </header>
  );
}
