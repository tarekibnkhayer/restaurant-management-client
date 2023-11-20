import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import SectionTitle from "../shared/SectionTitle";
import { toast } from "react-toastify";


const AllUsers = () => {
    let serial = 1;
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleDelete = id => {
        axiosSecure.delete(`/users/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                refetch();
                toast("User successfully deleted");
            }
        })
    };
    const handleMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res => {
            refetch();
            if(res.data.modifiedCount){
                toast("Admin Added");
            }
        })
    }
        return (
            <div>
                <SectionTitle heading="Wanna Add More" subHeading="My Cart"></SectionTitle>
                <div className="bg-[#FFF] w-4/5 mx-auto ">
                   <div>
                    <h2 className="text-3xl font-bold uppercase text-[#151515] font-cinzel">Total Users:{users.length}</h2>
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
            <th>User Name</th>
            <th>User Email</th>
            <th>Role</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
         {
            users.map(user => <tr key={user._id}>
                <th>
                  {serial++}
                </th>
                <td>
                <div className="font-bold">{user.name}</div>
                </td>
                <td>{user.email}</td>
                <td>
                   {
                    user.role === 'admin'? "Admin":  <button className="btn" onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>
                   }
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(user._id)}>X</button>
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

export default AllUsers;