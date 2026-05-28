import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Jechan Jeon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
