import { useLoaderData } from "react-router-dom";
import CraftRow from "../components/CraftRow";

const AllProducts = () => {
  const allCrafts = useLoaderData();
  console.log(allCrafts);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>SI</th>
            <th>Craft Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {allCrafts.map((craft, idx) => (
            <CraftRow key={craft._id} craft={craft} idx={idx}></CraftRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
