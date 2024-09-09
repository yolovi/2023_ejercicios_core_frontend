
import Menu from "../Menu/Menu";

const dishes = [
  {
    id: 1,
    name: "dish 1",
    description: "This is the dish number 1",
    price: 10,
  },
  {
    id: 2,
    name: "dish 2",
    description: "This is the dish number 2",
    price: 20,
  },
  {
    id: 3,
    name: "dish 3",
    description: "This is the dish number 3",
    price: 15,
  },
];

const Home = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Menu dishes={dishes} />
    </div>
  );
};

export default Home;
