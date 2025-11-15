import { Link } from 'react-router-dom'
import styles from '../../styles/styles-layouts/navbar.module.css'

function Navbar(){
    return(
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/empresa">Empresa</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/produto">Produto</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;