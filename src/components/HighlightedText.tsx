type HighlightedTextProps = {
  children: React.ReactNode;
};

export default function HighlightedText({ children }: HighlightedTextProps) {
  return (
    <span className='font-medium'>
      { children }
    </span>
  );
}
