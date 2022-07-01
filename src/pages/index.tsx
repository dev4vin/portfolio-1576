import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Portfolio-1576"
          description="Software Engineer specializing in micro services and mobile applications"
        />
      }
    >
      <Intro />
      <Skills />
      <Work />
      {/* <Education />    */}
    </Main>
  );
};

export default Index;
