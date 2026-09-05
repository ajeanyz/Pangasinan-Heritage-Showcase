import { Search, X } from "lucide-react";
type SearchFormProps = { value: string; onChange: (value: string) => void };
export function SearchForm({ value, onChange }: SearchFormProps) {
  return <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
    <label htmlFor="heritage-search" className="sr-only">Search heritage sites</label><Search size={19} aria-hidden="true" />
    <input id="heritage-search" type="search" placeholder="Search by place or town…" value={value} onChange={(e) => onChange(e.target.value)} />
    {value && <button type="button" onClick={() => onChange("")} aria-label="Clear search"><X size={17} /></button>}
  </form>;
}
