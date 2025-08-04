export default function Education() {
  return (
    <div className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700/50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-cyan-300">
                Masters in Information Technology
              </h4>
              <p className="text-purple-400 font-medium mb-2">
                Software Development
              </p>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                University of Technology Sydney (UTS)
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                July 2023 - June 2025
              </p>
            </div>
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-cyan-300">
                Bachelors in Computer Engineering
              </h4>
              <p className="text-gray-300 mb-2 text-sm md:text-base">
                Kantipur Engineering College
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                January 2014 - January 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
