type ProjectDescriptionProps = {
  children: React.ReactNode;
};

export default function ProjectTitle({ children }: ProjectDescriptionProps) {
  return (
    <p className="text-lg font-light text-gray-600">
      { children }
    </p>
  );
}
