import Banner from "../components/forHomePage/Banner";
import Category from "../components/forHomePage/Category";
import ChefService from "../components/forHomePage/ChefService";
import PopularMenu from "../components/forHomePage/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;