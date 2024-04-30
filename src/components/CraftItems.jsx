import ItemCard from "./ItemCard";

const CraftItems = ({ crafts }) => {
  const craftItems = crafts.slice(0, 6);

  console.log(craftItems);

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Artistic Crafts</h1>
        <p className="max-w-4xl mx-auto mt-4 mb-12">
          Welcome to our artisanal world where paper and glass converge in
          exquisite harmony. Our crafted pieces blend meticulous design with
          timeless elegance, offering a range of products that celebrate
          creativity and sophistication in every detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {craftItems.map((craft) => (
          <ItemCard key={craft._id} craft={craft}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
