interface ToggleButtonProps {
  onClick: () => void;
}

export default function ToggleButton({ onClick }: ToggleButtonProps) {
  return (
    <button
      className="p-2 text-blue-50 md:hidden"
      onClick={onClick}
      aria-label="Toggle sidebar"
    >
      Toggle
    </button>
  );
}
