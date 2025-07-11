import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CompanyOverview from './pages/CompanyOverview';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Header />
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/company-overview" element={<CompanyOverview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </ErrorBoundary>
);

export default App;
