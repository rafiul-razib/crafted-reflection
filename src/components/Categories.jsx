import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://crafted-reflections-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div className="max-w-6xl mx-auto my-16">
      <div className="text-center">
        <Slide>
          <h1 className="text-3xl font-bold">Our Crafts Categories</h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="max-w-4xl mx-auto mt-4 mb-12">
            Our crafted pieces blend meticulous design with timeless elegance,
            offering a range of products that celebrate creativity and
            sophistication in every detail.
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
