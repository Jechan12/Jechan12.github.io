import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Mail, Linkedin, Instagram } from 'lucide-react';
import styles from './Hero.module.css';
import { personalInfo } from '@/lib/data';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Hi, I'm <span className={styles.highlight}>{personalInfo.name}</span>
                        </h1>
                        <p className={styles.subtitle}>
                            {personalInfo.role} at {personalInfo.affiliation}
                        </p>
                        <p className={styles.description}>
                            {personalInfo.description}
                        </p>

                        <div className={styles.socialLinks}>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email">
                                <Mail size={24} />
                            </a>
                            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                        </div>

                        <div className={styles.actions}>
                            <Link href="/research" className="btn btn-primary">
                                View Research <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link href="/about" className="btn btn-outline">
                                About Me
                            </Link>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={personalInfo.heroImage}
                                alt={personalInfo.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
