import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const item = useLoaderData();
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
  } = item;
  const handleUpdateCraft = (e) => {
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

    const updatedCraft = {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
    };

    fetch(`https://crafted-reflections-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Success!",
          text: "Craft updated successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });

    console.log(updatedCraft);
  };

  return (
    <div className="px-8 lg:px-16 bg-orange-300">
      <form onSubmit={handleUpdateCraft}>
        <div className="grid grid-cols-2 gap-4">
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              required
              defaultValue={image}
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
              required
              defaultValue={item_name}
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
            <select
              required
              name="subcategory_name"
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Card Making</option>
              <option>Scrapbooking</option>
              <option>Paper Quilling and Origami</option>
              <option>Glass Painting</option>
              <option>Lampworking</option>
              <option>Glass Dyeing and Staining</option>
            </select>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Short Description</span>
            </div>
            <input
              required
              defaultValue={short_description}
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
              required
              defaultValue={price}
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
              required
              defaultValue={rating}
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
            <select
              required
              name="customization"
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Processing Time</span>
            </div>
            <input
              required
              defaultValue={processing_time}
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
              required
              defaultValue={stock_status}
              name="stock_status"
              type="text"
              placeholder="Stock Status"
              className="input input-bordered w-full"
            />
          </label>

          <input
            type="submit"
            value="Update Craft"
            className="btn glass bg-red-700 my-8 w-full text-white col-span-2"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCraft;
