import MenuItem from '@/components/MenuItem';

type MenuListItem = {
  name: string;
  link: string;
};

const menuList: MenuListItem[] = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'Projectos',
    link: '#',
  },
  {
    name: 'Blog',
    link: '#',
  },
];

export default function Menu() {
  return (
    <>
      {
        menuList.map((item) => (
          <MenuItem
            key={ item.name }
            name={ item.name }
            link={ item.link }
          />
        ))
      }
    </>
  );
}
