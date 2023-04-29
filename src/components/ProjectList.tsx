type ProjectListProps = {
  children: React.ReactNode;
  title: string;
};

export default function ProjectList({ children, title }: ProjectListProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl text-gray-600 font-semibold">{ title }</h2>
      <hr className="mb-4" />
      { children }
    </div>
  );
}
