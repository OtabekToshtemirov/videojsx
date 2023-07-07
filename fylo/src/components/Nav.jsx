 import logo from '../../public/images/logo.svg'
function Nav() {

    return (
        <div className={'container'}>
            <nav className='nav'>
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt=""/>
                    </a>

                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Nav;