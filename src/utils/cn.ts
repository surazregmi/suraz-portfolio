// This utility function combines class names conditionally, allowing for cleaner and more readable class management in React components.
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
