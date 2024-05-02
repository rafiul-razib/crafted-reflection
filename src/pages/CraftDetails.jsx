import { Link, useLoaderData } from "react-router-dom";
import Animate from "../components/Animate";

const CraftDetails = () => {
  const craft = useLoaderData();
  const {
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
    <div className="bg-base-200 py-8">
      <div className="mx-auto card card-compact max-w-xl rounded-none bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-700">{item_name}</h2>
          <p className="font-semibold">Category : {subcategory_name}</p>
          <p>Description : {short_description}</p>
          <p>Price : {price}</p>
          <div className="grid grid-cols-4">
            <div className="col-span-3 space-y-3">
              <p>Rating: {rating}</p>
              <p>Can be customized : {customization}</p>
              <p>Processing time : {processing_time}</p>
              <p className="badge bg-green-600 text-white font-bold p-4">
                {stock_status}
              </p>
            </div>
            <Animate />
          </div>

          <div className="card-actions justify-center">
            <Link to={"/payment"}>
              <button className="btn glass bg-green-700 text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
