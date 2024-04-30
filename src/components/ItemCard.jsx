import { Link } from "react-router-dom";

const ItemCard = ({ craft }) => {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_email,
    user_name,
  } = craft;
  return (
    <div className="card card-compact rounded-none bg-base-100 shadow-xl">
      <figure className="h-52">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>Category : {subcategory_name}</p>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`crafts/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
