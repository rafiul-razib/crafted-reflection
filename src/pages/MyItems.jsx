import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyItemCard from "../components/MyItemCard";
import { IoIosArrowDown } from "react-icons/io";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const myCrafts = useLoaderData();
  const userItems = myCrafts.filter((craft) => craft.user_email === user.email);

  const [myItems, setMyItems] = useState(userItems);

  const handleCustomization = (assert) => {
    const customized = userItems.filter(
      (item) => item.customization.toLowerCase() == assert
    );
    setMyItems(customized);
  };

  return (
    <div className="max-w-6xl mx-auto my-8">
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Hi {user.displayName},<br />
          Here are the items added by you !!!
        </h1>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn glass mb-4 bg-red-700 text-white"
          >
            Customization <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleCustomization("yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleCustomization("no")}>
              <a>No</a>
            </li>
          </ul>
        </div>
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
