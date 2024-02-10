import parson from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200  rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={parson} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-2/4 rounded-lg shadow-2xl border-8 border-white absolute top-1/2 left-72 " />
         </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">We are qualified & of experience in this field</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;