import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMePage from './components/contactMe/contactMePage';
import Footer from './components/footer/footer';
import HomeScreen from './components/homeScreen/homeScreen';
import NavBar from './components/navBar/navBar';
import ProjectsPage from './components/projectsPage/projectsPage';
import ResumePage from './components/resume/resumePage';

import './index.css'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="%PUBLIC_URL%/" element={<HomeScreen />} />
        <Route path="%PUBLIC_URL%/projects" element={<ProjectsPage />} />
        <Route path="%PUBLIC_URL%/contact" element={<ContactMePage />} />
        <Route path="%PUBLIC_URL%/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;