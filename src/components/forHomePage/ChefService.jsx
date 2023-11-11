import img from '../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='my-28 relative'>
            <img src={img} alt="" className=''/>
            <div className='text-[#151515]  font-normal w-4/5 text-center bg-[#FFF] absolute left-40 bottom-20 px-40 py-16 h-64'>
                <h1 className='text-5xl   font-cinzel mb-2'>Bistro Boss</h1>
                <p className='font-inter text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam ut asperiores alias. Totam adipisci, temporibus officia sapiente atque nesciunt blanditiis enim consequatur quisquam. Nisi tenetur mollitia accusamus quasi? Eaque.</p>
            </div>
        </div>
    );
};

export default ChefService;