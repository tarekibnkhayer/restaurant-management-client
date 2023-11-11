import SectionTitle from "../shared/SectionTitle";
import img from '../../assets/home/slide1.jpg';

const ChefRecommends = () => {
    return (
        <div className="mb-32">
            <SectionTitle heading="Chef Recommend" subHeading="Should Try"></SectionTitle>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Recommend Recipe" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caesar Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-2 text-[#BB8506]">ADD TO CART</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Recommend Recipe" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caesar Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-2 text-[#BB8506]">ADD TO CART</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Recommend Recipe" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caesar Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-2 text-[#BB8506]">ADD TO CART</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default ChefRecommends;