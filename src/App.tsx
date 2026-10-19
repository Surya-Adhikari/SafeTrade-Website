import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import OfflineFirst from './components/OfflineFirst';
import Benefits from './components/Benefits';
import Dashboard from './components/Dashboard';
import CaseStudy from './components/CaseStudy';
import Mentors from './components/Mentors';
import Team from './components/Team';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#F3F5F7] text-[#172B4D] antialiased">
      <Navbar />
      <main className="w-full bg-[#F3F5F7]">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Technology />
        <OfflineFirst />
        <Benefits />
        <Dashboard />
        <CaseStudy />
        <Mentors />
        <Team />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;
