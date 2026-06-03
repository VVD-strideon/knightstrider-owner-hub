import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-white text-lg">
              Knightstrider<span className="text-primary"> Villas Direct</span>
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Helping Orlando villa owners earn more, stress less.
            </p>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Knightstrider Villas Direct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}