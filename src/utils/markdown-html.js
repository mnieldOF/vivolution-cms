export const cleanMarkdownHtml = (html) => {
  if (!html) {
    return html;
  }

  return html
    .replace(
      /<p>\*\*([\s\S]*?)\s*\n\*\*\s*\n([\s\S]*?)<\/p>/g,
      "<p><strong>$1</strong></p>\n<p>$2</p>",
    )
    .replace(
      /<p>([^<]*?)\s*\n\*\*\s*\n([^<]*?)<\/p>\s*<p>([^<]*?)\*\*<\/p>/g,
      "<p>$1</p>\n<p><strong>$2</strong></p>\n<p><strong>$3</strong></p>",
    )
    .replace(
      /\n\*\*\s*\n([^*<]+?)\*\*/g,
      "</p>\n<p><strong>$1</strong></p>\n<p>",
    )
    .replace(
      /<p>\*\*([^<]*?)<\/p>\s*<p>([^<]*?)\*\*<\/p>/g,
      "<p><strong>$1</strong></p>\n<p><strong>$2</strong></p>",
    )
    .replace(/\*\*([^*<]+?)\s*\*\*/g, "<strong>$1</strong>");
};
