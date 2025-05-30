// src/components/Button.tsx
interface Props {
  type: "green" | "dark";
  label: string;
}

export default function Button({ type, label }: Props) {
  const base =
    "px-4 py-2 rounded text-sm font-semibold flex items-center gap-2";
  const styles = {
    green: `${base} bg-green-500 text-white hover:bg-green-600`,
    dark: `${base} bg-gray-800 text-white hover:bg-gray-900`,
  };
  return <button className={styles[type]}>{label}</button>;
}
