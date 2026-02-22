function renderContact(contact) {
  return contact
    .map((item) => {
      const icon = `<span class="icon">${ICONS[item.icon] || ""}</span>`;
      const text = item.href
        ? `<a href="${item.href}" target="_blank" rel="noopener">${item.text}</a>`
        : `<span>${item.text}</span>`;
      return `<li class="contact-item">${icon}${text}</li>`;
    })
    .join("");
}

function renderLanguages(languages) {
  return languages
    .map(
      (lang) =>
        `<li class="language-item"><span class="language-flag">${lang.flag}</span> ${lang.name} – ${lang.level}</li>`
    )
    .join("");
}

function renderSkills(skills) {
  return skills
    .map(
      (skill) =>
        `<span class="skill-badge" style="background:${skill.color};color:${skill.textColor}">${skill.name}</span>`
    )
    .join("");
}

function renderTimeline(entries) {
  return entries
    .map(
      (entry) => `
      <div class="timeline-entry">
        <div class="timeline-left">
          <div class="timeline-period">${entry.period}</div>
          <div class="timeline-org">${entry.org}</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-title">${entry.title}</div>
          <div class="timeline-desc">${entry.description}</div>
        </div>
      </div>`
    )
    .join("");
}

function renderCV(lang) {
  const data = CV_DATA[lang];
  if (!data) return;

  document.documentElement.lang = lang;

  document.getElementById("sidebar").innerHTML = `
    <div class="photo-wrapper">
      <img class="photo" src="${data.meta.photo}" alt="${data.meta.name}">
    </div>

    <div class="sidebar-section">
      <h3>${data.ui.personalInfo}</h3>
      <ul class="contact-list">${renderContact(data.contact)}</ul>
    </div>

    <div class="sidebar-section">
      <h3>${data.ui.languages}</h3>
      <ul class="language-list">${renderLanguages(data.languages)}</ul>
    </div>

    <div class="sidebar-section">
      <h3>${data.ui.skills}</h3>
      <div class="skills-grid">${renderSkills(data.skills)}</div>
    </div>
  `;

  document.getElementById("content").innerHTML = `
    <h1 class="cv-name">${data.meta.name}</h1>
    <p class="cv-title">${data.meta.title}</p>

    <div class="content-section">
      <h2>${data.ui.profile}</h2>
      <p class="profile-text">${data.profile}</p>
    </div>

    <div class="content-section">
      <h2>${data.ui.education}</h2>
      ${renderTimeline(data.education)}
    </div>

    <div class="content-section">
      <h2>${data.ui.experience}</h2>
      ${renderTimeline(data.experience)}
    </div>
  `;
}
