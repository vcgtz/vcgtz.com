import HighlightedLink from "@/components/HighlightedLink";

export default function Contact() {
  const textStyles: string = 'text-lg mb-6 font-light text-gray-600';

  return (
    <>
      <main>
        <div className="px-6 py-6 md:py-16">
          <h1 className='text-3xl mb-6 text-gray-600 font-semibold'>How to reach me</h1>
          <p className={textStyles}>If you&apos;re interested in getting in touch with me, you can do so through my social media channels or by sending me an email:</p>
          <ul className={`${textStyles} list-inside`}>
            <li className="list-disc"><HighlightedLink href="https://www.linkedin.com/in/vicentegtz/">LinkedIn</HighlightedLink></li>
            <li className="list-disc"><HighlightedLink href="https://github.com/vcgtz">GitHub</HighlightedLink></li>
            <li className="list-disc"><HighlightedLink href="mailto:vcgtz@proton.me">Email</HighlightedLink></li>
          </ul>
        </div>
      </main>
    </>
  );
}
