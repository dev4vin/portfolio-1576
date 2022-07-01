import React from "react";

const HeroItem = (props) => {
  const { image, title, url } = props;
  return (
    <div className="carousel-item active relative float-left w-full">
      <img src={image} className="w-full xl:min-w-0 object-cover h-[500px]" />
      <div
        className="absolute inset-0 carousel-caption hidden md:block text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="md:space-x-2 flex flex-col w-full h-full align-center justify-center">
          <a
            type="button"
            className="mb-2 rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 md:mb-0"
            href={url}
            target="_blank"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
function Hero() {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={1}
          aria-label="Slide 1"
        />
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={2}
          aria-label="Slide 1"
        />
      </div>
      {/* Inner */}
      <div className="carousel-inner relative w-full overflow-hidden">
        <HeroItem
          url="https://www.swiftride.co.ke/"
          title="Learn more about SwiftRide"
          image="/images/swiftride_microsoft-surfacebook-front.png"
        />
        <HeroItem
          url="https://www.swiftride.co.ke/"
          title="Learn more about SwiftRide"
          image="/images/swiftride_microsoft-surfacebook-front.png"
        />
        <HeroItem
          url="https://www.swiftride.co.ke/"
          title="Learn more about SwiftRide"
          image="/images/swiftride_microsoft-surfacebook-front.png"
        />

        {/* <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}
      </div>
      {/* Inner */}
      {/* Controls */}
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;
