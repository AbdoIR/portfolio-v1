type ContentHeaderProps = {
  number: number;
  title: string;
};

export default function ContentHeader({ number, title }: ContentHeaderProps) {
  return (
    <div className="ch-container">
      <div className="content-header">
        <span>0{number}. </span>
        {title}
      </div>
      <div className="horizental-line"></div>
    </div>
  );
}
