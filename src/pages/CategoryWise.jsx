import { useLoaderData, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { Typewriter } from "react-simple-typewriter";

const CategoryWise = () => {
  const category = useParams();
  const allItems = useLoaderData();

  console.log(category.selectedCategory);

  const selectedCategoryItems = allItems.filter(
    (item) => item.subcategory_name === category.selectedCategory
  );
  console.log(selectedCategoryItems);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{category.selectedCategory}</h1>
        <p className="max-w-4xl mx-auto mt-4 mb-12">
          Our crafted pieces blend meticulous design with timeless elegance,
          offering a range of products that celebrate creativity and
          sophistication in every detail.
        </p>
      </div>

      {selectedCategoryItems.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {selectedCategoryItems.map((craft) => (
            <ItemCard key={craft._id} craft={craft}></ItemCard>
          ))}
        </div>
      ) : (
        <div className="text-center mb-20">
          {/* <h1 className="text-red-700 font-bold text-3xl">
            Currently no items available in this category!!
          </h1> */}
          <span className="text-red-700 font-bold text-3xl">
            <Typewriter
              words={["Currently no items available in this category!!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default CategoryWise;
