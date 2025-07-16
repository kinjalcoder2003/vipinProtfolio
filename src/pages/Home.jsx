import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
