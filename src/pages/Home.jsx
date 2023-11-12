import Banner from "../components/forHomePage/Banner";
import CallUs from "../components/forHomePage/CallUs";
import Category from "../components/forHomePage/Category";
import ChefRecommends from "../components/forHomePage/ChefRecommends";
import ChefService from "../components/forHomePage/ChefService";
import Featured from "../components/forHomePage/Featured";
import PopularMenu from "../components/forHomePage/PopularMenu";
import Testimonials from "../components/forHomePage/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;