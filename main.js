(function () {
  var cfg = window.NEXUSDESK_CONFIG || {};
  var defaultUrl = cfg.stripeCheckoutUrl || "#";
  var plans = cfg.stripePlans || {};

  function resolveStripeUrl(plan) {
    var planUrl = plan && plans[plan];
    if (planUrl) return planUrl;
    return defaultUrl;
  }

  document.querySelectorAll("[data-stripe-cta]").forEach(function (el) {
    var plan = el.getAttribute("data-plan");
    var url = resolveStripeUrl(plan);
    el.setAttribute("href", url);
    if (url.indexOf("http") === 0) {
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      el.removeAttribute("rel");
    }
    el.removeAttribute("title");
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.hasAttribute("hidden");
      if (open) {
        mobileNav.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close menu");
      } else {
        mobileNav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  var faq = document.querySelector("[data-faq]");
  if (faq) {
    faq.querySelectorAll("details").forEach(function (detail) {
      detail.addEventListener("toggle", function () {
        if (!detail.open) return;
        faq.querySelectorAll("details").forEach(function (other) {
          if (other !== detail) other.removeAttribute("open");
        });
      });
    });
  }
})();
