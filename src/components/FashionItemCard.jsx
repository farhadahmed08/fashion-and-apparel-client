import { Link } from "react-router-dom";


const FashionItemCard = ({card}) => {



    const {id,brand,image,description} =card;
    console.log(id);



    // const handleFilter = (brand)=>{
    //   console.log(brand)
    // }





    return (
        <div className="mb-10">
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className=""><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <p>{description}</p>
   <Link to={`/fashionItem/${id}`}> <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div></Link>
  </div>
</div>
        </div>
    );
};

export default FashionItemCard;