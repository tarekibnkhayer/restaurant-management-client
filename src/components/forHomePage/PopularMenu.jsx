import SectionTitle from "../shared/SectionTitle";
import useMenu from "../../myHooks/useMenu";
import ShowItems from "../shared/ShowItems";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <div className="mb-24">
            <SectionTitle heading="From our menu" subHeading="check it out"></SectionTitle>
        <ShowItems items={popular} btnText="View Full Menu"></ShowItems>
        </div>
    );
};

export default PopularMenu;