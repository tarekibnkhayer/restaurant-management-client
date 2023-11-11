import PropTypes from 'prop-types'; // ES6

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-96 mx-auto text-center my-12 font-inter'>
            <h1 className='text-[#D99904] text-xl italic font-normal mb-4 '>{subHeading}</h1>
            <hr className='border-[2px]'/>
            <h2 className='text-[#151515] text-[40px]  uppercase font-normal mb-5 '>{heading}</h2>
            <hr  className='border-[2px]'/>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
}