import { FaInstagram, FaLinkedin } from 'react-icons/fa'


import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list}>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer 