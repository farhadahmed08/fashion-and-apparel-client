import { Link, useLoaderData } from "react-router-dom";


const BrandTitle = ({brandName}) => {



    const allBrands = useLoaderData();
    console.log(allBrands)




    const {brand,image,description} =brandName;
    console.log(brand)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full h-[356px]">
  <figure className=""><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-400">{brand}</h2>
    <p>{description}</p>
    <Link to={`/products/brand/${brand}`}>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View</button>
    </div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default BrandTitle;