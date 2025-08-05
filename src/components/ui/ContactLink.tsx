interface Props {
  href: any;
  Icon: any;
  text: any;
}
export default function ContactLink({ href, Icon, text }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center gap-4 p-4 border border-gray-700 rounded-2xl hover:bg-gray-800 transition transform hover:-translate-y-1 hover:shadow-lg"
    >
      <Icon className="text-xl group-hover:animate-bounce" />
      <span>{text}</span>
    </a>
  );
}
