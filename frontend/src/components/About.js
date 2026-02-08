import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Fragment>
            {/* Hero */}
            <div className="hero-section" style={{ height: "50vh", backgroundImage: "url('/images/about-us.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-title"
                    >
                        About Turbo Construction
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white"
                    >
                        Building Excellence Since 2010
                    </motion.p>
                </div>
            </div>

            {/* Introduction */}
            <section className="section-padding container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-subtitle">Our Story</span>
                        <h2>A Legacy of Quality</h2>
                        <p className="text-lg text-secondary mb-6">
                            Turbo Construction is a leading construction firm in Tamil Nadu, dedicated to transforming visions into reality. With over 15 years of experience, we have successfully delivered countless residential and commercial projects.
                        </p>
                        <p className="mb-6">
                            Our team comprises seasoned architects, engineers, and project managers who work collaboratively to ensure every project meets the highest standards of quality, safety, and durability. We believe in transparency, integrity, and client satisfaction above all else.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "ISO 9001 Certified",
                                "On-Time Delivery",
                                "Cost-Effective",
                                "Expert Team"
                            ].map((item, index) => (
                                <div className="flex items-center gap-2" key={index}>
                                    <CheckCircle className="text-secondary" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img src="/images/customer-love-1.jpg" alt="Team at work" className="rounded-xl shadow-xl w-full h-auto" />
                        <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-lg hidden md:block">
                            <h3 className="text-secondary text-4xl font-bold mb-1">15+</h3>
                            <p className="text-white text-sm uppercase tracking-wider">Years Experience</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-surface-dim">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-subtitle">What Drives Us</span>
                        <h2>Our Core Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <ShieldCheck size={40} />, title: "Integrity", desc: "We conduct our business with the highest level of honesty and improved ethics.", color: "secondary" },
                            { icon: <Users size={40} />, title: "Collaboration", desc: "We believe in teamwork and open communication with our clients and partners.", color: "primary" },
                            { icon: <Award size={40} />, title: "Excellence", desc: "We strive for perfection in every detail, delivering superior quality consistently.", color: "secondary" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white p-8 rounded-xl shadow-md border-t-4 border-${item.color}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className={`text-${item.color} mb-4`}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <motion.div
                    className="container cta-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">Ready to Start Your Project?</h2>
                    <p className="cta-text">Contact us today to discuss your requirements and get a free quote.</p>
                    <Link to="/contact" className="cta-btn inline-block">Contact Us Now</Link>
                </motion.div>
            </section>
        </Fragment>
    );
}
