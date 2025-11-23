/**
 * Image Utility Functions
 * Helper functions for image optimization and processing
 */

/**
 * Generate blur placeholder for images
 */
export function generateBlurDataURL(width: number, height: number): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Calculate responsive image sizes
 */
export function getResponsiveSizes(type: 'hero' | 'article' | 'thumbnail' | 'icon'): string {
  const sizeMap = {
    hero: '100vw',
    article: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    thumbnail: '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw',
    icon: '64px',
  };

  return sizeMap[type];
}

/**
 * Get optimized image quality based on type
 */
export function getImageQuality(type: 'hero' | 'article' | 'thumbnail' | 'icon'): number {
  const qualityMap = {
    hero: 90,
    article: 85,
    thumbnail: 75,
    icon: 95,
  };

  return qualityMap[type];
}

/**
 * Generate SEO-friendly alt text
 */
export function generateAltText(fileName: string, context?: string): string {
  // Remove file extension and special characters
  const cleanName = fileName
    .replace(/\.(jpg|jpeg|png|webp|avif|gif)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Capitalize first letter of each word
  const formatted = cleanName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return context ? `${formatted} - ${context}` : formatted;
}

/**
 * Check if image should be prioritized (above the fold)
 */
export function shouldPrioritizeImage(index: number, isMobile: boolean = false): boolean {
  // First 2 images on desktop, first 1 on mobile
  return isMobile ? index === 0 : index < 2;
}

/**
 * Get optimal image dimensions for different screen sizes
 */
export function getOptimalDimensions(
  originalWidth: number,
  originalHeight: number,
  maxWidth: number = 1200
): { width: number; height: number } {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight };
  }

  const ratio = maxWidth / originalWidth;
  return {
    width: maxWidth,
    height: Math.round(originalHeight * ratio),
  };
}
