import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyItemCard = ({ craft, myItems, setMyItems }) => {
  // const[crafts, setCrafts] = useState(null)

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crafted-reflections-server.vercel.app/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            console.log(data);
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
            Swal.fire({
              title: "Success!",
              text: "Deleted item successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          });
      }
    });
  };
  return (
    <div className="card card-compact rounded-none bg-base-100 shadow-xl">
      <figure className="h-52">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
        <p>Can be Customized : {customization}</p>
        <p>Stock : {stock_status}</p>
        <div className="card-actions justify-end">
          <Link to={`/updateItem/${_id}`}>
            <button className="btn glass bg-green-600 text-white">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn glass bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItemCard;
