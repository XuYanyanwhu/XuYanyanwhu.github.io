(function () {
  const config = window.teacherHomeConfig;

  const bySelector = (selector) => document.querySelector(selector);
  const create = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
  };
  const text = (tag, value, className) => {
    const element = create(tag, className);
    element.textContent = value;
    return element;
  };
  const html = (tag, value, className) => {
    const element = create(tag, className);
    element.innerHTML = value;
    return element;
  };

  function renderNav(items) {
    const nav = bySelector(".nav");
    items.forEach((item) => {
      const link = text("a", item.label);
      link.href = item.href;
      nav.appendChild(link);
    });
  }

  function sectionHeading(eyebrow, title, compact) {
    const heading = create("div", `section-heading${compact ? " compact" : ""}`);
    heading.append(text("p", eyebrow, "eyebrow"), text("h2", title));
    return heading;
  }

  function tagGroup(items, className) {
    const wrapper = create("div", className);
    items.forEach((item) => wrapper.appendChild(text("span", item)));
    return wrapper;
  }

  function orderedList(items, className, useHtml) {
    const list = create("ol", `detail-list ${className}`);
    items.forEach((item) => list.appendChild(useHtml ? html("li", item) : text("li", item)));
    return list;
  }

  function unorderedList(items, className) {
    const list = create("ul", className);
    items.forEach((item) => list.appendChild(text("li", item)));
    return list;
  }

  function renderTable(columns, rows, className) {
    const wrapper = create("div", className);
    const table = create("table");
    const thead = create("thead");
    const headRow = create("tr");
    columns.forEach((column) => headRow.appendChild(text("th", column)));
    thead.appendChild(headRow);

    const tbody = create("tbody");
    rows.forEach((row) => {
      const tableRow = create("tr");
      row.forEach((cell) => tableRow.appendChild(text("td", cell)));
      tbody.appendChild(tableRow);
    });

    table.append(thead, tbody);
    wrapper.appendChild(table);
    return wrapper;
  }

  function renderHero(hero) {
    const section = create("section", "hero");
    const photo = create("div", "hero-photo");
    const image = create("img");
    image.src = hero.photo;
    image.alt = hero.photoAlt;
    photo.appendChild(image);

    const content = create("div", "hero-content");
    content.append(
      text("p", hero.eyebrow, "eyebrow"),
      text("h1", hero.name),
      text("p", hero.title, "title-line"),
      html("p", hero.affiliation.join("<br>"), "affiliation"),
      tagGroup(hero.tags, "tags"),
      text("p", hero.intro, "intro")
    );

    const actions = create("div", "hero-actions");
    hero.actions.forEach((action) => {
      const link = text("a", action.label, action.style);
      link.href = action.href;
      actions.appendChild(link);
    });
    content.appendChild(actions);

    section.append(photo, content);
    return section;
  }

  function renderProfile(profile) {
    const section = create("section", "section two-column");
    section.id = profile.id;
    const panel = create("div", "content-panel");
    profile.paragraphs.forEach((paragraph) => panel.appendChild(text("p", paragraph)));
    panel.appendChild(tagGroup(profile.badges, "badges"));
    section.append(sectionHeading(profile.eyebrow, profile.title), panel);
    return section;
  }

  function renderResearch(research) {
    const section = create("section", "section");
    section.id = research.id;
    const grid = create("div", "research-grid");
    research.items.forEach((item, index) => {
      const article = create("article", "research-card");
      article.append(
        text("span", String(index + 1).padStart(2, "0"), "card-index"),
        text("h3", item.title),
        text("p", item.description),
        tagGroup(item.tags, "mini-tags")
      );
      grid.appendChild(article);
    });
    section.append(sectionHeading(research.eyebrow, research.title, true), grid);
    return section;
  }

  function renderProjects(projects) {
    const section = create("section", "section split");
    section.id = projects.id;
    section.append(sectionHeading(projects.eyebrow, projects.title), orderedList(projects.items, "project-list"));
    return section;
  }

  function renderPublications(publications) {
    const section = create("section", "section");
    section.id = publications.id;
    section.append(
      sectionHeading(publications.eyebrow, publications.title, true),
      orderedList(publications.items, "publication-detail-list", true)
    );
    return section;
  }

  function renderAchievements(achievements) {
    const section = create("section", "section awards-section");
    section.id = achievements.id;
    const groups = create("div", "achievement-groups");

    const book = create("article");
    book.append(text("h3", achievements.book.title), text("p", achievements.book.text));

    const patents = create("article");
    patents.append(text("h3", achievements.patents.title), orderedList(achievements.patents.items, "patent-list"));

    const awards = create("article");
    awards.append(text("h3", achievements.awards.title), orderedList(achievements.awards.items, "award-list"));

    groups.append(book, patents, awards);
    section.append(sectionHeading(achievements.eyebrow, achievements.title, true), groups);
    return section;
  }

  function renderStudents(students) {
    const section = create("section", "section students-section");
    section.id = students.id;

    const copy = create("div", "students-copy");
    copy.append(text("p", students.eyebrow, "eyebrow"), text("h2", students.title), text("p", students.description));

    const card = create("div", "students-card");
    card.append(
      text("h3", students.directionTitle),
      unorderedList(students.directions),
      text("h3", students.alumni.title, "alumni-title"),
      renderTable(students.alumni.columns, students.alumni.rows, "alumni-table-wrap"),
      text("p", students.mailFormat, "mail-format")
    );

    section.append(copy, card);
    return section;
  }

  function renderContact(contact) {
    const section = create("section", "section contact-section");
    section.id = contact.id;
    const head = create("div");
    head.append(text("p", contact.eyebrow, "eyebrow"), text("h2", contact.title));

    const address = create("address", "contact-card");
    const email = text("a", contact.email);
    email.href = `mailto:${contact.email}`;
    const source = text("a", contact.source.label);
    source.href = contact.source.href;
    source.target = "_blank";
    source.rel = "noreferrer";
    address.append(email);
    if (contact.tel) address.appendChild(text("span", `Tel：${contact.tel}`));
    address.append(text("span", `地址：${contact.address}`), source);

    section.append(head, address);
    return section;
  }

  function renderFooter(footer) {
    const container = bySelector(".site-footer");
    container.append(text("span", footer.updated), text("span", footer.note));
  }

  document.title = config.page.title;
  const description = bySelector('meta[name="description"]');
  if (description) description.content = config.page.description;

  renderNav(config.nav);
  const main = bySelector("main");
  main.append(
    renderHero(config.hero),
    renderProfile(config.profile),
    renderResearch(config.research),
    renderProjects(config.projects),
    renderPublications(config.publications),
    renderAchievements(config.achievements),
    renderStudents(config.students),
    renderContact(config.contact)
  );
  renderFooter(config.footer);
})();
