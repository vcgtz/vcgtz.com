export default function Projects() {
  return (
    <> 
      <main>
        <div className="px-6 py-6 md:py-16">
          <h1 className='text-3xl mb-6 text-gray-600 font-semibold'>My Projects</h1>

          <div className="mb-6">
            <h2 className="text-xl text-gray-600 font-semibold">NPM Packages</h2>
            <hr className="mb-4" />
            <div className="mb-4">
              <h3 className="text-lg mb-2 text-gray-600 font-semibold">
                <a className="hover:text-gray-900" href="https://www.npmjs.com/package/ghost-gcp-storage-adapter">
                  ghost-gcp-storage-adapter <span className="text-sm">🔗</span>
                </a>
              </h3>
              <p className="text-lg font-light text-gray-600">Adapter to store any image uploaded to <a href="https://ghost.org/">Ghost</a> into a Google Cloud Platform bucket.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg mb-2 text-gray-600 font-semibold">
                <a className="hover:text-gray-900" href="https://www.npmjs.com/package/generator-module-npm">
                generator-module-npm <span className="text-sm">🔗</span>
                </a>
              </h3>
              <p className="text-lg font-light text-gray-600">Generator to scaffold a project via <a href="https://yeoman.io/">Yeoman</a> to start to create an NPM package.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-gray-600 font-semibold">Some open-source collaborations</h2>
            <hr className="mb-4" />
            <div className="mb-4">
              <h3 className="text-lg mb-2 text-gray-600 font-semibold">
                <a className="hover:text-gray-900" href="https://github.com/Nutlope/aicommits">
                  aicommits <span className="text-sm">🔗</span>
                </a>
              </h3>
              <p className="text-lg font-light text-gray-600">I had a contribution to this project, which although was small, it was my first collaboration on an open-source project.</p>
              <p className="text-lg font-light text-gray-600">My contribution: <a className="hover:text-gray-900" href="https://github.com/Nutlope/aicommits/pull/96">#96</a>.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
