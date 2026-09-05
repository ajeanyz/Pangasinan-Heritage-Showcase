"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavigationItem } from "@/components/molecules/NavigationItem";
export function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  return <header id="top"><div className="container header-inner">
    <a className="brand" href="#top" aria-label="Hello Pangasinan home"><span className="brand-mark" aria-hidden="true">✿</span><span>Hello<br /><b>Pangasinan!</b></span></a>
    <button className="menu-button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="primary-navigation" className={open ? "nav-open" : ""} aria-label="Primary navigation" onClick={() => setOpen(false)}>
      <NavigationItem href="#heritage" label="Explore" /><NavigationItem href="#about" label="Our Story" /><NavigationItem href="#visit" label="Visit Responsibly" />
    </nav>
  </div></header>;
}
