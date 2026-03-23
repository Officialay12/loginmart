/* ═══════════════════════════════════════════════
   LOGINMART · script.js  (Enhanced)
   ═══════════════════════════════════════════════ */
"use strict";

/* ────────────────────────────────────────────────
   PRODUCT DATA
──────────────────────────────────────────────── */
const WA = "2347040983063";

const virtualNumbers = [
  {
    name: "Telegram",
    icon: "fab fa-telegram",
    desc: "Verified Telegram numbers for instant account verification.",
    price: "₦4,000",
    tier: "Basic",
    rating: 4.9,
    wa: WA,
  },
  {
    name: "WhatsApp",
    icon: "fab fa-whatsapp",
    desc: "Active WhatsApp numbers ready to use with full messaging access.",
    price: "₦4,000",
    tier: "Premium",
    rating: 5.0,
    wa: WA,
  },
  {
    name: "TextPlus",
    icon: "fas fa-comment-dots",
    desc: "TextPlus secondary numbers for multi-platform verification.",
    price: "₦3,600",
    tier: "Basic",
    rating: 4.7,
    wa: WA,
  },
  {
    name: "TextNow",
    icon: "fas fa-sms",
    desc: "US-based TextNow numbers for calls and texts.",
    price: "₦4,000",
    tier: "Basic",
    rating: 4.8,
    wa: WA,
  },
  {
    name: "Signal",
    icon: "fas fa-lock",
    desc: "Privacy-focused Signal numbers for secure encrypted chat.",
    price: "₦2,500",
    tier: "Premium",
    rating: 4.9,
    wa: WA,
  },
];

const socialLogins = [
  {
    name: "TikTok",
    icon: "fab fa-tiktok",
    desc: "Aged TikTok accounts with real followers and full activity history.",
    price: "ask",
    tier: "Business",
    rating: 4.9,
    wa: WA,
  },
  {
    name: "X (Twitter)",
    icon: "fab fa-twitter",
    desc: "Verified X / Twitter accounts with email access and post history.",
    price: "ask",
    tier: "Premium",
    rating: 4.8,
    wa: WA,
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook",
    desc: "Aged Facebook profiles with friends, activity and full account access.",
    price: "ask",
    tier: "Premium",
    rating: 4.7,
    wa: WA,
  },
  {
    name: "WhatsApp Business",
    icon: "fab fa-whatsapp",
    desc: "Business WhatsApp accounts with API access ready to activate.",
    price: "ask",
    tier: "Business",
    rating: 5.0,
    wa: WA,
  },
];

const BADGE = {
  Basic: "b-basic",
  Premium: "b-premium",
  Business: "b-business",
};

function stars(r) {
  return "★".repeat(Math.floor(r)) + (r % 1 >= 0.5 ? "½" : "");
}

/* build card with flip: front + back */
function buildCard(p) {
  const isAsk = p.price === "ask";

  const waMsg = isAsk
    ? encodeURIComponent(
        `Hi LoginMart, I'd like a price quote for ${p.name}. Please share the available years and pricing.`,
      )
    : encodeURIComponent(
        `Hi LoginMart, I'm interested in ${p.name} for ${p.price}`,
      );

  const priceBlock = isAsk
    ? `<div class="p-price p-price-ask">Ask<span class="p-price-sub">Based on years</span></div>`
    : `<div class="p-price">${p.price}</div>`;

  const btnClass = isAsk ? "p-btn p-btn-quote" : "p-btn";
  const btnLabel = isAsk ? "Get a Quote" : "Buy Now";

  return `
  <div class="p-card-scene">
    <div class="p-card">
      <!-- FRONT -->
      <div class="p-front">
        <div class="p-icon"><i class="${p.icon}"></i></div>
        <div class="p-name">${p.name}</div>
        <p class="p-desc">${p.desc}</p>
        <div class="p-row">
          ${priceBlock}
          <span class="p-badge ${BADGE[p.tier]}">${p.tier}</span>
        </div>
        <div class="p-stars">${stars(p.rating)} <span>(${p.rating})</span></div>
        <a href="https://wa.me/${p.wa}?text=${waMsg}"
           class="${btnClass}" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i> ${btnLabel}
        </a>
      </div>
      <!-- BACK -->
      <div class="p-back">
        <div class="p-icon" style="margin:0 auto"><i class="${p.icon}"></i></div>
        <div class="p-back-title">${p.name}</div>
        <p class="p-back-desc">${p.desc}<br><br>Chat us on WhatsApp to get started instantly.</p>
        <a href="https://wa.me/${p.wa}?text=${waMsg}"
           class="${btnClass} p-btn" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i> ${isAsk ? "Get a Quote" : "Order on WhatsApp"}
        </a>
      </div>
    </div>
  </div>`;
}

document.getElementById("grid-numbers").innerHTML = virtualNumbers
  .map(buildCard)
  .join("");
document.getElementById("grid-logins").innerHTML = socialLogins
  .map(buildCard)
  .join("");

/* ────────────────────────────────────────────────
   MARQUEE
──────────────────────────────────────────────── */
(function initMarquee() {
  const items = [
    { icon: "fas fa-bolt", label: "Instant Delivery" },
    { icon: "fas fa-shield-alt", label: "Fully Secured" },
    { icon: "fab fa-whatsapp", label: "24/7 Support" },
    { icon: "fas fa-redo", label: "7-Day Warranty" },
    { icon: "fas fa-star", label: "4.9 ★ Rated" },
    { icon: "fas fa-globe", label: "Worldwide" },
    { icon: "fab fa-bitcoin", label: "Crypto Accepted" },
    { icon: "fas fa-lock", label: "Privacy First" },
  ];
  const track = document.getElementById("mq-track");
  let html = "";
  for (let r = 0; r < 3; r++) {
    items.forEach((it) => {
      html += `<div class="mq-item"><i class="${it.icon}"></i>${it.label}<span class="mq-sep">✦</span></div>`;
    });
  }
  track.innerHTML = html;
})();

/* ────────────────────────────────────────────────
   PRELOADER
──────────────────────────────────────────────── */
(function initPreloader() {
  const el = document.getElementById("preloader");
  const fill = document.getElementById("pl-fill");
  const label = document.getElementById("pl-label");
  const msgs = [
    "Curating assets…",
    "Securing connection…",
    "Almost ready…",
    "Welcome!",
  ];
  let pct = 0;

  const t = setInterval(() => {
    pct += Math.random() * 5 + 2;
    if (pct > 100) pct = 100;
    fill.style.width = pct + "%";
    label.textContent = msgs[Math.min(Math.floor(pct / 34), msgs.length - 1)];

    if (pct >= 100) {
      clearInterval(t);
      setTimeout(() => {
        el.classList.add("gone");
        initReveal();
        initCounters();
        initTyped();
      }, 380);
    }
  }, 42);
})();

/* ────────────────────────────────────────────────
   TYPEWRITER
──────────────────────────────────────────────── */
function initTyped() {
  const el = document.getElementById("typed-text");
  const words = [
    "Instant Access",
    "Virtual Numbers",
    "Social Accounts",
    "Delivered Fast",
  ];
  let wi = 0,
    ci = 0,
    deleting = false;

  function tick() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(tick, 400);
        return;
      }
    }
    setTimeout(tick, deleting ? 55 : 90);
  }
  tick();
}

/* ────────────────────────────────────────────────
   SCROLL PROGRESS + NAVBAR + BACK TO TOP
──────────────────────────────────────────────── */
const navbar = document.getElementById("navbar");
const progress = document.getElementById("scroll-progress");
const backTop = document.getElementById("back-top");

function updateScroll() {
  const sy = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (sy / max) * 100 : 0;

  progress.style.width = pct + "%";
  navbar.classList.toggle("pinned", sy > 55);
  backTop.classList.toggle("visible", sy > 400);

  const sections = document.querySelectorAll("section[id], footer[id]");
  let current = "";
  sections.forEach((s) => {
    if (sy + 150 >= s.offsetTop) current = s.id;
  });
  document.querySelectorAll(".nav-a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}
window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

backTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

/* ────────────────────────────────────────────────
   PARALLAX
──────────────────────────────────────────────── */
const pxL1 = document.getElementById("px-l1");
const pxL2 = document.getElementById("px-l2");
const pxL3 = document.getElementById("px-l3");
const pxBand = document.getElementById("px-band-bg");

function runParallax() {
  const sy = window.scrollY;
  if (pxL1) pxL1.style.transform = `translateY(${sy * 0.1}px)`;
  if (pxL2) pxL2.style.transform = `translateY(${sy * 0.2}px)`;
  if (pxL3) pxL3.style.transform = `translateY(${sy * 0.36}px)`;
  if (pxBand) {
    const rect = pxBand.closest(".px-band").getBoundingClientRect();
    const shift = (window.innerHeight * 0.5 - rect.top) * 0.16;
    pxBand.style.transform = `translateY(${shift}px)`;
  }
}
window.addEventListener("scroll", runParallax, { passive: true });
runParallax();

/* ────────────────────────────────────────────────
   SCROLL REVEAL
──────────────────────────────────────────────── */
function initReveal() {
  /* Cards stagger */
  const cardObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = Array.from(entry.target.parentElement.children).indexOf(
          entry.target,
        );
        setTimeout(
          () => entry.target.querySelector(".p-card")?.classList.add("in"),
          idx * 80,
        );
        cardObs.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(".p-card-scene")
    .forEach((el) => cardObs.observe(el));

  /* feat-cards */
  const featObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = Array.from(entry.target.parentElement.children).indexOf(
          entry.target,
        );
        setTimeout(() => entry.target.classList.add("in"), idx * 80);
        featObs.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".feat-card").forEach((el) => featObs.observe(el));

  /* hiw-cards & connectors */
  const hiwObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          hiwObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".hiw-card, .hiw-connector")
    .forEach((el) => hiwObs.observe(el));

  /* Generic fade-up */
  const fadeObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          fadeObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -35px 0px" },
  );
  document.querySelectorAll(".fade-up").forEach((el) => fadeObs.observe(el));
}

/* ────────────────────────────────────────────────
   ANIMATED COUNTERS
──────────────────────────────────────────────── */
function initCounters() {
  document.querySelectorAll("[data-to]").forEach((el) => {
    const target = parseFloat(el.dataset.to);
    const isFloat = "dec" in el.dataset;
    const suffix = el.dataset.sfx || "";
    const steps = 55,
      ms = 1800;
    let cur = 0;
    const inc = target / steps;

    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      el.textContent =
        (isFloat ? cur.toFixed(1) : Math.floor(cur).toLocaleString()) + suffix;
      if (cur >= target) {
        el.textContent =
          (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
        clearInterval(t);
      }
    }, ms / steps);
  });
}

/* ────────────────────────────────────────────────
   TESTIMONIALS CAROUSEL
──────────────────────────────────────────────── */
(function initTestimonials() {
  const track = document.getElementById("testi-track");
  const dots = document.getElementById("testi-dots");
  const prev = document.getElementById("testi-prev");
  const next = document.getElementById("testi-next");
  if (!track) return;

  const slides = track.querySelectorAll(".testi-slide");
  let cur = 0,
    timer;

  /* build dots */
  slides.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "testi-dot" + (i === 0 ? " active" : "");
    d.addEventListener("click", () => go(i));
    dots.appendChild(d);
  });

  function go(idx) {
    cur = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots
      .querySelectorAll(".testi-dot")
      .forEach((d, i) => d.classList.toggle("active", i === cur));
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => go(cur + 1), 5000);
  }

  prev.addEventListener("click", () => go(cur - 1));
  next.addEventListener("click", () => go(cur + 1));
  resetTimer();

  /* touch/swipe support */
  let startX = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );
  track.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) go(dx < 0 ? cur + 1 : cur - 1);
  });
})();

/* ────────────────────────────────────────────────
   THEME TOGGLE
──────────────────────────────────────────────── */
const themeBtn = document.getElementById("btn-theme");

function applyTheme(light) {
  document.body.classList.toggle("light", light);
  themeBtn.innerHTML = light
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem("lm-theme", light ? "light" : "dark");
}
applyTheme(localStorage.getItem("lm-theme") === "light");
themeBtn.addEventListener("click", () =>
  applyTheme(!document.body.classList.contains("light")),
);

/* ────────────────────────────────────────────────
   MOBILE MENU
──────────────────────────────────────────────── */
const mobNav = document.getElementById("mob-nav");
const burger = document.getElementById("nav-burger");
const mClose = document.getElementById("mob-close");

function openMenu() {
  mobNav.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobNav.classList.remove("open");
  document.body.style.overflow = "";
}

burger.addEventListener("click", openMenu);
mClose.addEventListener("click", closeMenu);
document
  .querySelectorAll(".mob-a")
  .forEach((a) => a.addEventListener("click", closeMenu));
mobNav.addEventListener("click", (e) => {
  if (e.target === mobNav) closeMenu();
});

/* ────────────────────────────────────────────────
   SMOOTH ANCHOR SCROLL
──────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const tgt = document.querySelector(a.getAttribute("href"));
    if (tgt) {
      e.preventDefault();
      tgt.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ────────────────────────────────────────────────
   TOAST HELPER
──────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3200);
}

/* ────────────────────────────────────────────────
   NEWSLETTER
──────────────────────────────────────────────── */
document.getElementById("nl-btn").addEventListener("click", () => {
  const inp = document.getElementById("nl-email");
  const val = inp.value.trim();
  if (val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    inp.value = "";
    inp.placeholder = "✓ Subscribed!";
    showToast("You're on the list! Deals incoming 🎉");
    setTimeout(() => {
      inp.placeholder = "your@email.com";
    }, 3000);
  } else {
    inp.style.borderColor = "rgba(201,98,18,.7)";
    setTimeout(() => {
      inp.style.borderColor = "";
    }, 1500);
    showToast("Please enter a valid email address.");
  }
});
