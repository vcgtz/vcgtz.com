import HighlightedLink from '@/components/HighlightedLink';
import Project from '@/components/Project';
import ProjectTitle from '@/components/ProjectTitle';
import ProjectDescription from '@/components/ProjectDescription';
import ProjectList from '@/components/ProjectList';
import ProjectStack from '@/components/ProjectStack';

export default function Projects() {
  return (
    <> 
      <main>
        <div className="px-6 py-6 md:py-16">
          <h1 className='text-3xl mb-6 text-gray-600 font-semibold'>My Projects</h1>
          <ProjectList title='NPM Packages'>
          <Project>
              <ProjectTitle
                title='config-storage'
                href='https://www.npmjs.com/package/config-storage' />
              <ProjectDescription>Module to help you to store you app&apos;s configuration in the machine where is running, prioritizing the simplicity of use.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'TypeScript']} />
            </Project>

            <Project>
              <ProjectTitle
                title='ghost-gcp-storage-adapter'
                href='https://www.npmjs.com/package/ghost-gcp-storage-adapter' />
              <ProjectDescription>Adapter to store any image uploaded to <HighlightedLink href='https://ghost.org/'>Ghost</HighlightedLink> into a Google Cloud Platform bucket.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'GhostJS']} />
            </Project>

            <Project>
              <ProjectTitle
                title='generator-module-npm'
                href='https://www.npmjs.com/package/generator-module-npm' />
              <ProjectDescription>Generator to scaffold a project via <HighlightedLink href='https://yeoman.io/'>Yeoman</HighlightedLink> to start to create an NPM package.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'TypeScript', 'Yeoman']} />
            </Project>

            <Project>
              <ProjectTitle
                title='calendary'
                href='https://www.npmjs.com/package/calendary' />
              <ProjectDescription>Module to work easily with dates using an object representation of a calendar.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'TypeScript']} />
            </Project>

            <Project>
              <ProjectTitle
                title='More NPM packages'
                href='https://www.npmjs.com/~vcgtz' />
              <ProjectDescription>The previous ones were some of my packages, but in the link above, you will find all the NPM modules that I have developed.</ProjectDescription>
            </Project>
          </ProjectList>

          <ProjectList title='Open-source collaborations'>
            <Project>
              <ProjectTitle
                title='aicommits'
                href='https://github.com/Nutlope/aicommits' />
              <ProjectDescription>I had a contribution to this project, which although was small, it was my first collaboration on an open-source project.</ProjectDescription>
              <ProjectDescription>My contribution: <HighlightedLink href='https://github.com/Nutlope/aicommits/pull/96'>#96</HighlightedLink>.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'TypeScript', 'GPT-3 API']} />
            </Project>
          </ProjectList>

          <ProjectList title='Other projects'>
          <Project>
              <ProjectTitle
                title='vcgtz.com (this website)'
                href='https://github.com/vcgtz/vcgtz.com' />
              <ProjectDescription>My personal website and portfolio.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'TypeScript', 'React', 'Next.JS', 'Vercel']} />
            </Project>

            <Project>
              <ProjectTitle
                title='MyImgPlaceholder API'
                href='https://github.com/vcgtz/myimgplaceholder-api' />
              <ProjectDescription>API to generate placeholder images. It also integrates the Unplash API to get a random picture.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'TypeScript', 'Express', 'Unplash API']} />
            </Project>

            <Project>
              <ProjectTitle
                title='Rick & Morty Character Finder'
                href='https://github.com/vcgtz/rick-and-morty-app' />
              <ProjectDescription>Webapp to list and search Rick & Morty characters.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'React', 'Rick and Morty API', 'TailwindCSS']} />
            </Project>

            <Project>
              <ProjectTitle
                title='CLI Weather App'
                href='https://github.com/vcgtz/weather_app' />
              <ProjectDescription>Simple script to get the weather based on your IP location.</ProjectDescription>
              <ProjectStack technologies={['JavaScript', 'Open Weather API', 'Ipify API', 'IPStack API']} />
            </Project>
          </ProjectList>
        </div>
      </main>
    </>
  );
}
