import { Popover } from '@headlessui/react';
import {
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function CloseMenuButton() {
  return (
    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </Popover.Button>
  );
}
