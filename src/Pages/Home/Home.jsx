import FeaturedProducts from "./Featured Products/FeaturedProducts";
import Header from "./Header/Header";
import HotCategories from "./Hot Catagory/HotCategories";

const Home = () => {
    return (
        <div>
            <Header />
            <HotCategories />
            <FeaturedProducts />
        </div>
    );
};

export default Home;