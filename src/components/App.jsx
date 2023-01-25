import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import OurTeam from "./OurTeam";
import Services from "./Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/'>
          <Header />
          <Hero />
        </Route>
        <Route path='/'>
          <About />
        </Route>
        <Route path='/'>
          <Services />
        </Route>
        <Route path='/'>
          <OurTeam />
        </Route>
        <Route path='/'>
          <FAQ />
        </Route>
        <Route path='/'>
          <Form />
        </Route>
        <Route path='/'>
          <ContactUs />
        </Route>
        <Route path='/'>
          <Footer />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
