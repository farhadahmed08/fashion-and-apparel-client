import { Link } from "react-router-dom";

const SingleBrandCard = ({ singleCard }) => {
  const {_id, brand, image, name } = singleCard;
  console.log(_id)

  // console.log(brand)

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-[456px]">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>{name}</p>
          <Link to={`/products/${_id}`}>
            
            <div className="card-actions justify-end">
              <button className="btn btn-primary">details</button>
            </div>
          </Link>
          <Link to="/updateProduct"><div className="card-actions justify-end">
              <button className="btn btn-primary">Update</button>
            </div></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandCard;
