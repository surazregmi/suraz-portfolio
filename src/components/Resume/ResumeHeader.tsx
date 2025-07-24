// components/Resume/ResumeHeader.tsx
type Props = {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website?: string;
  };
};

const ResumeHeader = ({ name, title, contact }: Props) => {
  return (
    <header className="border-b-2 border-green-600 pb-4 mb-6">
      <h1 className="text-3xl font-bold text-green-700">{name}</h1>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-700 mt-2">
        📧 {contact.email} | 📞 {contact.phone} | 📍 {contact.location}
        {contact.website && <> | 🌐 {contact.website}</>}
      </p>
    </header>
  );
};

export default ResumeHeader;
