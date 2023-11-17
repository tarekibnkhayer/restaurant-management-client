import { Link } from "react-router-dom";
import useAuth from "../../myHooks/useAuth";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../myHooks/useCart";

const Navbar = () => {
  const {user, signOutUser} = useAuth();
  const [cart] = useCart();
    const navLinks = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/contactUs">Contact Us</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/ourMenu">Our Menu</Link></li>
    <li><Link to="/ourShop/salad">Our Shop</Link></li>
   {
    user?<>
     <li onClick={() => signOutUser()}><Link>Logout</Link></li>
     <li><Link to="/dashboard/myCart" className="text-2xl btn">
     <TiShoppingCart />
  <div className="badge badge-secondary">{cart.length}</div>
</Link></li>
    </>:<>
    <li><Link to="/login">Login</Link></li>
    </>
   }
    </>
    return (
        <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-[#15151580] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-cinzel font-black">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-inter font-extrabold">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user? <>
          <p className="mr-2">{user.displayName}</p>
          <img src={user.photoURL} alt="" className="w-12 rounded-full" />
          </>: ''}
        </div>
      </div>
    );
};

export default Navbar;