import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProject } from "../actions/projectAction";
import Loader from "./layouts/Loader";
import { Link } from "react-router-dom";
import "./Home.css"; // Reuse project card styles

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
                    <h1 className="hero-title">Our Projects</h1>
                    <p className="text-white">Showcasing Excellence in Construction</p>
                </div>
            </div>

            <section className="section-padding container">
                <div className="projects-grid">
                    {projects && projects.map((project) => (
                        <div className="project-card" key={project._id}>
                            <img src={project.image} alt={project.name} />
                            <div className="project-overlay">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="text-white text-sm mb-4">{project.description || "Construction Project"}</p>
                                <span className="text-xs uppercase tracking-wider text-secondary font-bold">Completed</span>
                            </div>
                        </div>
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
