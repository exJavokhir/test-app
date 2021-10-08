import './navbar.scss'
import './response.scss'

const Navbar = ({setActive, active})=>{
    return (
        <div className="navbar">
            <div className="navbar-inner container">
                <div className="navbar-inner__left">
                    <div className="logo">
                        <h1>My business</h1>
                    </div>

                    <div className="navbar-links">
                        <ul className="navbar-links__ul">
                            <li className="navbar-links__ul--li"><a href="#home">Home</a></li>
                            <li className="navbar-links__ul--li"><a href="#intro">Intro</a></li>
                            <li className="navbar-links__ul--li"><a href="#exper">Expertises</a></li>
                            <li className="navbar-links__ul--li"><a href="#work">Work</a></li>
                            <li className="navbar-links__ul--li"><a href="#plans">Plans</a></li>
                            <li className="navbar-links__ul--li"><a href="#news">News</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-inner__right">
                    <div className="navbar-auth">
                        <ul className="navbar-auth__ul">
                            <li className="navbar-auth__ul--li"><a href="#sign_in">Sign in</a></li>
                            <li className="navbar-auth__ul--li"><a href="#sign_up">Sign up</a></li>
                        </ul>
                    </div>

                    <div className="hamburger-btn">
                        <div className="humb-btn"
                            onClick={()=>setActive(!active)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className={`humb-links ${active ? 'active' : ''}`}>
                            <ul className="navbar-links__ul">
                                <li className="navbar-links__ul--li"><a href="#c">Home</a></li>
                                <li className="navbar-links__ul--li"><a href="#link">Intro</a></li>
                                <li className="navbar-links__ul--li"><a href="#link">Expertises</a></li>
                                <li className="navbar-links__ul--li"><a href="#link">Work</a></li>
                                <li className="navbar-links__ul--li"><a href="#plans">Plans</a></li>
                                <li className="navbar-links__ul--li"><a href="#news">News</a></li>
                            </ul>

                            <ul className="navbar-auth__ul">
                                <li className="navbar-auth__ul--li"><a href="#sign_in">Sign in</a></li>
                                <li className="navbar-auth__ul--li"><a href="#sign_up">Sign up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar