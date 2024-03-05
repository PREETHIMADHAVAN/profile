import './Navbar.css';
const Navbar = () =>{
    return (
        <nav>
            <a href="#" className='brand'>Preethi</a>
            <ul className='navLinks'>
                <li className='navLink'>About Me</li>
                <li className='navLink'>Project</li>
                <li className='navLink'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;