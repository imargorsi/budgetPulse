import "./App.css";

import ThemeProvider from "./hooks/ThemeProvider";

import ThemeSelect from "./ThemeToggle";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-primary dark:bg-primary-dark">
          <nav className="p-4">
            <ThemeSelect />
          </nav>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
