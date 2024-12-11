import { AnimatePresence, motion } from "framer-motion";
import { Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { href: "/", label: "WELCOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/features", label: "FEATURES" },
  { href: "/media", label: "MEDIA" },
  { href: "/contact", label: "CONTACT" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50"
    >
      <nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" bg-primary/10 backdrop-blur-lg shadow-md"
      >
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="flex gap-1 text-2xl font-bold  transition-colors duration-300 text-primary-foreground"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Y <span>ENTERTAINMENT</span>
                </motion.span>
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                >
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`relative pb-1 text-sm font-semibold text-primary-foreground hover:text-primary transition-colors duration-300 group ${
                      currentPath === item.href ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={` absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out `}
                    />
                  </Link>
                </motion.div>
              ))}
              <Link to={"/settings"} className="cursor-pointer">
                <Settings className="h-6 w-6" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md  hover:text-primary-content hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute top-16 inset-x-0  bg-primary-content shadow-lg overflow-hidden"
            >
              <motion.div className="px-4 py-2 space-y-1">
                {menuItems.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Link
                      to={item.href}
                      className="block text-sm px-3 py-2  font-medium  hover:text-primary-content transition-colors  hover:bg-primary rounded-md  duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to={"/settings"}
                  className="block text-sm px-3 py-2  font-medium  hover:text-primary-content transition-colors  hover:bg-primary rounded-md  duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
