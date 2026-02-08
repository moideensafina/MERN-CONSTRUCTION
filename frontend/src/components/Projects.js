import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProject } from "../actions/projectAction";
import Loader from "./layouts/Loader";
import { Link } from "react-router-dom";
import "./Home.css"; // Reuse project card styles

import { motion } from "framer-motion";

export default function Projects() {
    const dispatch = useDispatch();
    const { projects, loading } = useSelector((state) => state.projectState);

    useEffect(() => {
        dispatch(getProject);
    }, [dispatch]);

    if (loading) return <Loader />;

    return (
        <div className="page-wrapper">
            <div className="hero-section" style={{ height: "40vh", backgroundImage: "url('/images/our-vision.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hero-title"
                    >
                        Our Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white"
                    >
                        Showcasing Excellence in Construction
                    </motion.p>
                </div>
            </div>

            <section className="section-padding container">
                <div className="projects-grid">
                    {projects && projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={project._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={project.image} alt={project.name} />
                            <div className="project-overlay">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="text-white text-sm mb-4">{project.description || "Construction Project"}</p>
                                <span className="text-xs uppercase tracking-wider text-secondary font-bold">Completed</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {(!projects || projects.length === 0) && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No projects to display at the moment.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
