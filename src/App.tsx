import "./App.css";

import ThemeProvider from "./hooks/ThemeProvider";

import ThemeSelect from "./ThemeToggle";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <nav className="p-4">
            <ThemeSelect />
          </nav>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
