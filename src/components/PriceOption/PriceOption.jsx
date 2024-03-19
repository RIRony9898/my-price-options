import Price from "../Price/Price";


const PriceOption = () => {

    const priceOption = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to locker rooms",
            "Fitness assessment upon joining",
            "Discounts on select gym merchandise"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "Access to all equipment including specialty machines",
            "Group fitness classes included",
            "Access to sauna and steam room",
            "Towel service",
            "Nutritional consultation",
            "Free guest pass once a month"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": 69.99,
          "features": [
            "Access to all Premium Membership features",
            "Personal training session once a month",
            "Discounts on supplements and merchandise",
            "Access to exclusive member events",
            "Priority booking for classes and training sessions",
            "Complimentary protein shake after each workout"
          ]
        }
      ]

    return (
        <div className="m-12">
            <h2 className="text-5xl my-8 text-center">Best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOption.map(option=> <Price key={option.id} option={option}></Price>)
            }
            </div>
        </div>
    );
};

export default PriceOption;