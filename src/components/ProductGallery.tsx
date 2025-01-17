'use client';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useEffect, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { FullscreenImage } from './FullscreenImage';

interface ProductGalleryProps {
  mainImage: string;
  additionalImages?: string[];
}

export function ProductGallery({ mainImage, additionalImages = [] }: ProductGalleryProps) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    {
      original: mainImage,
      thumbnail: mainImage,
    },
    ...additionalImages.map(image => ({
      original: image,
      thumbnail: image,
    })),
  ];

  const handleSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  if (!mounted) {
    // Fallback para SSR
    return (
      <div className="aspect-square w-full overflow-hidden rounded-lg border border-gray-800 relative group">
        <img
          src={mainImage}
          alt="Product"
          className="h-full w-full object-cover object-center"
        />
        <button
          onClick={handleFullscreen}
          className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <Maximize2 className="h-5 w-5" />
        </button>
      </div>
    );
  }

  if (additionalImages.length === 0) {
    return (
      <div className="aspect-square w-full overflow-hidden rounded-lg border border-gray-800 relative group">
        <img
          src={mainImage}
          alt="Product"
          className="h-full w-full object-cover object-center"
        />
        <button
          onClick={handleFullscreen}
          className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <Maximize2 className="h-5 w-5" />
        </button>
        {isFullscreen && (
          <FullscreenImage
            src={mainImage}
            alt="Product"
            onClose={() => setIsFullscreen(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="aspect-square w-full overflow-hidden rounded-lg border border-gray-800 relative group">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        thumbnailPosition="bottom"
        onSlide={handleSlide}
        additionalClass="product-gallery"
      />
      <button
        onClick={handleFullscreen}
        className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
      >
        <Maximize2 className="h-5 w-5" />
      </button>
      {isFullscreen && (
        <FullscreenImage
          src={images[currentImageIndex].original}
          alt="Product"
          onClose={() => setIsFullscreen(false)}
        />
      )}
    </div>
  );
}
