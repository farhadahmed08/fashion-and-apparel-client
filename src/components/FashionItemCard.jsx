

const FashionItemCard = ({card}) => {

    const {brand,image,description} =card;

    return (
        <div className="mb-10">
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className=""><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FashionItemCard;