import React from "react";

const Project = ({ link, title, image, description }) => {
  return (
    <div className="flex min-w-full my-4">
      <a
        href={link}
        className="flex flex-col md:flex-row rounded-lg shadow-lg  p-4"
      >
        <img className=" w-96 h-96 object-contain p-6" src={image} alt />
        <div className="p-4 flex flex-col justify-start">
          <h5 className="text-gray-900 text-3xl">{title}</h5>
          <p className="text-gray-700 text-xl mb-4">{description}</p>
        </div>
      </a>
    </div>
  );
};
function Intro() {
  return (
    <>
      <h3 className="p-4 text-4xl">Projects Done</h3>
      <div className="flex flex-wrap">
        <Project
          link="https://www.swiftride.co.ke/"
          title="SwiftRide"
          image="/images/swiftride_microsoft-surfacebook-front.png"
          description="Pick your destination, book a ride, meet your driver, enjoy the journey."
        />
        <Project
          link="#"
          title="Personal Wallet"
          image="/images/budget_oneplus-front.png"
          description="Pick your destination, book a ride, meet your driver, enjoy the journey."
        />
        <Project
          link="https://github.com/android-promise"
          title="Android Libraries"
          image="/images/promise_microcrosoft-surfacebook-front.png"
          description="Pick your destination, book a ride, meet your driver, enjoy the journey."
        />
      </div>
    </>
  );
}

export default Intro;
