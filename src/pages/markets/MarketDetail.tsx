import ContractList from "#/components/contracts/ContractList";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import getMarket from "#/api/queries/getMarket";

const Markets: React.FC = () => {
  const { marketId } = useParams();

  if (!marketId) {
    return <div>No market id provided</div>;
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (marketId === undefined || !/\d+/.test(marketId)) {
      console.error("Invalid marketId:", marketId);
      navigate(-1);
    }
  }, [marketId, navigate]);

  const market = getMarket(parseInt(marketId));

  // TODO fix the aboce shit
  //    maybe a custom useParams hook to only return defined integers

  return (
    <div className="container mt-3">
      {market.isLoading && <div>Loading...</div>}
      {market.isError && <div>Error: {market.error.message}</div>}
      {market.isSuccess && (
        <>
          <h3>{market.data.prompt}</h3>
          <hr />
          <ContractList marketId={market.data.id} />
        </>
      )}
    </div>
  );
};

export default Markets;
