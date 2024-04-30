import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    const newCraft = {
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
    };

    console.log(newCraft);

    fetch("https://crafted-reflections-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="px-16 bg-orange-300">
      <form onSubmit={handleAddCraft}>
        <div className="grid grid-cols-2 gap-4">
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Item Name</span>
            </div>
            <input
              name="item_name"
              type="text"
              placeholder="Item Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Subcategory Name</span>
            </div>
            <input
              name="subcategory_name"
              type="text"
              placeholder="Subcategory Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Short Description</span>
            </div>
            <input
              name="short_description"
              type="text"
              placeholder="Short Description"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Customization</span>
            </div>
            <input
              name="customization"
              type="text"
              placeholder="Customization"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Processing Time</span>
            </div>
            <input
              name="processing_time"
              type="text"
              placeholder="Processing Time"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Stock Status</span>
            </div>
            <input
              name="stock_status"
              type="text"
              placeholder="Stock Status"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input
              name="user_email"
              value={user.email}
              type="email"
              placeholder="User Email"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              name="user_name"
              value={user.displayName}
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full"
            />
          </label>
          <input
            type="submit"
            value="Add Craft"
            className="btn glass bg-orange-500 my-8 w-full text-white col-span-2"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
