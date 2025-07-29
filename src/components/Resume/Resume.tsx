// components/Resume/Resume.tsx
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg print:shadow-none print:p-0">
      <ResumeHeader
        name="Suraj Kumar Regmi"
        title="Full Stack Software Engineer"
        contact={{
          email: "link2surajregmi@gmail.com",
          phone: "+61 0423 248 465",
          location: "Sydney, Australia",
          website: "linkedin.com/in/surajregmi",
        }}
      />

      <ResumeSection title="Professional Summary">
        <p className="text-sm text-gray-700">
          Results-driven Software Engineer with 4+ years of experience building
          scalable web applications and backend services using Node.js, React,
          and .NET. Proven ability to design and implement modular, maintainable
          systems across both frontend and backend. Experienced in RESTful APIs,
          PostgreSQL, MongoDB, and CI/CD workflows. Currently exploring Go and
          Next.js for advanced backend capabilities. Passionate about clean
          code, SOLID principles, and delivering impactful software solutions.
        </p>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <ul className="grid grid-cols-2 text-sm text-gray-700 list-disc pl-5 gap-1">
          <li>Node.js, React, Angular, .NET, Go, Next.js</li>
          <li>Web Components, LitElement</li>
          <li>MongoDB, MySQL, Firebase</li>
          <li>Git, Jira, Postman, VS Code, IntelliJ</li>
          <li>Linux, Windows, macOS</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Work Experience">
        <div className="mb-4">
          <h3 className="font-semibold">
            Software Engineer – Ozdocs International (Infotrak Global)
          </h3>
          <p className="text-sm text-gray-600 italic">
            June 2024 – Present | Sydney, NSW
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>
              Developed Oil Commander LIMS for oil condition monitoring and
              fleet maintenance.
            </li>
            <li>
              Built frontend with React including sample forms, dashboards, and
              reports.
            </li>
            <li>
              Created backend APIs using Node.js and Express to manage lab
              workflows.
            </li>
            <li>
              Implemented background services for high-volume report generation.
            </li>
            <li>
              Contributed to Agile practices: sprint planning, daily standups,
              code reviews.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">
            Software Engineer – Leapfrog Technology
          </h3>
          <p className="text-sm text-gray-600 italic">
            Jan 2021 – Jan 2023 | Kathmandu, Nepal
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>
              Built custom frontend using LitElement and Storybook for Nurix
              Therapeutics.
            </li>
            <li>
              Developed backend services in Java using Micronaut + Hibernate
              ORM.
            </li>
            <li>Deployed systems on AWS for Dev/UAT/Prod environments.</li>
            <li>Created VS Code Extension to automate repetitive tasks.</li>
            <li>
              Reviewed PRs and mentored junior developers in KSS sessions.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">
            Angular Developer – Bentray Technologies
          </h3>
          <p className="text-sm text-gray-600 italic">
            June 2019 – Dec 2021 | Lalitpur, Nepal
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>
              Developed HR system using Angular 6+ with dynamic forms and
              validations.
            </li>
            <li>
              Integrated Kendo UI, AGM Maps, and built custom Nepali
              date-picker.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">
            Software Engineering Intern – Asterdio
          </h3>
          <p className="text-sm text-gray-600 italic">
            Jan 2019 – June 2019 | Kathmandu, Nepal
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>Built REST APIs using Node.js/Express.</li>
            <li>
              Learned CI/CD practices and worked with SQL/NoSQL databases.
            </li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <p className="text-sm text-gray-700 mb-2">
          🎓{" "}
          <strong>
            Masters in Information Technology – Software Development
          </strong>
          <br />
          UTS, Australia | Kings Own Institute (2023–2025)
        </p>
        <p className="text-sm text-gray-700">
          🎓 <strong>Bachelor in Computer Engineering</strong>
          <br />
          Kantipur Engineering College, Nepal (2014–2018)
        </p>
      </ResumeSection>

      <ResumeSection title="Client Projects">
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Oil Commander – LIMS for oil monitoring & fleet maintenance.</li>
          <li>
            Delphi – Drug discovery platform for a US biotech firm (Leapfrog).
          </li>
          <li>Online MCQ System – Angular-based SaaS exam portal (Bentray).</li>
          <li>FlexYear HR – Angular-based HR & payroll software (Bentray).</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Trainings">
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Data Structures & Algorithms in Java – Udemy</li>
          <li>Git Workflow & Communication – Leapfrog</li>
          <li>Drug Discovery Domain Training – Leapfrog</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Referees">
        <p className="text-sm text-gray-700">Available upon request.</p>
      </ResumeSection>
    </div>
  );
};

export default Resume;
