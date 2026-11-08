function applyClientContent() {
  const alias = new URLSearchParams(window.location.search).get("id");

  const client = Object.prototype.hasOwnProperty.call(clientsDB, alias)
    ? clientsDB[alias]
    : clientsDB.base;

  if (client.name) {
    document.title = `Уборка и вывоз снега спецтехникой для бизнеса | ${client.name}`;
  }

  document.querySelectorAll(".dyn-name").forEach((element) => {
    element.textContent = client.name;
  });

  document.querySelectorAll(".dyn-phone").forEach((element) => {
    element.textContent = client.phone;
  });

  if (client.nds === false) {
    document.querySelectorAll(".dyn-nds").forEach((element) => {
      element.style.display = "none";
    });
  }

  const heroImgEl = document.querySelector(".hero-visual img");
  if (heroImgEl && client.heroImg) {
    heroImgEl.src = client.heroImg.includes("/")
      ? client.heroImg
      : `assets/img/clients/${client.heroImg}`;
  }

  const priceFormatter = new Intl.NumberFormat("ru-RU");

  Object.entries(client.equipment).forEach(([key, equipment]) => {
    const card = document.getElementById(`equip-${key}`);
    if (!card) return;

    if (equipment === false) {
      card.style.display = "none";
      return;
    }

    const hourPrice = card.querySelector(".dyn-price-hour");
    const shiftPrice = card.querySelector(".dyn-price-shift");
    const titleEl = card.querySelector("h3");
    const descEl = card.querySelector(".card-desc");
    const specsEl = card.querySelector("ul");

    if (hourPrice && equipment.priceHour != null) {
      hourPrice.textContent = priceFormatter.format(equipment.priceHour);
    }
    if (shiftPrice && equipment.priceShift != null) {
      shiftPrice.textContent = priceFormatter.format(equipment.priceShift);
    }
    if (titleEl && equipment.title) {
      titleEl.textContent = equipment.title;
    }
    if (descEl && equipment.desc) {
      descEl.textContent = equipment.desc;
    }
    if (specsEl && Array.isArray(equipment.specs)) {
      specsEl.innerHTML = equipment.specs.map((item) => `<li>${item}</li>`).join("");
    }
  });

  const visibleCards = [...document.querySelectorAll(".equipment")].filter(
    (card) =>
      card.getClientRects().length > 0 &&
      getComputedStyle(card).visibility !== "hidden"
  );

  visibleCards.forEach((card, index) => {
    const number = card.querySelector(".equip-number");
    if (number) {
      number.textContent = String(index + 1).padStart(2, "0");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyClientContent);
} else {
  applyClientContent();
}