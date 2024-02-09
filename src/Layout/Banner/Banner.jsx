import img1 from '../../assets/images/banner/3.jpg'
import img2 from '../../assets/images/banner/2.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img2} className="w-full " />
          <div className="w-1/2 absolute flex justify-center left-5 top-1/3">
            <div className='w-full space-y-4' > 
                <h2 className='text-4xl text-white font-bold '>Affordable Price For Car Servicing</h2>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='space-x-5'>
                <button className='btn btn-warning text-white'>Discover More</button>
                <button className=' btn btn-outline text-white'>Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end  left-5 bottom-5 right-5 ">
            <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-center  left-5 top-1/3 ">
            <div className='w-1/2 space-y-4' > 
                <h2 className='text-4xl text-white font-bold '>Affordable Price For Car Servicing</h2>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='space-x-5'>
                <button className='btn btn-warning text-white'>Discover More</button>
                <button className=' btn btn-outline text-white'>Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end  left-5 bottom-5 right-5 ">
            <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Banner;