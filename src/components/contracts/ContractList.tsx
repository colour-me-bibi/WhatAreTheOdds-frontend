import OfferForm from "#/components/offers/OfferForm";
import { useState } from "react";

import getContracts from "#/api/queries/getContracts";

interface ContractListProps {
  marketId: number;
}

const ContractList: React.FC<ContractListProps> = ({ marketId }) => {
  const contracts = getContracts(marketId);

  const [selectedContract, setSelectedContract] = useState<any>(); // TODO fix this

  return (
    <>
      {contracts.isLoading && <div>Loading...</div>}
      {contracts.isError && <div>Error: {contracts.error.message}</div>}
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">Contract</th>
            <th scope="col" className="text-center">
              Latest Yes Price
            </th>
            <th scope="col" className="text-center">
              Best Offer
            </th>
            <th scope="col" />
            <th scope="col" className="text-center">
              Best Offer
            </th>
          </tr>
        </thead>
        <tbody>
          {contracts.isSuccess &&
            contracts.data.map((contract) => (
              <tr key={contract.id}>
                <th scope="row" className="align-middle fs-6">
                  {contract.name}
                </th>
                <td className="text-center fw-bold fs-4">
                  {contract.latestYesPrice ?? "50c"}
                </td>
                <td className="text-center fw-bold fs-4">50c</td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-success"
                    data-bs-toggle="collapse"
                    data-bs-target="#offerCollapse"
                    onClick={() =>
                      setSelectedContract({
                        marketId,
                        contractId: contract.id,
                        bestPrice: 50,
                        contractType: "Y",
                        offerType: "B",
                      })
                    }
                  >
                    Buy Yes
                  </button>
                  <div className="px-1" />
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="collapse"
                    data-bs-target="#offerCollapse"
                    onClick={() =>
                      setSelectedContract({
                        marketId,
                        contractId: contract.id,
                        bestPrice: 50,
                        contractType: "N",
                        offerType: "B",
                      })
                    }
                  >
                    Buy No
                  </button>
                </td>
                <td className="text-center fw-bold fs-4">50c</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="collapse" id="offerCollapse">
        {selectedContract && <OfferForm {...selectedContract} />}
      </div>
    </>
  );
};

export default ContractList;
