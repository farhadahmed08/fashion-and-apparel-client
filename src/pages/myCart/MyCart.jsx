import { useLoaderData, useParams } from "react-router-dom";


const MyCart = () => {

    const myCart= useLoaderData();
    const {_id,name, type, price, description, rating, image,brand} = myCart;
    const productId = useParams();


    return (
        <div className="flex items-center justify-center">
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCart;