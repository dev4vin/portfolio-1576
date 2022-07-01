import React from "react";

const SkillTab = ({ title, tools }) => {
  return (
    <div className="relative box-border w-[30%] flex-shrink-0 flex-grow-0 px-4 text-left text-base font-normal leading-normal">
      <div className="relative top-0 mx-0 my-4 box-border overflow-hidden p-8 text-left text-base font-normal leading-normal shadow-xl">
        <div className="box-border text-left text-base font-normal leading-normal">
          <h5 className="text-2xl font-bold">{title}</h5>
          <ol>
            {tools.map((tool) => (
              <li className="flex gap-2" key={tool}>
                <span>.</span>
                {tool}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
function Skills() {
  return (
    <div className="container mx-auto">
      <div className="-mx-4 box-border flex flex-wrap text-left text-base font-normal leading-normal">
        <div className="max-w-[50%]">
          <div className="flex flex-col border-l-2 border-blue-600 pb-11 pl-4">
            <h2 className="text-4xl font-bold text-gray-800">What I Do</h2>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites
            </p>
          </div>
        </div>
      </div>
      <div className="-mx-4 box-border flex flex-wrap text-left text-base font-normal leading-normal">
        {/* feaure box */}
        <SkillTab
          title="Android Development"
          tools={["Flutter Framework", "Native Toolset"]}
        />
        <SkillTab
          title="Web development"
          tools={["NextJs", "Express Framework", "Laravel", "React"]}
        />
        <SkillTab
          title="Cloud Computing"
          tools={["Digital Ocean", "Google Cloud", "CPanel", "Firebase"]}
        />
        <SkillTab title="Database" tools={["Mysql", "FireStore"]} />
        <SkillTab
          title="Design and Layouts"
          tools={["Figma", "Mui Material", "TailwindCss", "Storybook"]}
        />
      </div>
    </div>
  );
}

export default Skills;
