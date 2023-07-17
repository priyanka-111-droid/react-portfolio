import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './context/AlertContext';
import Headers from './components/Headers';
import AboutUsSection from './components/AboutUsSection';
import WhyUsSection from './components/WhyUsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import Alert from './components/Alert';
import ServicesSection from './components/ServicesSection';
import OurTeam from './components/OurTeam';
import ProjectsSection from './components/ProjectsSection';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
          <Routes>
            <Route path="/" element={<Headers />}>
              <Route index element={<AboutUsSection />} />
              <Route path="whyUs" element={<WhyUsSection />} />
              <Route path="ourTeam" element={<OurTeam />} />
              <Route path="services" element={<ServicesSection />} />
              <Route path="projects" element={<ProjectsSection />} />
              <Route path="contactMe" element={<ContactMeSection />} />
            </Route>
          </Routes>
          <Footer />
          <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
