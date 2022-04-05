import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMePage from './components/contactMe/contactMePage';
import Footer from './components/footer/footer';
import HomeScreen from './components/homeScreen/homeScreen';
import NavBar from './components/navBar/navBar';
import ProjectsPage from './components/projectsPage/projectsPage';

import './index.css'

function App() {

  return (
    <Router>
      <section className='activePage'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactMePage />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
}

export default App;