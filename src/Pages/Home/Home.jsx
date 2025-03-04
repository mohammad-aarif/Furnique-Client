import FeaturedProducts from "./Featured Products/FeaturedProducts";
import Header from "./Header/Header";
import HotCategories from "./Hot Catagory/HotCategories";
import NewArrival from "./New Arrival/NewArrival";

const Home = () => {
    return (
        <div>
            <Header />
            <HotCategories />
            <FeaturedProducts />
            <NewArrival />
        </div>
    );
};

export default Home;