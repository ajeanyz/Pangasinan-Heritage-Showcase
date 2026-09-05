type SiteImageProps = { src: string; alt: string; eager?: boolean };
export function SiteImage({ src, alt, eager = false }: SiteImageProps) {
  return <img className="site-image" src={src} alt={alt} width="720" height="480" loading={eager ? "eager" : "lazy"} decoding="async" />;
}
