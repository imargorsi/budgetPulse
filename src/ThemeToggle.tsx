import { useTheme } from "./hooks/ThemeProvider";

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-white dark:bg-gray-600 text-black dark:text-white p-2 rounded border border-gray-300 dark:border-gray-600"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="auto">Auto</option>
    </select>
  );
}
