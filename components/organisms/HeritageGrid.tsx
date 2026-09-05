"use client";
import { useMemo, useState } from "react";
import { HeritageCard } from "@/components/molecules/HeritageCard";
import { SearchForm } from "@/components/molecules/SearchForm";
import type { HeritageSite } from "@/data/heritage-sites";
export function HeritageGrid({ sites }: { sites: HeritageSite[] }) {
  const [query, setQuery] = useState("");
  const filteredSites = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? sites.filter((site) => `${site.name} ${site.location} ${site.category}`.toLowerCase().includes(term)) : sites;
  }, [query, sites]);
  return <><div className="grid-tools"><SearchForm value={query} onChange={setQuery} /><p aria-live="polite">{filteredSites.length} {filteredSites.length === 1 ? "place" : "places"}</p></div>
    {filteredSites.length > 0 ? <div className="heritage-grid">{filteredSites.map((site, index) => <HeritageCard key={site.name} site={site} priority={index < 2} />)}</div>
      : <div className="empty-state"><h3>No places found</h3><p>Try another town, site name, or category.</p><button onClick={() => setQuery("")}>Clear search</button></div>}
  </>;
}
