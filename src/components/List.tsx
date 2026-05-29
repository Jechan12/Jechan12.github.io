import { ExternalLink, Youtube } from 'lucide-react';
import styles from './List.module.css';

interface ListItemProps {
    title: string;
    subtitle?: string;
    meta?: string;
    description?: string;
    link?: string;
    video?: string;
}

export default function List({ items }: { items: ListItemProps[] }) {
    return (
        <div className={styles.list}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    {item.title}
                                    <ExternalLink size={16} className={styles.icon} />
                                </a>
                            ) : (
                                item.title
                            )}
                        </h3>
                        {item.subtitle && (
                            <p className={styles.subtitle}>
                                {item.subtitle.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return (
                                            <span key={i} className={styles.highlightAuthor}>
                                                {part.slice(2, -2)}
                                            </span>
                                        );
                                    }
                                    return <span key={i}>{part}</span>;
                                })}
                            </p>
                        )}
                        {item.description && <p className={styles.description}>{item.description}</p>}
                        {(item.meta || item.video) && (
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                                {item.meta && <span className={styles.meta}>{item.meta}</span>}
                                {item.video && (
                                    <a href={item.video} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                                        <Youtube size={14} /> Video
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
