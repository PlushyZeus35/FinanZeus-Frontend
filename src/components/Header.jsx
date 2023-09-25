import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/react.svg';
export const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                    <img src={logo} alt='application logo'/>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-body-emphasis">Inmuebles</a></li>
                </ul>
            </div>
        </div>
  </header>
  )
}
