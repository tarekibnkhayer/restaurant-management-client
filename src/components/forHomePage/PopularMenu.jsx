import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import axios from "axios";
import Item from "../shared/Item";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios('menu.json')
        .then(res => {
            const popularItems = res.data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <div className="mb-24">
            <SectionTitle heading="From our menu" subHeading="check it out"></SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
          {
                menu.map(item => <Item key={item._id} item={item}></Item>)
            }
          </div>
        <div className="mx-auto w-48">
        <button className="uppercase btn btn-outline border-0  border-b-2 ">View Full Menu</button>
        </div>
        </div>
    );
};

export default PopularMenu;