import PropTypes from 'prop-types';

const Item = ({item}) => {
    return (
        <div className='flex gap-8 items-center '>
            <div className='w-28'>
                <img src={item.image} alt="" className='' style={{borderRadius: '0px 200px 200px 200px'}}/>
            </div>
            <div>
                <h3 className='font-cinzel text-xl font-normal text-[#151515]'>{item.name}</h3>
                <p className='text-[#737373] font-inter font-normal text-base'>{item.recipe}</p>
            </div>
            <div className='text-[#BB8506] font-inter text-xl font-normal '>
               ${item.price}
            </div>
        </div>
    );
};

export default Item;
Item.propTypes = {
    item : PropTypes.object.isRequired
}