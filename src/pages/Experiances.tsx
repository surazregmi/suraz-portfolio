export default function Experiances() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Ozdocs International (Infotrak Global)",
      period: "June 2024 - Present",
      location: "Sydney, NSW",
      highlights: [
        "Developed Oil Commander LIMS for laboratory information management",
        "Built optimized React.js frontend interfaces and reporting dashboards",
        "Implemented DRY and SOLID principles for maintainable code",
        "Developed scalable backend services with Node.js and Express",
      ],
    },
    {
      title: "Software Engineer",
      company: "Leapfrog Technology Pvt Ltd",
      period: "January 2021 - January 2023",
      location: "Kathmandu, Nepal",
      highlights: [
        "Delivered software solutions for Nurix Therapeutics using LitElement and Java",
        "Implemented component-based architecture with Storybook",
        "Designed REST APIs using Micronaut Framework",
        "Created VS Code Extension to boost team productivity",
      ],
    },
    {
      title: "Angular Developer",
      company: "Bentray Technologies",
      period: "June 2019 - December 2021",
      location: "Lalitpur, Nepal",
      highlights: [
        "Delivered HR management system with Angular 6+",
        "Integrated Kendo UI components with advanced filtering",
        "Implemented AGM Maps for geo-location features",
        "Developed localized Nepali date-picker component",
      ],
    },
  ];

  return (
    <div className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h3>
          <p className="text-gray-400 text-center mb-8 md:mb-12">
            Journey through innovation and growth
          </p>

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-cyan-300 mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-400 md:text-right mt-2 md:mt-0">
                      <p className="text-green-400 font-medium">{exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed text-sm md:text-base">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
