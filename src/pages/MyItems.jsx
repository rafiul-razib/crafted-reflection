import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyItemCard from "../components/MyItemCard";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const myCrafts = useLoaderData();
  const userItems = myCrafts.filter((craft) => craft.user_email === user.email);

  const [myItems, setMyItems] = useState(userItems);

  return (
    <div className="max-w-6xl mx-auto my-8">
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Hi {user.displayName},<br />
          Here are the items added by you !!!
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myItems.map((item) => (
          <MyItemCard
            key={item._id}
            craft={item}
            myItems={myItems}
            setMyItems={setMyItems}
          ></MyItemCard>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
