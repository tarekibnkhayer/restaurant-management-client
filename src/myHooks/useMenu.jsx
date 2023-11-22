import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    const axiosSecure = useAxiosSecure();
    // useEffect(() => {
    //     axiosSecure.get('/menu')
    //     .then(res =>{
    //          setMenu(res.data)
    //          setLoading(false);
    //         });
    // },[axiosSecure])
    const {isPending: loading, data: menu =[], refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
          const res = await axiosSecure.get('/menu');
          return res.data;
        }
    })
    return [menu, loading, refetch]
};

export default useMenu;