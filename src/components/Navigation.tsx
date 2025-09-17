import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Lifeline For All</span>
                    </Link>

                    {/* Desktop Navigation */}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop Spacer */}
                    <div className="hidden md:block w-24"></div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md">
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    location.pathname === '/'
                                        ? 'text-red-600 bg-red-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/quiz"
                                onClick={closeMenu}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    location.pathname === '/quiz'
                                        ? 'text-red-600 bg-red-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                Quiz
                            </Link>
                            <Link
                                to="/resources"
                                onClick={closeMenu}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    location.pathname === '/resources'
                                        ? 'text-red-600 bg-red-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                Resources
                            </Link>
                            <Link
                                to="/action"
                                onClick={closeMenu}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    location.pathname === '/action'
                                        ? 'text-red-600 bg-red-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                Take Action
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;