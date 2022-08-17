import listMarkets from "#/api/queries/listMarkets";
import MarketCard from "#/components/markets/MarketCard";
import { Link } from "react-router-dom";

const Markets: React.FC = () => {
  const markets = listMarkets();

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Markets</h1>
        <Link className="btn btn-primary" to="/markets/new">
          Create
        </Link>
      </div>
      {markets.isLoading && <div>Loading...</div>}
      {markets.isError && <div>Error: {markets.error.message}</div>}
      {markets.isSuccess &&
        markets.data.map((market) => <MarketCard key={market.id} market={market} />)}
    </div>
  );
};

export default Markets;
