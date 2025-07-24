// components/Resume/ResumeSection.tsx
type Props = {
  title: string;
  children: React.ReactNode;
};

const ResumeSection = ({ title, children }: Props) => {
  return (
    <section className="mb-6">
      <h2 className="text-green-700 text-xl font-bold border-b border-green-300 mb-2">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default ResumeSection;
