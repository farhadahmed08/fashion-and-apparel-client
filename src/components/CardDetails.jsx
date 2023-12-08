import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const singleBrandCards = useLoaderData();
  const { _id,name, type, price, description, rating, image,brand } = singleBrandCards;
  console.log(singleBrandCards);
  console.log(name);
  const productId = useParams();
  console.log(productId);

  return (
    <div>
      <div className="hero min-h-screen bg-green-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{brand}</h1>
            <p className="py-6">
              {description}
            </p>
            <p className="py-6 font-bold">
              {price}
            </p>
           <Link to={`/myCart/${_id}`}> <button className="btn btn-primary">Add to Cart</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
