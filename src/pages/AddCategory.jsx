import Swal from "sweetalert2";

const AddCategory = () => {
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;

    const subcategory_name = form.subcategory_name.value;

    const price_range = form.price_range.value;

    const newCategory = {
      image,

      subcategory_name,

      price_range,
    };

    console.log(newCategory);

    // fetch("http://localhost:3000/category", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newCategory),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div className="px-8 lg:px-16 bg-red-300">
      <form onSubmit={handleAddCategory}>
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
              <span className="label-text">Price Range</span>
            </div>
            <input
              name="price_range"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>

          <input
            type="submit"
            value="Add Category"
            className="btn glass bg-red-700 my-8 w-full text-white col-span-2"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
