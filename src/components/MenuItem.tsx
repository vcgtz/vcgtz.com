import Link from 'next/link';

type MenuItemProps = {
  name: string;
  link: string;
}

export default function MenuItem({ name, link }: MenuItemProps) {
  return (
    <Link href={ link } className="text-base font-medium text-gray-500 hover:text-gray-900">
      { name }
    </Link>
  );
}
