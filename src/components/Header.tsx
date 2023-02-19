import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import MainLogo from '@/components/MainLogo';
import Menu from '@/components/Menu';
import OpenMenuButton from '@/components/OpenMenuButton';
import CloseMenuButton from '@/components/CloseMenuButton';

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <MainLogo />
          </Link>
        </div>
        
        <div className="-my-2 -mr-2 md:hidden">
          <OpenMenuButton />
        </div>
        
        <nav className="hidden space-x-10 md:flex">
          <Menu />
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <MainLogo />
                </div>

                <div className="-mr-2">
                  <CloseMenuButton />
                </div>
              </div>
            </div>

            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Menu />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
