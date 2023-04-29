import HighlightedLink from '@/components/HighlightedLink';
import Project from '@/components/Project';
import ProjectTitle from '@/components/ProjectTitle';
import ProjectDescription from '@/components/ProjectDescription';
import ProjectList from '@/components/ProjectList';

export default function Projects() {
  return (
    <> 
      <main>
        <div className="px-6 py-6 md:py-16">
          <h1 className='text-3xl mb-6 text-gray-600 font-semibold'>My Projects</h1>
          <ProjectList title='NPM Packages'>
            <Project>
              <ProjectTitle
                title='ghost-gcp-storage-adapter'
                href='https://www.npmjs.com/package/ghost-gcp-storage-adapter' />
              <ProjectDescription>Adapter to store any image uploaded to <HighlightedLink href='https://ghost.org/'>Ghost</HighlightedLink> into a Google Cloud Platform bucket.</ProjectDescription>
            </Project>

            <Project>
              <ProjectTitle
                title='generator-module-npm'
                href='https://www.npmjs.com/package/generator-module-npm' />
              <ProjectDescription>Generator to scaffold a project via <HighlightedLink href='https://yeoman.io/'>Yeoman</HighlightedLink> to start to create an NPM package.</ProjectDescription>
            </Project>
          </ProjectList>

          <ProjectList title='Some open-source collaborations'>
            <Project>
              <ProjectTitle
                title='aicommits'
                href='https://github.com/Nutlope/aicommits' />
              <ProjectDescription>I had a contribution to this project, which although was small, it was my first collaboration on an open-source project.</ProjectDescription>
              <ProjectDescription>My contribution: <HighlightedLink href='https://github.com/Nutlope/aicommits/pull/96'>#96</HighlightedLink>.</ProjectDescription>
            </Project>
          </ProjectList>
        </div>
      </main>
    </>
  );
}
