const festivals = [
  { country: "Portugal", title: "Neon Pulse Lisbon", style: "Festival de EDM" },
  { country: "Portugal", title: "Luz Azul", style: "Festival de Pop" },
  { country: "Espanha", title: "Luz y Ruido", style: "Festival de EDM / Techno" },
  { country: "Espanha", title: "Pop del Sol", style: "Festival de Pop" },
  { country: "Espanha", title: "Neon Pulse Valência", style: "Festival de EDM" },
  { country: "França", title: "Coeur Électrique", style: "Festival de EDM / Pop" },
  { country: "França", title: "Neon Pulse Paris", style: "Festival de EDM" },
];

const services = [
  {
    icon: "PR",
    title: "Produção Musical",
    text: "Direção de sessões, gravação, mistura e apoio técnico para lançamentos com identidade própria.",
  },
  {
    icon: "FN",
    title: "Financiamento",
    text: "Apoio direto a criadores de EDM, Hip-Hop, Pop e Techno para acelerar projetos promissores.",
  },
  {
    icon: "EQ",
    title: "Equipamento Profissional",
    text: "Acesso a tecnologia atualizada, tratamento acústico e ferramentas de alta qualidade.",
  },
  {
    icon: "AR",
    title: "Desenvolvimento Artístico",
    text: "Acompanhamento criativo para construir repertório, imagem, narrativa e presença ao vivo.",
  },
  {
    icon: "EV",
    title: "Produção de Eventos",
    text: "Organização e financiamento de festivais que aproximam novos artistas de novos públicos.",
  },
];

const offers = [
  {
    title: "Estúdio criativo",
    text: "Ambiente preparado para compor, experimentar, gravar e transformar ideias em maquetes fortes.",
  },
  {
    title: "Mentoria especializada",
    text: "Profissionais de música, produção e estratégia acompanham cada artista de forma personalizada.",
  },
  {
    title: "Infraestrutura cultural",
    text: "Ligação entre gravadora, festivais e merchandising para criar oportunidades dentro e fora do palco.",
  },
  {
    title: "Plano de lançamento",
    text: "Organização de prioridades, materiais e narrativa para comunicar cada projeto com impacto.",
  },
];

const values = [
  {
    title: "Multicultural",
    text: "Todos têm uma oportunidade justa, independentemente da origem.",
  },
  {
    title: "Acolhedora",
    text: "Ninguém é posto de parte; todos merecem divertir-se com aquilo que fazem.",
  },
  {
    title: "Motivadora",
    text: "Impulsionamos diariamente os artistas para seguirem em frente.",
  },
  {
    title: "Confiante",
    text: "Confiamos no potencial dos artistas para lançarem o próximo hit.",
  },
];

const artists = window.trackingArtists || [];

const merch = [
  {
    title: "Caneca Tracking Records",
    type: "Canecas",
    price: "EUR 18",
    description: "Caneca terracota para café, estúdio e dias de criação.",
    photos: [
      "assets/brand-caneca-ordered-01.png",
      "assets/brand-caneca-ordered-02.png",
      "assets/brand-caneca-ordered-03.png",
      "assets/brand-caneca-ordered-04.png",
    ],
  },
  {
    title: "Hoodie Make Some Noise",
    type: "Hoodies",
    price: "EUR 72",
    description: "Hoodie confortável com visual forte para concertos e rua.",
    photos: [
      "assets/brand-hoodie-ordered-01.png",
      "assets/brand-hoodie-ordered-02.png",
      "assets/brand-hoodie-ordered-03.png",
      "assets/brand-hoodie-ordered-04.png",
    ],
  },
  {
    title: "Tote Bag Track",
    type: "Tote bags",
    price: "EUR 26",
    description: "Tote leve com ilustração musical para uso diário.",
    photos: [
      "assets/brand-tote-ordered-01.png",
      "assets/brand-tote-ordered-02.png",
      "assets/brand-tote-ordered-03.png",
      "assets/brand-tote-ordered-04.png",
    ],
  },
];

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const renderFestivals = () => {
  const container = document.querySelector("[data-festivals]");

  festivals.forEach((festival) => {
    const article = createElement("article", "festival-card");
    article.append(
      createElement("span", "card-kicker", festival.country),
      createElement("h4", "", festival.title),
      createElement("p", "", festival.style)
    );
    container.append(article);
  });
};

const renderServices = () => {
  const container = document.querySelector("[data-services]");

  services.forEach((service) => {
    const article = createElement("article", "service-card reveal");
    article.append(
      createElement("span", "icon-badge", service.icon),
      createElement("h3", "", service.title),
      createElement("p", "", service.text)
    );
    container.append(article);
  });
};

const renderOffers = () => {
  const container = document.querySelector("[data-offers]");

  offers.forEach((offer, index) => {
    const article = createElement("article", "offer-item");
    article.append(
      createElement("span", "offer-number", `0${index + 1}`),
      createElement("h3", "", offer.title),
      createElement("p", "", offer.text)
    );
    container.append(article);
  });
};

const renderValues = () => {
  const container = document.querySelector("[data-values]");

  values.forEach((value, index) => {
    const article = createElement("article", "value-card reveal");
    article.append(
      createElement("span", "value-index", String(index + 1).padStart(2, "0")),
      createElement("h3", "", value.title),
      createElement("p", "", value.text)
    );
    container.append(article);
  });
};

const renderArtists = () => {
  const container = document.querySelector("[data-artists]");

  artists.forEach((artist, index) => {
    const article = createElement("a", "artist-card reveal");
    article.href = `artist.html?artist=${artist.slug}`;
    article.setAttribute("aria-label", `Abrir página de ${artist.name}`);

    const visual = createElement("div", "artist-visual");
    const image = document.createElement("img");
    image.src = artist.asset;
    image.alt = artist.name;
    image.loading = "lazy";

    visual.append(
      createElement("span", "artist-number", String(index + 1).padStart(2, "0")),
      image
    );

    const copy = createElement("div", "artist-copy");
    copy.append(
      createElement("span", "artist-genre", artist.genre),
      createElement("h3", "", artist.name),
      createElement("p", "", artist.bio)
    );

    article.append(visual, copy);
    container.append(article);
  });
};

const renderMerch = () => {
  const container = document.querySelector("[data-merch]");

  merch.forEach((item, index) => {
    const article = createElement("article", "merch-card reveal");
    const visual = createElement("div", "merch-visual");
    const photos = item.photos?.length ? item.photos : Array.from({ length: 4 });

    photos.forEach((photoPath, photoIndex) => {
      const photo = createElement("div", "product-photo");
      if (photoPath) {
        const image = document.createElement("img");
        image.src = photoPath;
        image.alt = `${item.title} - foto ${photoIndex + 1}`;
        image.loading = "lazy";
        photo.append(image);
      } else {
        photo.append(createElement("span", "", `${item.type} / Foto ${photoIndex + 1}`));
      }
      visual.append(photo);
    });

    visual.append(createElement("span", "merch-number", String(index + 1).padStart(2, "0")));

    const copy = createElement("div", "merch-copy");
    copy.append(
      createElement("span", "card-kicker", item.price),
      createElement("h3", "", item.title),
      createElement("p", "", item.description)
    );

    article.append(visual, copy);
    container.append(article);
  });
};

const setupRevealAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
};

const setupNavigation = () => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");

  toggle.addEventListener("click", () => {
    body.classList.toggle("menu-open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) body.classList.remove("menu-open");
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  });
};

const setupUnavailableModal = () => {
  const body = document.body;
  const modal = document.querySelector("[data-merch-modal]");
  const openButtons = document.querySelectorAll("[data-merch-modal-open]");
  const closeButton = document.querySelector("[data-merch-modal-close]");
  const modalKicker = document.querySelector("[data-modal-kicker]");
  let activeButton = null;

  if (!modal || !openButtons.length || !closeButton) return;

  const openModal = (button) => {
    activeButton = button;
    if (modalKicker) modalKicker.textContent = button.dataset.modalKicker || "Tracking Records";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    closeButton.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    activeButton?.focus();
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(button));
  });
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
};

renderFestivals();
renderServices();
renderOffers();
renderValues();
renderArtists();
renderMerch();
setupRevealAnimation();
setupNavigation();
setupUnavailableModal();
