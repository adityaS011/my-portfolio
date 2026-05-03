import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Certifications from "./components/Certifications";
import RoamingAccent from "./components/RoamingAccent";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#080a12]'>
        <div className='bg-[#050816] bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works id="Projects" />
        <Certifications />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <RoamingAccent />
      </div>
    </BrowserRouter>
  );
}

export default App;
