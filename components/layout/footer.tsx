import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-band bg-card/60">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/aurex-logo.png"
              alt="Aurex Technologies"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-contain"
            />
            <span className="font-bold">Aurex Technologies</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            Modern websites, web applications and digital solutions for companies that want a sharper online presence.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Book your consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Pages</h3>
          <div className="mt-4 grid gap-3">
            {navItems.filter((item) => item.label !== "Services").map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((item) => (
              <span key={item.title} className="text-sm text-muted-foreground">
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t py-5">
        <div className="container flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00a9"} {new Date().getFullYear()} Aurex Technologies. All rights reserved.</p>
          <p>Built for speed, clarity and growth.</p>
        </div>
      </div>
    </footer>
  );
}
