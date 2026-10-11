"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import PageWrapper from "@/components/layout/page-wrapper";

const colors = [
  { name: "Background", value: "#090909" },
  { name: "Text", value: "#f4f1ea" },
  { name: "Muted", value: "#a39e96" },
  { name: "Bone", value: "#d8d2c6" },
  { name: "Surface", value: "#121212" },
];

const SystemLab = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <PageWrapper className="space-y-14">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">08 — System</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight uppercase sm:text-6xl">Design system</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            The portfolio is built from the same rules it shows: color, type, grid, spacing, and component states.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Colors</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {colors.map((color) => (
              <div key={color.name} className="border border-white/10">
                <div className="h-16" style={{ background: color.value }} />
                <div className="px-3 py-2">
                  <p className="text-sm">{color.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Typography</h3>
            <p className="mt-4 text-4xl font-medium tracking-tight">Manrope for the product voice.</p>
            <p className="mt-4 font-mono text-sm tracking-[0.12em] text-muted-foreground uppercase">JetBrains Mono for the labels.</p>
          </div>
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Grid and spacing</h3>
            <div className="mt-4 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="h-8 bg-white/10" />
              ))}
            </div>
            <div className="mt-4 flex items-end gap-3">
              {[4, 8, 16, 24, 40, 64].map((size) => (
                <div key={size} className="bg-foreground/80" style={{ width: size, height: size }} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Buttons</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" className="border border-foreground/30 px-4 py-2 text-sm hover:bg-foreground hover:text-background">
                Default
              </button>
              <button
                type="button"
                disabled={sent}
                onClick={() => setSent(true)}
                className="border border-foreground/30 px-4 py-2 text-sm disabled:opacity-50"
              >
                {sent ? "Success" : "Loading"}
              </button>
              <button type="button" className="border border-foreground bg-foreground px-4 py-2 text-sm text-background">
                Active
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Inputs</h3>
            <label className="mt-4 block text-sm text-muted-foreground" htmlFor="system-field">
              Project name
            </label>
            <input
              id="system-field"
              className="mt-2 w-full border border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground"
              placeholder="A product worth building"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="border border-white/12 p-5">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Card</p>
            <p className="mt-3 text-lg font-medium">A surface for one idea.</p>
          </article>
          <div>
            <button
              type="button"
              className="border border-foreground/30 px-4 py-2 text-sm outline-none hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              onClick={() => dialog.current?.showModal()}
            >
              Open modal
            </button>
            <dialog
              ref={dialog}
              className="w-[min(100%,28rem)] border border-white/15 bg-[#121212] p-6 text-foreground backdrop:bg-black/70"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Modal</p>
              <p className="mt-3 text-xl font-medium">A focused decision, then back to the page.</p>
              <form method="dialog" className="mt-6">
                <button type="submit" className="border border-foreground px-4 py-2 text-sm">
                  Close
                </button>
              </form>
            </dialog>
          </div>
          <div>
            <button
              type="button"
              className="border border-foreground/30 px-4 py-2 text-sm outline-none hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              onClick={() => toast("The interface can answer back.")}
            >
              Show toast
            </button>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default SystemLab;
