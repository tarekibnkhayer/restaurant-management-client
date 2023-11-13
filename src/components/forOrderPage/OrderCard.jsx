import PropTypes from 'prop-types';

const OrderCard = ({item}) => {
    const {name, image, price, recipe} = item;

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
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;
OrderCard.propTypes = {
    item: PropTypes.object.isRequired
}