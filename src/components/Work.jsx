import React from "react";

const WorkItem = ({ name, duration, description, link = "#!" }) => {
  return (
    <li>
      <div className="flex flex-start items-center">
        <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2" />
        <h4 className="text-gray-800 font-semibold text-xl -mt-2">{name}</h4>
      </div>
      <div className="ml-6 mb-6 pb-6">
        <a
          href={link}
          className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
        >
          {duration}
        </a>
        <p className="text-gray-700 mt-2 mb-4">{description}</p>
        <button
          type="button"
          className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Read more
        </button>
      </div>
    </li>
  );
};
function Work() {
  return (
    <>
      <h1 className="text-3xl mb-2">Work History</h1>
      <ol className="border-l-2 border-blue-600">
        <WorkItem
          name="MUZIMA ORG"
          duration="September 2017 - Current"
          description="Mobile App Developer | mUzima is a mobile extension to the widely deployed OpenMRS electronic record system. Volunteer App Developer Tested applications prior to final review to ensure that all issues were resolved in the most efficient manner"
        />
        <WorkItem
          name="SOLUTECH LIMITED"
          duration="September 2017 - October 2019"
          description=" Mobile App Developer |
              Involved in all aspects of Android app engineering from research and planning through deployment and post-launch support.
              Provided dedicated support and timely issue resolution to clients following successful app launch.
              Trained users in the field on how to use the apps efficiently."
        />
      </ol>
    </>
  );
}

export default Work;
