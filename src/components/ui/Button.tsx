// src/components/Button.tsx
interface Props {
  type: "green" | "dark";
  label: string;
  icon: any;
  
}

export default function Button({ type, label, icon=''}: Props) {
  const base =
    "px-4 py-2 rounded text-sm font-semibold flex items-center gap-2";
  const styles = {
    green: `${base} bg-[#54b689] text-white hover:bg-green-800`,
    dark: `${base} bg-gray-800 text-white hover:bg-gray-900`,
  };
  return <button className={styles[type]}>
    {icon}
    {label}</button>;
}
