import { useLoaderData } from "react-router-dom";

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
    <div className="bg-bage-200">
      <div className="mx-auto card card-compact w-96 rounded-none bg-base-100 shadow-xl my-8">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>Category : {subcategory_name}</p>
          <p>Description : {short_description}</p>
          <p>Price : {price}</p>
          <p>Rating: {rating}</p>
          <p>Can be customized : {customization}</p>
          <p>Processing time : {processing_time}</p>
          <p>Stock : {stock_status}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
