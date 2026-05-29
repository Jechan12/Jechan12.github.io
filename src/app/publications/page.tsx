import Section from '@/components/Section';
import List from '@/components/List';
import { publications } from '@/lib/data';

export const metadata = {
    title: 'Publications | Jechan Jeon',
    description: 'Academic publications and conference papers.',
};

export default function Publications() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-3xl)' }}>
            <h1 className="mb-xl">Publications</h1>

            <Section>
                <List
                    items={publications.map(pub => ({
                        title: pub.title,
                        subtitle: pub.authors,
                        meta: `${pub.venue}, ${pub.year}`,
                        link: pub.link,
                        video: pub.video
                    }))}
                />
            </Section>
        </div>
    );
}
