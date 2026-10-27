import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contact from "./Contact.jsx";

const SCHOOL_NAME = "EAV Kivumu TSS";
const CLASS_NAME = "TVET Certificate IV - Software Development";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [clickCount, setClickCount] = useState(0);

  function showView(viewName) {
    setCurrentView(viewName);
  }

  function renderView() {
    if (currentView === "about") {
      return <About schoolName={SCHOOL_NAME} className={CLASS_NAME} />;
    }

    if (currentView === "students") {
      return <Students schoolName={SCHOOL_NAME} />;
    }

    if (currentView === "contact") {
      return <Contact schoolName={SCHOOL_NAME} onGoHome={() => showView("home")} />;
    }

    return (
      <Home
        schoolName={SCHOOL_NAME}
        className={CLASS_NAME}
        onNavigate={showView}
      />
    );
  }

  return (
    <main>
      <header>
        <h1>{SCHOOL_NAME}</h1>
        <p>{CLASS_NAME}</p>
        <nav aria-label="Main navigation">
          <button type="button" onClick={() => showView("home")}>Home</button>{" "}
          <button type="button" onClick={() => showView("about")}>About</button>{" "}
          <button type="button" onClick={() => showView("students")}>Students</button>{" "}
          <button type="button" onClick={() => showView("contact")}>Contact</button>
        </nav>
      </header>

      <hr />

      {renderView()}

      <section aria-labelledby="counter-heading">
        <hr />
        <h2 id="counter-heading">Website Interaction Counter</h2>
        <p>You have clicked this button {clickCount} time(s).</p>
        <button type="button" onClick={() => setClickCount(clickCount + 1)}>
          Click me
        </button>{" "}
        <button type="button" onClick={() => setClickCount(0)}>
          Reset counter
        </button>
      </section>

      <footer>
        <hr />
        <p>Class Website practical assessment | ReactJS</p>
      </footer>
    </main>
  );
}

export default App;
