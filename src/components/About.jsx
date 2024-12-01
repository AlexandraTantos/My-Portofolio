import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Welcome to my digital domain! I&apos;m a web developer who’s
            passionate about crafting engaging and memorable online experiences.
            I love bringing ideas to life through clean, functional design and
            attention to detail.{" "}
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            My journey in web development has given me a well-rounded skill set,
            covering both front-end and back-end technologies. I thrive on
            building responsive and dynamic websites using HTML, CSS, and
            JavaScript. React is my go-to framework for creating interactive and
            user-friendly interfaces, while on the back end, I rely on Node.js
            and Express to develop scalable, efficient solutions.{" "}
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Collaboration is at the heart of how I work. I enjoy being part of a
            team where creativity flows, and innovation takes the lead. My aim
            is always to go beyond simply meeting project goals—I want to create
            solutions that are as creative as they are functional. Explore my
            portfolio to see my technical skills, creativity, and passion for
            web development.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
