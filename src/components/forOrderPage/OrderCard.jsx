import PropTypes from 'prop-types';
import useAuth from '../../myHooks/useAuth';
import {  useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../myHooks/useAxiosSecure';
import useCart from '../../myHooks/useCart';

const OrderCard = ({item}) => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  
    const {name, image, price, recipe} = item;
    const handleAddToCart = id => {
      if(user){
        const cart = {
          menuId: id,
          email: user.email
        }
        axiosSecure.post('/carts', cart)
        .then((res) => {
          if(res.data.insertedId){
            refetch();
             toast("Successfully added to Cart");
          }
        })
       
      }
      else{
        navigate("/login", {state: location.pathname})
      }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <p className='bg-black text-white py-2 px-2  w-16 absolute right-0 mr-12  top-12'>${price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={() => handleAddToCart(item._id)}>Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;
OrderCard.propTypes = {
    item: PropTypes.object.isRequired
}