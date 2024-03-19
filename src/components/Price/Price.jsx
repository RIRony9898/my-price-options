import PropTypes from "prop-types"; // ES6

const Price = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}$</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl font-semibold text-center my-4 bg-blue-600 py-3">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => {
          return (
            <li className="font-semibold" key={index}>
              {feature}
            </li>
          );
        })}
      </div>
      <button className="btn mt-12 w-full bg-blue-950 text-xl text-white">
        Buy Now
      </button>
    </div>
  );
};

Price.propTypes = {
  option: PropTypes.object,
};

export default Price;
