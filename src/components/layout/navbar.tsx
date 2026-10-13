"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn, navProjects, site } from "@/lib";
import ProjectMedia from "@/components/work/project-media";

const Navbar = () => {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [preview, setPreview] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setWorkOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const currentNav = navProjects[preview] ?? navProjects[0];

  const active = (href: string) =>
    href === "/work" ? pathname.startsWith("/work") : pathname === href;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="width-layout">
        <div
          data-filled={scrolled || open || workOpen ? "true" : "false"}
          className={cn(
            "flex h-16 items-center justify-between gap-4 border transition-all duration-300 md:h-[4.25rem]",
            scrolled || open || workOpen
              ? "mt-3 rounded-full border-white/10 bg-background px-4 shadow-[0_18px_50px_rgba(0,0,0,0.55)] sm:px-6"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" aria-label="Courage Livingstone, home" className="group flex items-center gap-3 outline-none">
            <span className="relative grid h-12 w-12 place-items-center">
              <span className="logo-ring absolute inset-0 rounded-full border border-dashed border-lime/60" />
              <Image
                src="/images/logo-cl.png"
                alt=""
                width={48}
                height={48}
                priority
                className="relative h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
              />
            </span>
            <span className="hidden text-sm tracking-[-0.03em] sm:block">{site.name}</span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {site.nav.map((item) =>
              item.href === "/work" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    setWorkOpen(true);
                    setHovered(item.href);
                  }}
                  onMouseLeave={() => setWorkOpen(false)}
                >
                  <Link
                    href={item.href}
                    data-active={active(item.href) ? "true" : "false"}
                    className="nav-link relative z-0 px-3 py-2 text-sm text-foreground/80 outline-none hover:text-foreground"
                  >
                    {hovered === item.href || (!hovered && active(item.href)) ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-lime/10"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {workOpen ? (
                      <motion.div
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: 6 }}
                        transition={{ duration: 0.28, ease }}
                        className="absolute top-full left-1/2 z-50 w-[min(44rem,calc(100vw-2.5rem))] -translate-x-1/2 pt-5"
                      >
                        <div className="panel grid grid-cols-[1.15fr_0.85fr] items-stretch gap-3 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                          <Link
                            href={`/work/${currentNav.slug}`}
                            className="relative min-h-[16rem] overflow-hidden rounded-2xl"
                          >
                            <ProjectMedia
                              cover={currentNav.cover}
                              title={currentNav.title}
                              className="absolute inset-0 h-full w-full !aspect-auto rounded-2xl border-0"
                              imageClassName="!object-cover object-center"
                            />
                          </Link>
                          <ul className="flex flex-col justify-center py-1">
                            {navProjects.map((project, index) => (
                              <li key={project.slug}>
                                <Link
                                  href={`/work/${project.slug}`}
                                  onMouseEnter={() => setPreview(index)}
                                  onFocus={() => setPreview(index)}
                                  className={cn(
                                    "block rounded-xl px-3 py-1.5 text-sm transition-colors",
                                    index === preview ? "bg-white/5 text-lime" : "text-foreground/75 hover:text-foreground",
                                  )}
                                >
                                  {project.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active(item.href) ? "true" : "false"}
                  onMouseEnter={() => setHovered(item.href)}
                  className="nav-link relative z-0 px-3 py-2 text-sm text-foreground/80 outline-none hover:text-foreground"
                >
                  {hovered === item.href || (!hovered && active(item.href)) ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-lime/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <p className="hidden items-center gap-2 text-xs text-foreground/70 xl:flex">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_#c6f135]" />
              {site.availability}
            </p>
            <Link
              href="/contact"
              className="btn-lime hidden rounded-full px-4 py-2 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
            >
              <span className="btn-ink">Let&apos;s talk</span>
            </Link>
            <button
              type="button"
              className="font-mono text-[11px] tracking-[0.16em] uppercase lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-[45] flex h-dvh w-full min-w-0 flex-col overflow-x-hidden overflow-y-auto bg-background px-[5%] pt-[4.75rem] pb-[max(1.25rem,env(safe-area-inset-bottom))] xl:px-[70px]"
          >
            <ul className="flex flex-1 flex-col justify-start gap-0 pt-2">
              {site.nav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: reduce ? 0 : 0.05 + index * 0.05, ease }}
                >
                  <Link href={item.href} className="block py-2 text-[1.75rem] font-medium tracking-[-0.05em]">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-5">
              <div className="flex min-w-0 touch-pan-x gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {navProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="w-[5.4rem] shrink-0 overflow-hidden rounded-2xl min-[390px]:w-28"
                  >
                    <ProjectMedia
                      cover={project.cover}
                      title={project.title}
                      className="aspect-[4/3] border-0"
                      imageClassName="!object-cover object-center"
                    />
                  </Link>
                ))}
              </div>
              <p className="flex items-center gap-2 text-sm text-foreground/70">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-lime" />
                {site.availability}
              </p>
              <Link href="/contact" className="btn-lime inline-flex rounded-full px-5 py-3 text-sm font-medium">
                <span className="btn-ink">Let&apos;s talk</span>
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
