import usePurchaseTokens from "#/api/mutations/usePurchaseTokens";
import getPortfolio from "#/api/queries/getPortfolio";
import getUser from "#/api/queries/getUser";
import { useQueryClient } from "@tanstack/react-query";

const Profile: React.FC = () => {
  const queryClient = useQueryClient();

  const user = getUser();
  const portfolio = getPortfolio();
  const purchaseTokens = usePurchaseTokens({
    onSuccess: (updatedUser) => queryClient.setQueryData(["user"], updatedUser),
  });

  return (
    <div className="container mt-3">
      {user.isSuccess ? <h1>Welcome, {user.data.username}!</h1> : <h1>Welcome, friend!</h1>}
      {user.isLoading && <div>Loading...</div>}
      {user.isError && <div>Error: {user.error.message}</div>}
      {user.isSuccess && (
        <>
          <h5>You have {user.data.profile.tokens} tokens!</h5>
          <button
            className="btn btn-primary"
            onClick={() => purchaseTokens.mutate({ tokens: 100 })}
          >
            Click here to get 100 more tokens!
          </button>
        </>
      )}
      {portfolio.isLoading && <div>Loading...</div>}
      {portfolio.isError && <div>Error: {portfolio.error.message}</div>}
      {portfolio.isSuccess &&
        portfolio.data.pendingOffers.map((offer) => (
          <div key={offer.id} className="d-flex">
            <h5>Contract - {offer.contract}</h5>
            <p>
              {offer.quantity}x @ {offer.price} cents
            </p>
            <p>{offer.contractType}</p>
            <p>{offer.offerType}</p>
          </div>
        ))}
      {portfolio.isSuccess &&
        portfolio.data.currentInvestments.map((investment) => (
          <div key={investment.id} className="d-flex">
            <h5>Contract - {investment.contract}</h5>
            <p>
              {investment.quantity}x @ {investment.purchasePrice} cents
            </p>
            <p>{investment.purchaseTimestamp.toDateString()}</p>
          </div>
        ))}
    </div>
  );
};

export default Profile;
