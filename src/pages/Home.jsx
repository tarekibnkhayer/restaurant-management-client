import Banner from "../components/forHomePage/Banner";
import CallUs from "../components/forHomePage/CallUs";
import Category from "../components/forHomePage/Category";
import ChefRecommends from "../components/forHomePage/ChefRecommends";
import ChefService from "../components/forHomePage/ChefService";
import PopularMenu from "../components/forHomePage/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;