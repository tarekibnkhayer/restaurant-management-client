import SectionTitle from "../shared/SectionTitle";
import img from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="bg-featured bg-center  bg-cover p-24 mb-32 h-[800px] bg-blend-darken bg-[#151515B3]">
            <SectionTitle heading="From Our Menu" subHeading="Check it out"></SectionTitle>
            <div className="flex items-center gap-12">
                <div className=""><img src={img} alt=""  /></div>
                <div className="text-[#FFF] font-inter font-normal">
                    <h2 className=" text-2xl">March 20, 2023</h2>
                    <h3 className="uppercase  text-2xl">Where Can I Get Some</h3>
                    <p className=" text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi eligendi reprehenderit ipsum perferendis, rem aspernatur alias, minus quia, ad harum est neque. Ex ducimus saepe, quam ea maxime incidunt.</p>
                </div>

            </div>
        </div>
    );
};

export default Featured;