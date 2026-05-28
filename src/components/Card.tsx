import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Card.module.css';

interface CardProps {
    id?: string;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    link?: string;
}

export default function Card({ id, title, description, image, tags, link }: CardProps) {
    const CardContent = (
        <div className={styles.card}>
            {image && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            )}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                {tags && (
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                )}

                {link && !id && (
                    <div className={styles.footer}>
                        <span className={styles.link}>
                            Learn More <ArrowRight size={16} />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );

    if (id) {
        return (
            <Link href={`/research/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {CardContent}
            </Link>
        );
    }

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {CardContent}
            </a>
        );
    }

    return CardContent;
}
