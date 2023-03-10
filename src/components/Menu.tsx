import MenuItem from '@/components/MenuItem';
import { NextRouter, useRouter } from 'next/router';

type MenuListItem = {
  name: string;
  link: string;
  enabled: boolean;
};

const menuList: MenuListItem[] = [
  {
    name: 'Home',
    link: '/',
    enabled: true,
  },
  {
    name: 'Projectos',
    link: '#',
    enabled: false,
  },
  {
    name: 'Blog',
    link: 'https://codecraftershub.com/',
    enabled: true,
  },
  {
    name: 'Contacto',
    link: '#',
    enabled: false,
  },
  {
    name: 'Mi Setup',
    link: '#',
    enabled: false,
  },
];

export default function Menu() {
  const router: NextRouter = useRouter();

  return (
    <>
      {
        menuList.filter((item) => item.enabled)
          .map((item) => (
            <MenuItem
              key={ item.name }
              name={ item.name }
              link={ item.link }
              isCurrentPath={ router.pathname === item.link }
            />
          )
        )
      }
    </>
  );
}
