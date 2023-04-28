import Link from 'next/link';

export default function MainDescription() {
  return (
    <>
      <p className='text-3xl mb-6 text-gray-600 font-extralight'>
        Hello there!
      </p>
      <p className='text-lg mb-6 font-light text-gray-600'>
        My name&apos;s Vicente Gutiérrez and I&apos;m passionate about software development.
      </p>
      <p className='text-lg mb-6 font-light text-gray-600'>
        I&apos;m mainly focused on technologies like <span className='font-medium'>JavaScript</span>, <span className='font-medium'>TypeScript</span>, <span className='font-medium'>Node.js</span>, but not exclusively. I also work (or have worked) with <span className='font-medium'>PHP (and Laravel)</span>, and <span className='font-medium'>Python</span>.
      </p>
      <p className='text-lg mb-6 font-light text-gray-600'>
        Although I&apos;ve been working most of the time programming on the backend, I&apos;m also interested in the frontend (with React), and in the cloud. Right now, I&apos;m working as a <span className='font-medium'>Software Engineer at Incfile</span> based in Guadalajara, Jal. 🇲🇽
      </p>
      <p className='text-lg mb-6 font-light text-gray-600'>
        Take a look at my <Link className='font-medium' href='/projects'>portfolio</Link>, and check my most interesting projects (in my opinion).
      </p>
    </>
  );
}
