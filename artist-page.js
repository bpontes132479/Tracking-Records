const createPageElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
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

const renderArtistPage = () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("artist");
  const artists = window.trackingArtists || [];
  const artist = artists.find((item) => item.slug === slug) || artists[0];

  if (!artist) return;

  document.title = `${artist.name} | Tracking Records`;
  document.querySelector("[data-artist-name]").textContent = artist.name;
  document.querySelector("[data-artist-genre]").textContent = artist.genre;
  document.querySelector("[data-artist-bio]").textContent = artist.bio;

  const image = document.querySelector("[data-artist-image]");
  image.src = artist.asset;
  image.alt = artist.name;

  const storyContainer = document.querySelector("[data-artist-story]");
  artist.story.forEach((paragraph, index) => {
    const article = createPageElement("article", "story-panel reveal");
    article.append(
      createPageElement("span", "story-index", String(index + 1).padStart(2, "0")),
      createPageElement("p", "", paragraph)
    );
    storyContainer.append(article);
  });

  const productContainer = document.querySelector("[data-artist-products]");
  artist.products.forEach((product, index) => {
    const card = createPageElement("article", "artist-product-card reveal");
    const visual = createPageElement("div", "artist-product-visual");
    visual.append(createPageElement("span", "merch-number", String(index + 1).padStart(2, "0")));

    if (product.image) {
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;
      image.loading = "lazy";
      visual.append(image);
    } else {
      visual.append(createPageElement("span", "media-label", product.type));
    }

    const copy = createPageElement("div", "artist-product-copy");
    copy.append(
      createPageElement("span", "card-kicker", product.price),
      createPageElement("h3", "", product.title),
      createPageElement("p", "", product.description)
    );

    card.append(visual, copy);
    productContainer.append(card);
  });
};

renderArtistPage();
setupRevealAnimation();
setupNavigation();
