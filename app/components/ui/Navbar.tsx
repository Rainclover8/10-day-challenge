'use client'
import { useState } from "react";
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "./resizable-navbar";

function MainNavbar() {

    const navItems = [
    {
      name: "Ana Sayfa",
      link: "#home",
    },
    {
      name: "Projeler",
      link: "#projects",
    },
    {
      name: "Gelecek Projeler",
      link: "#future-projects",
    },
      {
      name: "Hakkımda",
      link: "#about",
    }
  ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
  <nav>
     <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <a href="/" className="text-4xl font-bold z-50">Youtube</a>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <a href="/" className="z-50">Youtube</a>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

  </nav>
  )
}

export default MainNavbar
