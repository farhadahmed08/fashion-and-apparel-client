import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Brand = ({ brandName }) => {

    





    const{_id} = useParams()
    console.log(_id)





  // console.log(brand)
  const { name, image, price, rating, brand } = brandName;
  // console.log(name);

  return (
    <div >
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure className="h-full">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{rating} Star</p>
          <div className="card-actions justify-end">
            <Link to={`/productDetails`}><button className="btn btn-primary">Details</button></Link>

            <Link to="/updateProduct"><button className="btn ">update</button></Link>

            <button  className="btn btn-warning">Delete</button>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
