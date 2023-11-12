import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({heading, bgImg , paragraph}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImg}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero bg-fixed min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className={`bg-[#15151599]  py-36 px-56`}>
            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
            <p className="mb-5">{paragraph}</p>
          </div>
        </div>
      </div>
    </Parallax>
        
    );
};

export default Cover;
Cover.propTypes = {
    heading: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
}