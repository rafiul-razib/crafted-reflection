import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, image, subcategory_name, price_range } = category;
  return (
    <div className="card card-compact rounded-none bg-base-100 shadow-xl">
      <figure className="h-52">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{subcategory_name}</h2>
        <p>Price range : {price_range}</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${subcategory_name}`}>
            <button className="btn glass btn-sm bg-red-700 text-white">
              View Items
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
