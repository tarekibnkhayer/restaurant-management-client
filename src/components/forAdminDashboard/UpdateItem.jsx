import { useLoaderData } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../myHooks/useAxiosPublic";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import { toast } from "react-toastify";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, price, recipe, _id} = useLoaderData();
    const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url:
    const imagFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api, imagFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    // store these info in database:
    const menuItem = {
      name: data.name,
      recipe: data.recipe,
      image: res.data.data.display_url,
      category: data.category,
      price: data.price
    }
    const menuRes = await  axiosSecure.patch(`/menu/${_id}`, menuItem);
    if(menuRes.data.modifiedCount){
      toast(`${data.name} updated successfully`);
    }
  };
    return (
        <div>
        <SectionTitle
          heading="Update an item"
          subHeading="What's new?"
        ></SectionTitle>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[992px] mx-auto"
          >
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
                {...register("name", {required: true})}
                type="text"
                placeholder="Recipe name"
                className="input input-bordered w-full "
                defaultValue={name}
              />
            </div>
            <div className="flex gap-6">
              {/* category */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  {...register("category", {required: true})}
                  className="select w-full max-w-xs"
                  defaultValue={category}
                >
                  <option disabled value="default">
                    Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
  
              {/* price */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  {...register("price",  {required: true})}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full "
                  defaultValue={price}
                />
              </div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
  
              <textarea
              {...register("recipe")}
                placeholder="Recipe Details"
                className="textarea textarea-bordered textarea-lg w-full "
                defaultValue={recipe}
              ></textarea>
            </div>
            <div className="my-6">
            <input 
            {...register('image')}
             type="file"
              className="file-input w-full max-w-xs" />
            </div>
           <button type="submit" className="bg-gradient-to-r from-[#835D23] to-[#B58130] px-7 py-4 flex items-center gap-2 text-white rounded-lg">Update Item Info <FaUtensils></FaUtensils></button>
          </form>
        </div>
      </div>
    );
};

export default UpdateItem;