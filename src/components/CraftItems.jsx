import ItemCard from "./ItemCard";

const CraftItems = ({ crafts }) => {
  const craftItems = crafts.slice(0, 6);

  console.log(craftItems);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1>Our Artistic Crafts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          corporis sint doloremque iure maxime ipsam minus iusto cupiditate, id
          impedit?
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {craftItems.map((craft) => (
          <ItemCard key={craft._id} craft={craft}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
