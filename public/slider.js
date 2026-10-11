const bindSliders = () => {
  document.querySelectorAll("[data-gallery], [data-work-slider]").forEach((root) => {
    if (root.dataset.bound) return;
    root.dataset.bound = "1";

    const track = root.querySelector("[data-gallery-track], [data-work-track]");
    const prev = root.querySelector("[data-gallery-prev], [data-work-prev]");
    const next = root.querySelector("[data-gallery-next], [data-work-next]");
    if (!track || !prev || !next) return;

    let index = 0;
    let startX = 0;
    let dragging = false;
    let moved = false;
    let wheelLock = false;


    const step = () => {
      const card = track.querySelector("[data-slide]");
      return card ? card.getBoundingClientRect().width + 24 : 0;
    };

    const max = () => Math.max(0, track.querySelectorAll("[data-slide]").length - 1);

    const apply = (px, smooth) => {
      track.style.transitionDuration = smooth ? "500ms" : "0s";
      track.style.transform = "translateX(-" + px + "px)";
    };

    const go = (value) => {
      index = Math.max(0, Math.min(max(), value));
      apply(index * step(), true);
    };

    const nearest = () => {
      const nodes = [...document.querySelectorAll("[data-work-slider], [data-gallery]")];
      let best = null;
      let bestDist = Infinity;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
        const dist = Math.abs((rect.top + rect.bottom) / 2 - window.innerHeight / 2);
        if (dist < bestDist) {
          bestDist = dist;
          best = node;
        }
      });
      return best;
    };

    prev.addEventListener("click", (event) => {
      event.preventDefault();
      go(index - 1);
    });

    next.addEventListener("click", (event) => {
      event.preventDefault();
      go(index + 1);
    });

    const onPointerMove = (event) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 48) moved = true;
      apply(index * step() - delta, false);
    };

    const finishDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", finishDrag);
      window.removeEventListener("pointercancel", finishDrag);
      const delta = event.clientX - startX;
      if (delta < -48) go(index + 1);
      else if (delta > 48) go(index - 1);
      else go(index);
    };

    track.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button")) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", finishDrag);
      window.addEventListener("pointercancel", finishDrag);
    });

    track.addEventListener(
      "click",
      (event) => {
        const full = event.target.closest("[data-full]");
        if (moved) {
          event.preventDefault();
          event.stopPropagation();
          moved = false;
          return;
        }
        if (!full || !root.hasAttribute("data-gallery")) return;
        event.preventDefault();
        const overlay = document.createElement("div");
        overlay.setAttribute(
          "style",
          "position:fixed;inset:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(0,0,0,.92);cursor:zoom-out;",
        );
        const image = document.createElement("img");
        image.src = full.getAttribute("data-full");
        image.alt = "";
        image.setAttribute(
          "style",
          "max-width:100%;max-height:100%;object-fit:contain;",
        );
        overlay.appendChild(image);
        const close = () => {
          overlay.remove();
          document.removeEventListener("keydown", onKey);
        };
        const onKey = (keyEvent) => {
          if (keyEvent.key === "Escape") close();
        };
        overlay.addEventListener("click", close);
        document.addEventListener("keydown", onKey);
        document.body.appendChild(overlay);
      },
      true,
    );

    root.addEventListener(
      "wheel",
      (event) => {
        const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey;
        if (!horizontal) return;
        event.preventDefault();
        if (wheelLock) return;
        const delta = event.deltaX || event.deltaY;
        if (Math.abs(delta) < 8) return;
        wheelLock = true;
        go(index + (delta > 0 ? 1 : -1));
        window.setTimeout(() => {
          wheelLock = false;
        }, 480);
      },
      { passive: false },
    );

    document.addEventListener("keydown", (event) => {
      const typing = event.target.closest("input, textarea, [contenteditable='true']");
      if (typing || nearest() !== root) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(index + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }
    });

    window.addEventListener("resize", () => go(index));
  });
};

bindSliders();
new MutationObserver(bindSliders).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
