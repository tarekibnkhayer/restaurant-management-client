import PropTypes from 'prop-types';
import Item from './Item';
import { Link } from 'react-router-dom';

const ShowItems = ({items, btnText, title}) => {
    return (
        <div className='mb-12'>
            <div className="grid md:grid-cols-2 gap-6">
          {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
          </div>
        <div className="mx-auto w-48">
      {
        title &&  <Link to={`/ourShop/${title}`}>
        <button className="uppercase btn btn-outline border-0  border-b-2 w-72">{btnText}</button>
        </Link>
      }
        </div>
        </div>
    );
};

export default ShowItems;
ShowItems.propTypes = {
    items: PropTypes.array.isRequired,
    btnText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}