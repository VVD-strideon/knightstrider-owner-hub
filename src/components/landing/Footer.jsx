import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ background: "#081D3A", borderColor: "rgba(33,102,243,0.2)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-white text-lg tracking-tight">
              KNIGHTSTRIDER <span className="font-semibold" style={{ color: "#4F8EF7" }}>VILLAS DIRECT</span>
            </p>
            <p className="font-medium text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Helping Orlando villa owners earn more, stress less.
            </p>
          </div>
          <p className="font-medium text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Knightstrider Villas Direct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}