import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import List from '@/components/List';
import { research, publications } from '@/lib/data';

export default function Home() {
  // Get latest 2 items for preview
  const latestResearch = research.slice(0, 2);
  const latestPublications = publications.slice(0, 2);

  return (
    <>
      <Hero />

      <Section title="Recent Research" className="bg-surface">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {latestResearch.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/research" className="btn btn-outline">
            View All Research <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </Section>

      <Section title="Publications">
        <List
          items={latestPublications.map(pub => ({
            title: pub.title,
            subtitle: pub.authors,
            meta: pub.venue,
            link: pub.link
          }))}
        />
        <div className="text-center" style={{ marginTop: '2rem' }}>
          <Link href="/publications" className="btn btn-outline">
            View All Publications <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </Section>
    </>
  );
}
