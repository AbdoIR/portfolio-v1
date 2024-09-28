import Skill from "./Skill";

type SkillsDivProps = {
  title: string;
  children: React.ReactNode[];
};

export default function SkillsDiv({ title, children }: SkillsDivProps) {
  return (
    <div className="skills-div">
      <div className="div-title">{title}</div>
      <div className="div-skills">
        {children.map((child, i) => (
          <Skill key={i}>{child}</Skill>
        ))}
      </div>
    </div>
  );
}
