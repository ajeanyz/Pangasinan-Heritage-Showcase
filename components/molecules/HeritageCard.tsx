import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "@/components/atoms/SiteImage";
import { LocationIcon } from "@/components/atoms/LocationIcon";
import type { HeritageSite } from "@/data/heritage-sites";
export function HeritageCard({ site, priority = false }: { site: HeritageSite; priority?: boolean }) {
  return <article className="heritage-card">
    <div className="card-image-wrap"><SiteImage src={site.image} alt={site.imageAlt} eager={priority} /><span className="card-category">{site.category}</span><span className="card-bow" aria-hidden="true">🎀</span></div>
    <div className="card-body"><p className="location"><LocationIcon />{site.location}</p><h3>{site.name}</h3><p>{site.description}</p>
      <a href={site.mapUrl} target="_blank" rel="noreferrer" aria-label={`View ${site.name} on a map`}>View location <ArrowUpRight size={17} aria-hidden="true" /></a>
    </div>
  </article>;
}
