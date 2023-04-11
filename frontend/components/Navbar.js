import Link from 'next/link';
const Navbar = () => {
    // to change the look of the button of current tab
    if (typeof window === 'object') {
        const tabs = Array.from(document.getElementsByClassName('nav-link'));
        console.log(tabs);
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {
                let active_tab = document.getElementsByClassName('active-link')[0];
                active_tab.classList.remove('active-link');
                e.target.classList.add('active-link');
            });
        }
        )
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary my-2">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Infodrive</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active-link" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;