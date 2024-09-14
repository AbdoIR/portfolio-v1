import ContentHeader from "../ContentHeader";

export default function About() {
  return (
    <div className="about-section" id="about">
      <ContentHeader number={1} title="About Me" />
      <div className="about-content">
        Hello! I'm Chakir Abderrahmane, a passionate self-taught Full-Stack Developer based in Morocco. My
        journey into programming began in 2020, when I created my first project—a simple to-do app using HTML
        and CSS. What started as a hobby quickly turned into a deep fascination with web development and the
        endless creative possibilities it offers. Over the years, I've honed my skills and expanded my
        expertise in building visually appealing, user-centric websites. I love transforming ideas into
        functional, interactive applications that live on the internet. Whether it's crafting sleek frontends
        or developing powerful backend systems, I'm committed to delivering high-quality work that solves
        real-world problems. I'm constantly exploring new technologies and am eager to take on new challenges
        to further enhance my skills.
      </div>
    </div>
  );
}
