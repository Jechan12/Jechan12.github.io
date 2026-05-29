import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { research } from '@/lib/data';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// This function is required for static export to know which paths to generate
export async function generateStaticParams() {
    return research.map((item) => ({
        id: item.id,
    }));
}

export default async function ResearchDetail({ params }: PageProps) {
    const { id } = await params;
    const item = research.find((r) => r.id === id);

    if (!item) {
        notFound();
    }

    return (
        <main className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
            <Link
                href="/research"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}
            >
                <ArrowLeft size={16} /> Back to Research
            </Link>

            <article>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>{item.title}</h1>

                {item.image && (
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem' }}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                )}

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '3rem', whiteSpace: 'pre-wrap' }}>
                        {item.details || item.description}
                    </p>

                    {item.videoId && (
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Demo Video</h2>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    src={`https://www.youtube.com/embed/${item.videoId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </main>
    );
}
