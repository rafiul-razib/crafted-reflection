import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CraftItems from "../components/CraftItems";
import { useLoaderData } from "react-router-dom";
import About from "./About";
import Stats from "../components/Stats";

const Home = () => {
  const crafts = useLoaderData();

  return (
    <div>
      <Banner />
      <CraftItems crafts={crafts} />
      <Categories />
      <Stats />
      <About />
    </div>
  );
};

export default Home;
