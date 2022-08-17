import useCreateOffer from "#/api/mutations/useCreateOffer";
import getUser from "#/api/queries/getUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface OfferFormProps {
  marketId: number;
  contractId: number;
  bestPrice: number;
  contractType: "Y" | "N";
  offerType: "B" | "S";
}

const OfferForm: React.FC<OfferFormProps> = ({
  marketId,
  contractId,
  bestPrice,
  contractType,
  offerType,
}) => {
  const navigate = useNavigate();
  const user = getUser();

  const [price, setPrice] = useState(bestPrice);
  const [quantity, setQuantity] = useState(10);

  const createOffer = useCreateOffer(marketId, contractId, {
    onSuccess: () => navigate(`/profile`),
  });

  const handleSubmit = () => {
    console.log(`Creating offer for ${marketId}/${contractId}`);

    if (user.data?.pk === undefined) {
      console.log("Cannot create an offer because somehow the user is not logged in");
      return;
    }

    createOffer.mutate({
      user: user.data.pk,
      contract: contractId,
      price,
      quantity,
      contractType,
      offerType,
    });
  };

  // const axios = useAxios();

  // const { mutate } = useMutation(async () => {
  //   const data = {
  //     user: user.data?.pk,
  //     contract,
  //     quantity: numberOfShares,
  //     price: price,
  //     contractType: contractType,
  //     offerType: offerType,
  //   };

  //   console.log(data);

  //   try {
  //     return await axios.post<Omit<Offer, "id">>(
  //       `markets/${market}/contracts/${contract}/offers/`,
  //       data
  //     );
  //   } catch (error) {
  //     return console.error(error);
  //   }
  // });

  // useMutation
  // mutate then navigate to this market detail page

  return (
    <div className="container border py-1">
      <div className="row g-2">
        <div className="col-6">
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="" className="fw-semibold">
              {offerType == "B" ? "Maximum Buy" : "Minimum Sell"} Price
            </label>
            <div className="border border-dark p-1">
              <span className="">-1c</span>
              <input
                type="number"
                name=""
                id=""
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                className="text-center border-0"
              />
              <span>+1c</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="" className="fw-semibold">
              Number Of Shares
            </label>
            <div className="border border-dark p-1">
              <span className="">-25</span>
              <input
                type="number"
                name=""
                id=""
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="text-center border-0"
              />
              <span>+25</span>
            </div>
          </div>
        </div>
        <button className="col-12 btn btn-primary rounded-0 fw-semibold" onClick={handleSubmit}>
          Submit Offer
        </button>
      </div>
    </div>
  );
};

export default OfferForm;
