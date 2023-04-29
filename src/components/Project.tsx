type ProjectProps = {
  children: React.ReactNode;
};

export default function Project({ children }: ProjectProps) {
  return (
    <div className="mb-4">
      { children }
    </div>
  );
}
