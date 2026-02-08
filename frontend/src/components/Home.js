import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../actions/projectAction";
import Loader from "./layouts/Loader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, HardHat, Hammer, Zap, PenTool, Phone } from "lucide-react";
import "./Home.css";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const servicesList = [
    {
        title: "Construction",
        desc: "High-quality residential and commercial construction services with premium materials.",
        icon: <Hammer size={32} />
    },
    {
        title: "Architecture",
        desc: "Innovative architectural designs that blend functionality with modern aesthetics.",
        icon: <PenTool size={32} />
    },
    {
        title: "Renovation",
        desc: "Transform your existing space with our expert renovation and remodeling services.",
        icon: <HardHat size={32} />
    },
    {
        title: "Electrical Work",
        desc: "Complete electrical solutions including wiring, installation, and safety checks.",
        icon: <Zap size={32} />
    }
];

const statsList = [
    { number: "15+", label: "Years Experience" },
    { number: "90+", label: "Happy Clients" },
    { number: "110+", label: "Projects Completed" },
    { number: "25+", label: "Awards Won" }
];

export default function Home() {
    const dispatch = useDispatch();
    const { projects, loading } = useSelector((state) => state.projectState);

    useEffect(() => {
        dispatch(getProject);
    }, [dispatch]);

    if (loading) return <Loader />;

    return (
        <Fragment>
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: "url('/images/home.jpg')" }}>
                <div className="hero-overlay"></div>
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1 className="hero-title" variants={fadeInUp}>
                        Building Your Dreams <span>With Precision & Passion</span>
                    </motion.h1>
                    <motion.p className="text-white text-xl mb-8" variants={fadeInUp}>
                        Turbo Construction is Tamil Nadu's premier construction company, delivering excellence for over 15 years.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <Link to="/contact" className="hero-btn">
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="section-padding container">
                <div className="about-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">Who We Are</span>
                        <h2>More Than Just Builders</h2>
                        <p className="text-lg text-secondary mb-6">
                            We are partners in your vision. Turbo Construction specializes in custom home building, commercial development, and comprehensive project management.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} color="var(--color-secondary)" />
                                <span>15+ Years of Industry Leadership</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} color="var(--color-secondary)" />
                                <span>Certified Professional Engineers</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" size={20} color="var(--color-secondary)" />
                                <span>Transparent Pricing & Timelines</span>
                            </li>
                        </ul>
                        <Link to="/about" className="cta-link text-primary font-bold hover:text-secondary transition-colors">
                            Learn More About Us &rarr;
                        </Link>
                    </motion.div>

                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/images/home.jpg" alt="Construction Site" className="rounded-xl shadow-lg" />
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-surface-dim" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Expertise</span>
                        <h2>Comprehensive Services</h2>
                    </div>

                    <motion.div
                        className="services-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {servicesList.map((service, index) => (
                            <motion.div
                                className="service-card"
                                key={index}
                                variants={fadeInUp}
                            >
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container stats-grid">
                    {statsList.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="section-padding container" id="projects">
                <div className="section-header">
                    <span className="section-subtitle">Our Portfolio</span>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects && projects.slice(0, 6).map((project) => (
                        <motion.div
                            className="project-card"
                            key={project._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={project.image} alt={project.name} />
                            <div className="project-overlay">
                                <h3 className="project-title">{project.name}</h3>
                                <Link to="/projects" className="text-white text-sm font-bold uppercase tracking-wider">
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/projects" className="nav-btn bg-primary text-white hover:bg-secondary">
                        View All Projects
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content container">
                    <h2 className="cta-title">Ready to Build Your Dream?</h2>
                    <p className="cta-text">
                        Book a free consultation with our experts today and get a detailed roadmap for your project.
                    </p>
                    <a href="tel:+919944012736" className="cta-btn inline-flex items-center gap-2">
                        <Phone size={20} />
                        Call +91 99440 12736
                    </a>
                </div>
            </section>
        </Fragment>
    );
}

