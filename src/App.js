import { Contact } from "./Component/Form/Contact";
import Landing from "./Component/Landing";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";

import "./animation.css";
import { ContactProvider } from "./context/ContactContext";

function App() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Projects />
      <ContactProvider>
        <Contact />
      </ContactProvider>
    </main>
  );
}

export default App;
