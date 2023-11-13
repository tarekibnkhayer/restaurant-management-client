import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import bannerImg from '../assets/menu/banner3.jpg';
import dessertImg from '../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import saladImg from '../assets/menu/salad-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';

import SectionTitle from "../components/shared/SectionTitle";
import ShowItems from "../components/shared/ShowItems";
import useMenu from "../myHooks/useMenu";


const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            {/* banner img  & Offered Title*/}
          <div className="mb-24">
          <Cover bgImg={bannerImg} heading="our menu" paragraph="WOULD YOU LIKE TO TRY A DISH" bgImgH="800px" pX="390px" pY="140px"></Cover>
          </div>
            <SectionTitle heading="Today's offer" subHeading="Don't miss"></SectionTitle>
            <ShowItems  items={offered} btnText="Order your favorite food"></ShowItems>
            {/* Dessert */}
            <Cover bgImg={dessertImg} heading="Desserts" paragraph=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  bgImgH="700px" pX="100px" pY="100px"></Cover>
           <div className="mt-24">
           <ShowItems title="dessert" items={dessert} btnText="Order your favorite food"></ShowItems>
           </div>
           {/* Pizza */}
           <Cover bgImg={pizzaImg} heading="Pizzas" paragraph=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  bgImgH="700px" pX="100px" pY="100px"></Cover>
           <div className="mt-24">
           <ShowItems title="pizza" items={pizza} btnText="Order your favorite food"></ShowItems>
           </div>
           {/* Salads */}
           <Cover bgImg={saladImg} heading="Salads" paragraph=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  bgImgH="700px" pX="100px" pY="100px"></Cover>
           <div className="mt-24">
           <ShowItems title="salad" items={salad} btnText="Order your favorite food"></ShowItems>
           </div>
           <Cover bgImg={soupImg} heading="Soups" paragraph=" Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  bgImgH="700px" pX="100px" pY="100px"></Cover>
           <div className="mt-24">
           <ShowItems title="soup" items={soup} btnText="Order your favorite food"></ShowItems>
           </div>
        </div>
    );
};

export default OurMenu;