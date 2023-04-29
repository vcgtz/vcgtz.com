type ProjectStackProps = {
  technologies: string[];
};

export default function ProjectStack({ technologies }: ProjectStackProps) {
  return (
    <div className="text-sm font-light text-gray-400">
      {
        technologies.map((el, index) => (
          index === technologies.length - 1 ?
            <span key={ el }>{ el }</span> :
            <span key={ el }>{ el } • </span>
        ))
      }
    </div>
  );
}
