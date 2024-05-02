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
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-red-800">{item_name}</h2>
        <p className="text-md font-semibold">Category : {subcategory_name}</p>
        <p>{short_description}</p>
        <div className="flex justify-center font-semibold">
          <p>Price : {price}</p>
          <p>Rating : {rating}</p>
        </div>
        <p>Can be processed within {processing_time}</p>
        {/* <p className="badge bg-green-600 mx-auto p-3 font-semibold text-white">
          {stock_status}
        </p> */}
        <div className="divider my-0"></div>
        <div className="card-actions justify-center">
          <Link to={`/crafts/${_id}`}>
            <button className="btn glass btn-sm bg-red-700 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
