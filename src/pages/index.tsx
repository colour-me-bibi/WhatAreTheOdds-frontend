import getUser from "#/api/queries/getUser";
import listMarkets from "#/api/queries/listMarkets";
import MarketCard from "#/components/markets/MarketCard";

const Home: React.FC = () => {
  const user = getUser();
  const markets = listMarkets({
    onSuccess: (markets) => {
      console.log(`Got markets: ${JSON.stringify(markets, null, 2)}`);
    },
    onError: (err) => {
      console.log(`Error getting markets: ${err}`);
    },
  });

  return (
    <div className="container mt-3">
      {user.isSuccess ? <h1>Welcome, {user.data.username}!</h1> : <h1>Welcome, friend!</h1>}
      {markets.isLoading && <div>Loading...</div>}
      {markets.isError && <div>Error: {markets.error.message}</div>}
      {markets.isSuccess &&
        markets.data.map((market) => <MarketCard key={market.id} market={market} />)}
    </div>
  );
};

export default Home;
