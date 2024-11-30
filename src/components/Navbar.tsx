import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, LogIn, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuthStore();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl">
          <div className="flex justify-between h-16 px-6">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Cpu className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-gray-900">Tekrem</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'text-gray-600 hover:bg-primary/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <div className="flex items-center space-x-4">
                  {(user.role === 'ADMIN' || user.role === 'STAFF') && (
                    <Link
                      to="/admin/posts/create"
                      className="px-4 py-2 rounded-full text-gray-600 hover:bg-primary/10 transition-all duration-300"
                    >
                      <User className="h-5 w-5" />
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-full text-gray-600 hover:bg-primary/10 transition-all duration-300 flex items-center"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full text-gray-600 hover:bg-primary/10 transition-all duration-300 flex items-center"
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-full hover:bg-primary/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden px-6 pb-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 rounded-xl text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-primary/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {user ? (
                  <>
                    {(user.role === 'ADMIN' || user.role === 'STAFF') && (
                      <Link
                        to="/admin/posts/create"
                        className="block px-4 py-2 rounded-xl text-base font-medium text-gray-600 hover:bg-primary/10"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 rounded-xl text-base font-medium text-gray-600 hover:bg-primary/10"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-2 rounded-xl text-base font-medium text-gray-600 hover:bg-primary/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;