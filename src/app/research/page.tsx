import Section from '@/components/Section';
import Card from '@/components/Card';
import { research } from '@/lib/data';

export const metadata = {
    title: 'Research | Jechan Jeon',
    description: 'Research topics and projects.',
};

export default function Research() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-3xl)' }}>
            <h1 className="mb-xl">Research</h1>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {research.map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
