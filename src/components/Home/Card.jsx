import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const Card = ({ loan }) => {
  const {
    _id,
    loan_title,
    description,
    category,
    max_loan_limit,
    interest_rate,
    image,
  } = loan || {};
 console.log(loan)
  return (
    <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src={image || "https://i.ibb.co.com/twY5Q0ZK/gettyimages-1330965067-612x612.jpg"}
        alt={loan_title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl text-primary font-semibold">
          {loan_title}
        </h3>
        <p className="text-sm text-accent line-clamp-2">
          {description}
        </p>
        <p className="text-sm text-accent">
          Category: <span className="font-medium text-secondary">{category}</span>
        </p>
        <div className="flex justify-between text-sm">
          <p className="text-accent">
            Interest:{" "}
            <span className="font-semibold text-secondary">
              {interest_rate}
            </span>
          </p>
          <p className="text-accent mr-1">
            Max:{" "}
            <span className="font-semibold text-secondary">
              {max_loan_limit}<TbCurrencyTaka className="text-[18px] inline-block" />
            </span>
          </p>
        </div>

        {/* View Details Button */}
        <Link to={`/loans/${_id}`}>
          <button className="w-full mt-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
