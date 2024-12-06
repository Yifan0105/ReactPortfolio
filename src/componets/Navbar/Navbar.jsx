import React ,{useState} from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    // REACT HOOK : State to manage the menu open/close state
    const [menuOpen, setMenuOpen] = useState(false);
    // 第一个变量是状态 第二个变量是调整状态的方法 默认情况下为false
    // 如果setMenuOpen(true)为true

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} >Yifan's Portfolio</a>
            <div className={styles.menu} >
                <img
                className={styles.menuBtn}
                // if menu open true, show close icon
                src={menuOpen ? "/ReactPortfolio/assets/nav/closeIcon.png" : "/ReactPortfolio/assets/nav/menuIcon.png"}
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)} // when the menu button is clicked, the menu open/close state will be toggled
                />
                <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} // if menuopen is ture , it will use the style of styles.menuOpen, else it will use the style of styles.menu 
                onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#formations">Formations</a></li>
                    <li><a href="#experiences">Expériences</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    {/* <li><a href="#projets">Projets</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};