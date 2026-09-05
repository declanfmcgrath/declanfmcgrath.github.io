// ============================================================
//  Site configuration — edit this file to update the whole site
// ============================================================

const SITE = {
  name: "Declan McGrath",
  // Short line under your name on the home page
  tagline: "PhD student in Pure Mathematics, King's College London",

  // Set to "" to hide; fill in when you're ready to show it publicly
  email: "",

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
    papers:   true,   // papers.html
    notes:    true,   // notes.html
    teaching: false,  // teaching.html — switch on once you start TAing
    cv:       true,   // cv.html
  },
};
