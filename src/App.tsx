import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Program from '@/components/Program';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <EventInfo />
        <Program />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
