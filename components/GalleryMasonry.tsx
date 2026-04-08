'use client';

import { useState } from 'react';

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = 'Trending Picks',
  subheadline = 'Explore best-selling items our customers love this week.',
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>

        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {images.map((img, i) => (
            <div key={i} className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl border border-border bg-card" onClick={() => setSelectedImage(img)}>
              <img src={img.url} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              {img.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-foreground/70 p-3">
                  <p className="text-sm text-background">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage.url} alt={selectedImage.alt} className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
