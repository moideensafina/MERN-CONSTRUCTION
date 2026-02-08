import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <Fragment>
            {/* Hero */}
            <div className="hero-section" style={{ height: "50vh", backgroundImage: "url('/images/about-us.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">About Turbo Construction</h1>
                    <p className="text-white">Building Excellence Since 2010</p>
                </div>
            </div>

            {/* Introduction */}
            <section className="section-padding container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="section-subtitle">Our Story</span>
                        <h2>A Legacy of Quality</h2>
                        <p className="text-lg text-secondary mb-6">
                            Turbo Construction is a leading construction firm in Tamil Nadu, dedicated to transforming visions into reality. With over 15 years of experience, we have successfully delivered countless residential and commercial projects.
                        </p>
                        <p className="mb-6">
                            Our team comprises seasoned architects, engineers, and project managers who work collaboratively to ensure every project meets the highest standards of quality, safety, and durability. We believe in transparency, integrity, and client satisfaction above all else.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-secondary" size={20} />
                                <span>ISO 9001 Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-secondary" size={20} />
                                <span>On-Time Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-secondary" size={20} />
                                <span>Cost-Effective</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-secondary" size={20} />
                                <span>Expert Team</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/images/customer-love-1.jpg" alt="Team at work" className="rounded-xl shadow-xl w-full h-auto" />
                        <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-lg hidden md:block">
                            <h3 className="text-secondary text-4xl font-bold mb-1">15+</h3>
                            <p className="text-white text-sm uppercase tracking-wider">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-surface-dim">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">What Drives Us</span>
                        <h2>Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary">
                            <ShieldCheck className="text-secondary mb-4" size={40} />
                            <h3>Integrity</h3>
                            <p>We conduct our business with the highest level of honesty and improved ethics.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
                            <Users className="text-primary mb-4" size={40} />
                            <h3>Collaboration</h3>
                            <p>We believe in teamwork and open communication with our clients and partners.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary">
                            <Award className="text-secondary mb-4" size={40} />
                            <h3>Excellence</h3>
                            <p>We strive for perfection in every detail, delivering superior quality consistently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2 className="cta-title">Ready to Start Your Project?</h2>
                    <p className="cta-text">Contact us today to discuss your requirements and get a free quote.</p>
                    <Link to="/contact" className="cta-btn inline-block">Contact Us Now</Link>
                </div>
            </section>
        </Fragment>
    );
}
