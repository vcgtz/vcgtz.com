import HighlightedText from './HighlightedText';
import HighlightedLink from './HighlightedLink';

export default function MainDescription() {
  const textStyles: string = 'text-lg mb-6 font-light text-gray-600';

  return (
    <>
      <p className='text-3xl mb-6 text-gray-600 font-extralight'>
        Hello there!
      </p>
      <p className={textStyles}>
        My name&apos;s Vicente Gutiérrez and I&apos;m passionate about software development.
      </p>
      <p className={textStyles}>
        I&apos;m mainly focused on technologies like <HighlightedText>JavaScript</HighlightedText>, <HighlightedText>TypeScript</HighlightedText>, <HighlightedText>Node.js</HighlightedText>, but not exclusively. I also work (or have worked) with <HighlightedText>PHP (and Laravel)</HighlightedText>, and <HighlightedText>Python</HighlightedText>.
      </p>
      <p className={textStyles}>
        Although I&apos;ve been working most of the time programming on the backend, I&apos;m also interested in the frontend (with React), and in the cloud. Right now, I&apos;m working as a <HighlightedText>Software Engineer at Incfile</HighlightedText> based in Guadalajara, Jal. 🇲🇽
      </p>
      <p className={textStyles}>
        Take a look at my <HighlightedLink href='/projects'>portfolio</HighlightedLink>, and check my most interesting projects (in my opinion).
      </p>
    </>
  );
}
