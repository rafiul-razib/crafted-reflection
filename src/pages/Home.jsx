import Banner from "../components/Banner";
import CraftItems from "../components/CraftItems";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <Banner />
      <CraftItems crafts={crafts} />
    </div>
  );
};

export default Home;
