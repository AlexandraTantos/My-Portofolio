import ProjectsCard from "./ProjectsCard";
import { mobileApps, games, projects } from "../data";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <div>
      <section className="py-20 align-element" id="projects">
        <SectionTitle text="web creations" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </section>
      {
        <section className="py-20 align-element" id="mobileApps">
          <SectionTitle text="Mobile Applications" />
          <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mobileApps.map((app) => {
              return <ProjectsCard key={app.id} {...app} />;
            })}
          </div>
        </section>
      }
      <section className="py-20 align-element" id="games">
        <SectionTitle text="Games" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game) => {
            return <ProjectsCard key={game.id} {...game} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
