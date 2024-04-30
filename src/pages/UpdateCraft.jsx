import React from "react";

const UpdateCraft = () => {
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
    };

    console.log(newCraft);
  };

  return (
    <div className="px-16 bg-orange-300">
      <form onSubmit={handleUpdateCraft}>
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

          <input
            type="submit"
            value="Update Craft"
            className="btn glass bg-orange-500 my-8 w-full text-white col-span-2"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCraft;
