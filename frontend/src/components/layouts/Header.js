import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../../actions/userAction";
import { Menu, X, LogOut, Package, HardHat, Phone, Briefcase, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useSelector(state => state.authState);
    const { packages } = useSelector(state => state.packageState);
    const dispatch = useDispatch();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const logOutHandler = () => {
        dispatch(logOut);
        setIsOpen(false);
    };

    const navLinks = [
        { name: "Home", path: "/", icon: <Home size={18} /> },
        { name: "About Us", path: "/about", icon: <HardHat size={18} />, publicOnly: true },
        { name: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
        { name: "Services", path: "/service", icon: <Package size={18} />, publicOnly: true },
        { name: "Contact", path: "/contact", icon: <Phone size={18} />, publicOnly: true },
    ];

    const adminLinks = [
        { name: "Project List", path: "/admin/projects" },
        { name: "Create Project", path: "/admin/project/create" },
    ];

    return (
        <header className="header-container">
            <div className="container header-content">
                {/* Brand Logo */}
                <Link to="/" className="logo">
                    <img src="/images/logo.png" alt="Turbo Construction" />
                    {/* Fallback text if logo fails to load - often good for SEO too */}
                    <span className="logo-text">Turbo<span>Construction</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        (!link.publicOnly || !isAuthenticated) && (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}

                    {isAuthenticated && (
                        <>
                            {adminLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {packages && packages._id && (
                                <Link to={`/admin/package/${packages._id}`} className="nav-link">
                                    Update Package
                                </Link>
                            )}

                            <button onClick={logOutHandler} className="nav-btn logout-btn flex items-center gap-2">
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        </>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="mobile-menu-overlay"
                    >
                        {navLinks.map((link) => (
                            (!link.publicOnly || !isAuthenticated) && (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="mobile-nav-link"
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}

                        {isAuthenticated && (
                            <>
                                {adminLinks.map(link => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="mobile-nav-link"
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {packages && packages._id && (
                                    <Link
                                        to={`/admin/package/${packages._id}`}
                                        className="mobile-nav-link"
                                        onClick={toggleMenu}
                                    >
                                        Update Package
                                    </Link>
                                )}

                                <button onClick={logOutHandler} className="nav-btn logout-btn" style={{ marginTop: '2rem' }}>
                                    Logout
                                </button>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
