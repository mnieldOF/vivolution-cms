export const normaliseTitle = (title) =>
  (title || "").toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();

export const slugifyTitle = (title) =>
  normaliseTitle(title)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
