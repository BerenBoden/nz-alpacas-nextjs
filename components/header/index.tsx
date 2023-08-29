"use client";
import * as React from "react";
import Navigation from "@/components/header/navigation";
import MobileMenu from "@/components/header/mobile-menu";

export default function Index() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Navigation setMobileMenuOpen={setMobileMenuOpen} />
    </>
  );
}
