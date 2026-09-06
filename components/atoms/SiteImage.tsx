type SiteImageProps = { src: string; alt: string; eager?: boolean };
const basePath = process.env.NODE_ENV === "production" ? "/Pangasinan-Heritage-Showcase" : "";

export function SiteImage({ src, alt, eager = false }: SiteImageProps) {
  return <img className="site-image" src={`${basePath}/${src}`} alt={alt} width="720" height="480" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />;
}
