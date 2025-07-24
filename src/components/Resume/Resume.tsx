// components/Resume/Resume.tsx
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg print:shadow-none print:p-0">
      <ResumeHeader
        name="Suraj Regmi"
        title="Full Stack Software Engineer"
        contact={{
          email: "link2surajregmi@gmail.com",
          phone: "+61 0423248465",
          location: "Australia",
          website: "surajregmi.dev",
        }}
      />

      <ResumeSection title="Professional Summary">
        <p className="text-sm text-gray-700">
          Passionate full-stack engineer with 4+ years of experience building
          scalable web applications using Angular, React, .NET, and Node.js.
          Strong in frontend architecture, backend services, and cloud
          deployment.
        </p>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="mb-4">
          <h3 className="font-semibold">Software Engineer – ABC Corp</h3>
          <p className="text-sm text-gray-600 italic">
            Jan 2022 – Present | Sydney
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>
              Built and maintained enterprise-grade Angular/.NET applications.
            </li>
            <li>
              Led frontend migration to React for improved performance and
              maintainability.
            </li>
            <li>
              Worked closely with QA and DevOps for CI/CD and testing pipelines.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Software Engineer – ABC Corp</h3>
          <p className="text-sm text-gray-600 italic">
            Jan 2022 – Present | Sydney
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>
              Built and maintained enterprise-grade Angular/.NET applications.
            </li>
            <li>
              Led frontend migration to React for improved performance and
              maintainability.
            </li>
            <li>
              Worked closely with QA and DevOps for CI/CD and testing pipelines.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Software Engineer – ABC Corp</h3>
          <p className="text-sm text-gray-600 italic">
            Jan 2022 – Present | Sydney
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
            <li>
              Built and maintained enterprise-grade Angular/.NET applications.
            </li>
            <li>
              Led frontend migration to React for improved performance and
              maintainability.
            </li>
            <li>
              Worked closely with QA and DevOps for CI/CD and testing pipelines.
            </li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <p className="text-sm text-gray-700">
          🎓 Bachelor of Computer Science – XYZ University (2017–2021)
        </p>
      </ResumeSection>

      <ResumeSection title="Skills">
        <ul className="text-sm text-gray-700 grid grid-cols-2 gap-2">
          <li>✔ Angular / React / Vue</li>
          <li>✔ .NET Core / Node.js</li>
          <li>✔ SQL / MongoDB</li>
          <li>✔ Azure / AWS</li>
          <li>✔ Git / GitHub Actions</li>
          <li>✔ Docker / CI/CD</li>
        </ul>
      </ResumeSection>
    </div>
  );
};

export default Resume;
