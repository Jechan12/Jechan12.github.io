import Section from '@/components/Section';
import { education, experience, skills } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
    title: 'About | Jechan Jeon',
    description: 'Education, experience, and skills of Jechan Jeon.',
};

export default function About() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-3xl)' }}>
            <h1 className="mb-xl">About Me</h1>

            <Section title="Education">
                <div className={styles.timeline}>
                    {education.map((edu, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDate}>{edu.period}</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.itemTitle}>{edu.degree}</h3>
                                <div className={styles.itemSubtitle}>{edu.school}, {edu.location}</div>
                                {edu.details && <p className={styles.itemDescription}>{edu.details}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Research Experience">
                <div className={styles.timeline}>
                    {experience.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDate}>{exp.period}</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.itemTitle}>{exp.role}</h3>
                                <div className={styles.itemSubtitle}>
                                    {exp.lab}
                                    {exp.link && (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            [Lab Homepage]
                                        </a>
                                    )}
                                </div>
                                <p className={styles.itemDescription}>{exp.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Skills & Interests">
                <div className={styles.skillsGrid}>
                    {skills.map((category, index) => (
                        <div key={index} className={styles.skillCategory}>
                            <h3 className={styles.skillTitle}>{category.category}</h3>
                            <div className={styles.skillList}>
                                {category.items.map((item, i) => (
                                    <span key={i} className={styles.skillTag}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
