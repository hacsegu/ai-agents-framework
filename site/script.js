const state = {
  data: null,
  activeCategory: "all",
  query: "",
};

async function loadData() {
  const res = await fetch("../data.json");
  state.data = await res.json();
  render();
}

function buildFilters() {
  const filters = document.getElementById("filters");
  const catButtons = state.data.categories.map(
    (c) => `<button class="filter-btn" data-cat="${c.id}">${c.icon} ${c.title}</button>`
  );
  filters.innerHTML =
    `<button class="filter-btn active" data-cat="all">Todas</button>` + catButtons.join("");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    state.activeCategory = btn.dataset.cat;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
}

function matchesQuery(resource, q) {
  if (!q) return true;
  const haystack = [resource.title, resource.description, ...(resource.tags || [])]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q.toLowerCase());
}

function render() {
  const container = document.getElementById("results");
  const { resources, categories } = state.data;

  const filtered = resources.filter((r) => {
    const catOk = state.activeCategory === "all" || r.category === state.activeCategory;
    return catOk && matchesQuery(r, state.query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">No se encontraron recursos. Prueba otro termino o filtro.</div>`;
    return;
  }

  const groups =
    state.activeCategory !== "all"
      ? [categories.find((c) => c.id === state.activeCategory)]
      : categories;

  container.innerHTML = groups
    .map((cat) => {
      const items = filtered.filter((r) => r.category === cat.id);
      if (items.length === 0) return "";
      return `
        <section class="category-group">
          <h2 class="category-title">${cat.icon} ${cat.title} <span class="count">(${items.length})</span></h2>
          <div class="grid">
            ${items.map(cardHtml).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function cardHtml(r) {
  const tags = (r.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
  return `
    <article class="card">
      <a class="title-link" href="${r.link}" target="_blank" rel="noopener noreferrer">${r.title}</a>
      <p>${r.description}</p>
      <div class="tags">${tags}</div>
    </article>
  `;
}

document.getElementById("search").addEventListener("input", (e) => {
  state.query = e.target.value;
  render();
});

loadData().then(buildFilters);
