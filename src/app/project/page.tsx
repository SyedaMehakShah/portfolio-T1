import Link from "next/link";

function Project() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Projects</h1>

      <div className="mt-6 space-y-8">
        {/* Project 1 */}
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">E-commerce Website</h2>
          <p className="mt-2 text-gray-600">
            A modern e-commerce site built with Next.js, TypeScript, and Tailwind CSS. It includes a fully responsive design .
          </p>
          
          {/* Links for Live Project and GitHub */}
          <div className="mt-4 flex space-x-4">
            <Link href="https://nike-website-drab.vercel.app/" target="_blank">
              <span className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Visit Live Project
              </span>
            </Link>

            <Link href="https://github.com/SyedaMehakShah/nike-website.git" target="_blank">
              <span className="text-blue-600 hover:underline">
                View Code on GitHub
              </span>
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Portfolio Website</h2>
          <p className="mt-2 text-gray-600">
            A Resume builder website you add your detail here and make your CV.
          </p>
          
          {/* Links for Live Project and GitHub */}
          <div className="mt-4 flex space-x-4">
            <Link href="https://resume-builder-by-mehak.vercel.app/" target="_blank">
              <span className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Visit Live Project
              </span>
            </Link>

            <Link href="https://github.com/SyedaMehakShah/resume-builder-by--mehak.git" target="_blank">
              <span className="text-blue-600 hover:underline">
                View Code on GitHub
              </span>
            </Link>
          </div>
        </div>

        {/* Add projects  */}
      </div>
    </div>
  );
}

export default Project;
