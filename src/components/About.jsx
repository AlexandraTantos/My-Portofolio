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
            Welcome to my digital domain! I am a passionate and versatile web
            developer dedicated to crafting immersive online experiences. With a
            keen eye for detail and a love for elegant, functional design, I
            bring ideas to life in the digital realm. My journey in web
            development has equipped me with a diverse skill set that spans
            front-end and back-end technologies.{" "}
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Proficient in HTML, CSS, and JavaScript, I specialize in creating
            responsive and dynamic websites that captivate users. Additionally,
            my expertise extends to popular frameworks like React, where I excel
            in building interactive and engaging user interfaces. On the server
            side, I am well-versed in utilizing Node.js and Express to create
            robust and scalable back-end solutions.{" "}
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            Collaborative by nature, I thrive in team environments where ideas
            flourish, and innovation takes center stage. My goal is to not only
            meet project requirements but to exceed expectations by delivering
            solutions that seamlessly blend creativity and functionality.
            Explore my portfolio to witness the fusion of my technical skills,
            creativity, and passion for web development.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
