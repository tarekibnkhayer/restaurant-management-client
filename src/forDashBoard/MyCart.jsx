import { useEffect, useState } from "react";
import SectionTitle from "../components/shared/SectionTitle";
import useCart from "../myHooks/useCart";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import { toast } from "react-toastify";


const MyCart =() => {
  let serial = 1;
    const [items, setItems] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const cartMenuIds = cart.map(aCart => aCart.menuId);
   useEffect(() => {
    axiosSecure.get(`/menu?menuIds=${JSON.stringify(cartMenuIds)}`)
    .then(res => setItems(res.data))
   },[axiosSecure, cartMenuIds]);
   const totalPrice = items.reduce((accumulator, item) => accumulator + item.price, 0);
   const handleDelete = id => {
    axiosSecure.delete(`/carts/${id}`)
    .then(res => {
      if(res.data.deletedCount){
        refetch();
        toast("Item successfully deleted");
      }
    })
   }
    return (
        <div>
            <SectionTitle heading="Wanna Add More" subHeading="My Cart"></SectionTitle>
            <div className="bg-[#FFF] w-4/5 mx-auto ">
               <div className="flex justify-evenly items-center px-12 pt-14 pb-9">
                <h2 className="text-3xl font-bold uppercase text-[#151515] font-cinzel">Total Orders: {cart.length}</h2>
                <h2 className="text-3xl font-bold uppercase text-[#151515] font-cinzel">Total Price:  ${totalPrice.toFixed(2)}</h2>
                <button className="bg-[#D1A054] px-5 py-4 rounded-lg text-xl font-bold font-cinzel text-[#FFF]">Pay</button>
               </div>
               {/* table */}
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Serial
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
     {
        items.map(item => <tr key={item._id}>
            <th>
              {serial++}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                 
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">{item.name}</div>
            </td>
            <td>{item.price}</td>
            <th>
              <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(item._id)}>X</button>
            </th>
          </tr> )
     }
     
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default MyCart;