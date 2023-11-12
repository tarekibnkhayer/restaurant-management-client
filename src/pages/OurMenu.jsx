import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import bannerImg from '../assets/menu/banner3.jpg';


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover bgImg={bannerImg} heading="our menu" paragraph="WOULD YOU LIKE TO TRY A DISH" bgImgH="800px"></Cover>
        </div>
    );
};

export default OurMenu;