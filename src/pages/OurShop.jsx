import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import bannerImg from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../myHooks/useMenu";
import OrderTab from "../components/forOrderPage/OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
              <Helmet>
                <title>Restaurant | Shop</title>
            </Helmet>
            {/* banner img  & Offered Title*/}
          <div className="mb-24">
          <Cover bgImg={bannerImg} heading="our shop" paragraph="WOULD YOU LIKE TO TRY A DISH" bgImgH="800px" pX="390px" pY="140px"></Cover>
          </div>
          <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
  <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  
</Tabs>
        </div>
    );
};

export default OurShop;