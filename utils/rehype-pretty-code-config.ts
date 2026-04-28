export const rehypePrettyCodeConfig = {
  theme: "github-dark",
  bypassInlineCode: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = [...(node.properties.className ?? []), "highlighted"];
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ["word"];
  },
  keepBackground: false,
};

export default rehypePrettyCodeConfig;
