import { Market } from "#/types";
import { Link, useNavigate } from "react-router-dom";

interface MarketCardProps {
  market: Market;
}

const MarketCard: React.FC<MarketCardProps> = ({ market }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <Link to={`/markets/${market.id}`} className="text-reset text-decoration-none">
        <div className="card-body">
          <h5 className="card-title">{market.prompt}</h5>
          {/* <div className="card-text">
            {market.projectedEnd?.toString() ?? "TDB"}
          </div> */}
          <div>
            {market.tags.map((tag) => (
              <span key={tag.name} className="badge rounded-pill bg-primary">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MarketCard;
