(() => {
  const langSelect = document.getElementById("lang-select");
  const exportBtn = document.getElementById("export-btn");

  // Build language options from data keys
  Object.keys(CV_DATA).forEach((key) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key.toUpperCase();
    langSelect.appendChild(opt);
  });

  // Auto-detect language
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = CV_DATA[browserLang] ? browserLang : "en";
  langSelect.value = defaultLang;

  function updateLang(lang) {
    renderCV(lang);
    exportBtn.textContent = CV_DATA[lang].ui.exportPdf;
  }

  langSelect.addEventListener("change", (e) => updateLang(e.target.value));
  exportBtn.addEventListener("click", () => window.print());

  // Initial render
  updateLang(defaultLang);
})();
