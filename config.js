// ============================================================
//  Site configuration — edit this file to update the whole site
// ============================================================

const SITE = {
  name: "Declan McGrath",
  // Short line under your name on the home page
  tagline: "PhD student in Pure Mathematics, King's College London",

  // Set to "" to hide
  email: "dfm25@ic.ac.uk",

  // Set to "" to hide a link
  github: "declanfmcgrath",        // just the username
  arxiv: "",                        // e.g. "https://arxiv.org/a/mcgrath_d_1"
  linkedin: "",                     // full URL, or ""

  // ------------------------------------------------------------
  //  Toggle sections on/off here. Set a section to false and it
  //  disappears from the navigation on every page. (The page file
  //  still exists, so you can switch it back on at any time.)
  // ------------------------------------------------------------
  sections: {
    research: true,   // part of the home page
    papers:   false,  // papers.html — switch on with your first preprint
    notes:    true,   // notes.html
    teaching: false,  // teaching.html — switch on once you start TAing
    cv:       true,   // cv.html
    misc:     true,   // misc.html — anything that fits nowhere else
  },
};

// Applies your saved light/dark choice before the page draws — leave as is.
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) {}
})();
