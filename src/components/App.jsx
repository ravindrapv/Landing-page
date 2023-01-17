import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Login from "./Login";
import OurTeam from "./OurTeam";
import Services from "./Services";
import WhatService from './WhatService'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route>
          <Header />
        </Route>
        <Route>
          <Hero />
        </Route>
        <Route>
          <About />
        </Route>
        <Route>
          <Services />
          <WhatService />
        </Route>
        <Route>
          <OurTeam />
        </Route>
        <Route>
          <FAQ />
        </Route>
        <Route>
          <Form />
        </Route>
        <Route>
          <Footer />
          <Login />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;