import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import ResourcesPage from './pages/ResourcesPage';
import QuizPage from "./pages/QuizPage";
import ActionPage from "./pages/ActionPage";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen">
                <Navigation />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/action" element={<ActionPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;