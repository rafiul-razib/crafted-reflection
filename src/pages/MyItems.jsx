import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import ItemCard from "../components/ItemCard";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const crafts = useLoaderData();

  const userItems = crafts.filter((craft) => craft.user_email === user.email);
  // console.log(userItems);

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1>Hi {user.displayName},</h1>
        <h1>Here are the items added by you</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {userItems.map((item) => (
          <ItemCard key={item._id} craft={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
