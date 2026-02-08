import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Hammer, PenTool, HardHat, Zap, Truck, Ruler, Home as HomeIcon } from "lucide-react";
import { loadPackage } from "../actions/projectAction";
import "./Home.css"; // Reusing card styles

const services = [
    {
        title: "Construction",
        desc: "From residential homes to commercial complexes, we deliver high-quality construction with precision engineering.",
        icon: <Hammer size={40} />
    },
    {
        title: "Architecture & Planning",
        desc: "Our architects design functional and aesthetic spaces that meet your vision and regulatory standards.",
        icon: <PenTool size={40} />
    },
    {
        title: "Renovation",
        desc: "Upgrade your existing space with modern designs, structural improvements, and better utility.",
        icon: <HardHat size={40} />
    },
    {
        title: "Electrical Works",
        desc: "End-to-end electrical solutions including wiring, safety inspections, and smart home installations.",
        icon: <Zap size={40} />
    },
    {
        title: "Interior Design",
        desc: "Transform your interiors with our bespoke design services for kitchens, living rooms, and offices.",
        icon: <HomeIcon size={40} />
    },
    {
        title: "Project Management",
        desc: "Timely execution and cost-effective management of your construction projects from start to finish.",
        icon: <Ruler size={40} />
    }
];

export default function Service() {
    const dispatch = useDispatch();
    const { packages } = useSelector((state) => state.packageState);

    useEffect(() => {
        dispatch(loadPackage);
    }, [dispatch]);

    return (
        <div className="page-wrapper">
            {/* Hero */}
            <div className="hero-section" style={{ height: "50vh", backgroundImage: "url('/images/architecture-planning.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Our Services</h1>
                    <p className="text-white">Comprehensive Design & Build Solutions</p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="section-padding container">
                <div className="section-header">
                    <span className="section-subtitle">What We Do</span>
                    <h2>Expert Construction Services</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon-wrapper" style={{ width: "80px", height: "80px" }}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Packages Section */}
            {packages && (
                <section className="section-padding bg-surface-dim">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">Construction Packages</span>
                            <h2>Transparent Pricing</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Budget Package */}
                            <div className="pricing-card bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
                                <h3 className="text-xl font-bold mb-4 text-primary">Budget</h3>
                                <div className="text-4xl font-black text-secondary mb-2">₹{packages.budget}</div>
                                <p className="text-sm text-gray-500 mb-6">/ sq.ft</p>
                                <ul className="text-left space-y-3 mb-8">
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Standard Materials</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Basic Blueprint</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Site Supervision</li>
                                </ul>
                                <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors">Choose Plan</button>
                            </div>

                            {/* Standard Package */}
                            <div className="pricing-card bg-primary text-white p-8 rounded-xl shadow-xl md:transform md:scale-105 border-2 border-secondary text-center relative">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">Popular</div>
                                <h3 className="text-xl font-bold mb-4">Standard</h3>
                                <div className="text-4xl font-black text-secondary mb-2">₹{packages.standard}</div>
                                <p className="text-sm text-gray-400 mb-6">/ sq.ft</p>
                                <ul className="text-left space-y-3 mb-8">
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Premium Materials</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>3D Architecture</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Interior Consultation</li>
                                </ul>
                                <button className="w-full py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-white transition-colors">Choose Plan</button>
                            </div>

                            {/* Luxury Package */}
                            <div className="pricing-card bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
                                <h3 className="text-xl font-bold mb-4 text-primary">Luxury</h3>
                                <div className="text-4xl font-black text-secondary mb-2">₹{packages.premium}</div>
                                <p className="text-sm text-gray-500 mb-6">/ sq.ft</p>
                                <ul className="text-left space-y-3 mb-8">
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Imported Materials</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Smart Home Setup</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div>Full Interior Design</li>
                                </ul>
                                <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors">Choose Plan</button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
