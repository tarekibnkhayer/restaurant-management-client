import OrderCard from "./OrderCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
   {
        items.map(item => <OrderCard key={item._id} item={item}></OrderCard>)
    }
   </div>
    );
};

export default OrderTab;
OrderTab.propTypes = {
    items: PropTypes.array.isRequired
}