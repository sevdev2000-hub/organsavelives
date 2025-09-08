import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Life Line For All</span>
                    </Link>
                    <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        <Link
                            to="/"
                            className={`font-medium transition-colors ${
                                location.pathname === '/' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/quiz"
                            className={`font-medium transition-colors ${
                                location.pathname === '/quiz' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Quiz
                        </Link>
                        <Link
                            to="/resources"
                            className={`font-medium transition-colors ${
                                location.pathname === '/resources' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Resources
                        </Link>
                        <Link
                            to="/action"
                            className={`font-medium transition-colors ${
                                location.pathname === '/action' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Take Action
                        </Link>
                    </div>
                    <div className="w-24"></div> {/* Spacer for balance */}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;