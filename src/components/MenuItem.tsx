import Link from 'next/link';

type MenuItemProps = {
  name: string;
  link: string;
  isCurrentPath: boolean;
}

export default function MenuItem({ name, link, isCurrentPath }: MenuItemProps) {
  const isCurrentPathStyles = isCurrentPath ? 'border-b-2 border-cyan-500' : '';

  return (
    <Link
      href={ link }
      className={`text-base font-medium text-gray-500 hover:text-gray-900 ${isCurrentPathStyles}`}>
      { name }
    </Link>
  );
}
