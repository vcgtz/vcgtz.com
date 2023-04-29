type ProjectTitleProps = {
  title: string;
  href: string;
};

export default function ProjectTitle({ title, href }: ProjectTitleProps) {
  return (
    <h3 className="text-lg mb-0 text-gray-600 font-semibold">
      <a className="hover:text-gray-900" href={ href }>
        { title } <span className="text-sm">🔗</span>
      </a>
    </h3>
  );
}
