import type { ReactNode } from "react";
export function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="button" href={href}>{children}<span aria-hidden="true">→</span></a>;
}
