"use client";

import { useEffect, useState } from 'react';

const imageCache = new Set<string>();

export function useImagePreload(images: string[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imagesToLoad = images.filter(src => !imageCache.has(src));
    
    if (imagesToLoad.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imagesToLoad.length;

    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      
      const handleLoad = () => {
        imageCache.add(src);
        loadedCount++;
        if (loadedCount === totalImages) {
          setLoaded(true);
        }
      };

      const handleError = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setLoaded(true);
        }
      };

      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);
      }
    });
  }, [images]);

  return loaded;
}

export function clearImageCache() {
  imageCache.clear();
}
