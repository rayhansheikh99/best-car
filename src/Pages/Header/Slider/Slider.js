import React from 'react';

const Slider = () => {
    return (
        <div data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1500"       id="carouselExampleCrossfade" className="relative carousel slide carousel-fade"
             data-bs-ride="carousel"
>
  <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="relative w-full overflow-hidden carousel-inner">
    <div className="float-left w-full carousel-item active">
      <img
        src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/02/Opener-1.jpg"
        className="block w-full h-72 lg:h-2/4"
        alt="Wild Landscape"
      />
    </div>
    <div className="float-left w-full carousel-item">
      <img
        src="https://i.ytimg.com/vi/pl3WRoPElbc/maxresdefault.jpg"
        className="block w-full h-72 lg:h-2/4"
        alt="Camera"
      />
    </div>
    <div className="float-left w-full carousel-item">
      <img
        src="https://robbreport.com/wp-content/uploads/2021/01/AVTR-opener.jpg?w=1000"
        className="block w-full h-72 lg:h-2/4"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span className="inline-block bg-no-repeat carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span className="inline-block bg-no-repeat carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <h1 className='absolute font-serif font-bold text-center text-white inset-y-3/4 inset-x-16 md:text-3xl lg:text-6xl lg:inset-x-96 lg:inset-y-3/4 md:inset-y-2/4'>Explore our all car <br/>What you want</h1>
</div>
    );
};

export default Slider;