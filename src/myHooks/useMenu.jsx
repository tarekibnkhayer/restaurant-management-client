import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/menu')
        .then(res =>{
             setMenu(res.data)
             setLoading(false);
            });
    },[axiosSecure])
    return [menu, loading]
};

export default useMenu;