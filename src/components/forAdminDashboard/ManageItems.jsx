import { FaEdit } from "react-icons/fa";
import useMenu from "../../myHooks/useMenu";
import SectionTitle from "../shared/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        console.log(id)
        axiosSecure.delete(`/menu/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                refetch();
                toast(`successfully deleted`);
            }
        })
    };
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up!"></SectionTitle>
            <div className="bg-[#FFF] w-4/5 mx-auto ">
                   <div>
                    <h2 className="text-3xl font-bold uppercase text-[#151515] font-cinzel">Total items:{menu.length}</h2>
                    {/* <h2 className="text-3xl font-bold uppercase text-[#151515] font-cinzel">Total Price:  ${totalPrice.toFixed(2)}</h2> */}
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
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
         {
            menu.map((item, i) => <tr key={item._id}>
                <th>
                    {i + 1}
                </th>
                <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
                <td>
                <div className="font-bold">{item.name}</div>
                </td>
                <td>${item.price}</td>
                <td>
               <Link to={`/dashboard/updateItems/${item._id}`}> <button className="btn btn-ghost btn-xs"><FaEdit className="text-xl"></FaEdit></button></Link>
                </td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-xl"></MdDeleteForever></button>
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

export default ManageItems;