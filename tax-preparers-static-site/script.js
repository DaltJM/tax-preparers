// Google reviews carousel. The reviews are static HTML; this adds previous/next buttons, position dots,
// and a "See more" button on any review that is cut short. Without JavaScript the reviews are a plain
// scrollable list with their full text; with reduced motion they are a static grid (see styles.css).
const reviewSection = document.querySelector("[data-reviews]");

if (reviewSection) {
  const viewport = reviewSection.querySelector("[data-review-viewport]");
  const cards = [...reviewSection.querySelectorAll("[data-review]")];
  const previous = reviewSection.querySelector("[data-review-previous]");
  const next = reviewSection.querySelector("[data-review-next]");
  const status = reviewSection.querySelector("[data-review-status]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Hides the scrollbar and clamps the text; both only make sense once the controls below exist.
  reviewSection.classList.add("reviews-enhanced");

  const offsetOf = (card) => card.parentElement.offsetLeft - cards[0].parentElement.offsetLeft;
  const scrollToCard = (card) =>
    viewport.scrollTo({ left: offsetOf(card), behavior: reduceMotion.matches ? "auto" : "smooth" });

  // Dots replace the hidden scrollbar as the "more this way" cue. Previous/next and the focusable list
  // are the accessible controls, so the dots are hidden from screen readers and skipped by Tab.
  const dots = document.createElement("div");
  dots.className = "review-dots";
  dots.setAttribute("aria-hidden", "true");
  const dotButtons = cards.map((card) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.tabIndex = -1;
    dot.addEventListener("click", () => scrollToCard(card));
    dots.append(dot);
    return dot;
  });
  viewport.after(dots);

  function currentIndex() {
    return cards.reduce(
      (closest, card, index) =>
        Math.abs(offsetOf(card) - viewport.scrollLeft) < Math.abs(offsetOf(cards[closest]) - viewport.scrollLeft)
          ? index
          : closest,
      0,
    );
  }

  function update(announce) {
    const atStart = viewport.scrollLeft <= 2;
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;

    // Keep keyboard focus inside the controls when the focused button is about to disable.
    if (atStart && document.activeElement === previous) next.focus();
    if (atEnd && document.activeElement === next) previous.focus();
    previous.disabled = atStart;
    next.disabled = atEnd;
    dots.hidden = atStart && atEnd;

    const box = viewport.getBoundingClientRect();
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const shown = Math.min(rect.right, box.right) - Math.max(rect.left, box.left);
      dotButtons[index].classList.toggle("is-active", shown >= rect.width * 0.6);
    });
    if (announce) status.textContent = `Showing review ${currentIndex() + 1} of ${cards.length}`;
  }

  function move(direction) {
    const target = Math.min(Math.max(currentIndex() + direction, 0), cards.length - 1);
    scrollToCard(cards[target]);
  }

  let scrollTimer;
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  viewport.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => update(true), 120);
    },
    { passive: true },
  );

  // "See more" opens a review that the six-line clamp cuts short. The full text is always in the HTML.
  const toggles = cards.map((card, index) => {
    const text = card.querySelector("blockquote p");
    const label = document.createElement("span");
    const context = document.createElement("span");
    const button = document.createElement("button");
    text.id ||= `review-text-${index + 1}`;
    label.textContent = "See more";
    context.className = "sr-only";
    context.textContent = ` of ${card.querySelector("footer strong")?.textContent.trim() || "this"}’s review`;
    button.type = "button";
    button.className = "review-toggle";
    button.hidden = true;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", text.id);
    button.append(label, context);
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      text.classList.toggle("is-expanded", open);
      label.textContent = open ? "See less" : "See more";
    });
    card.querySelector("footer").append(button);
    return { text, button };
  });

  const measure = () =>
    toggles.forEach(({ text, button }) => {
      if (!text.classList.contains("is-expanded")) button.hidden = text.scrollHeight <= text.clientHeight + 1;
    });

  const layout = () => {
    measure();
    update(false);
  };
  if ("ResizeObserver" in window) new ResizeObserver(layout).observe(viewport);
  window.addEventListener("resize", layout);
  layout();
}
