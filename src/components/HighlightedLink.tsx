import Link from 'next/link';

type HighlightedLink = {
  children: React.ReactNode;
  href: string;
};

export default function HighlightedLink({ children, href }: HighlightedLink) {
  return (
    <Link className='font-medium underline hover:text-cyan-500' href={ href }>
      { children }
    </Link>
  );
}
