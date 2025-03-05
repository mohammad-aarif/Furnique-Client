import FeaturedProducts from "./Featured Products/FeaturedProducts";
import Header from "./Header/Header";
import HotCategories from "./Hot Catagory/HotCategories";
import NewArrival from "./New Arrival/NewArrival";
import WhyBest from "./Why Best/WhyBest";

const Home = () => {
    return (
        <div>
            <Header />
            <HotCategories />
            <FeaturedProducts />
            <NewArrival />
            <WhyBest />
        </div>
    );
};

export default Home;