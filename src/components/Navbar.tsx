import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className='name'>Petros</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <a href="https://www.github.com/petros.ktz" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/petros-kotzanastassis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
    );
}