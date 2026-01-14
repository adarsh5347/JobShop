import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingContact } from './components/FloatingContact';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HeadhuntingPage } from './pages/HeadhuntingPage';
import { EmployersPage } from './pages/EmployersPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { UploadResumePage } from './pages/UploadResumePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/headhunting" element={<HeadhuntingPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/upload-resume" element={<UploadResumePage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingContact />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;