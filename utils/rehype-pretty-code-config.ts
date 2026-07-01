export const rehypePrettyCodeConfig = {
  theme: "github-dark",
  bypassInlineCode: true,

  onVisitLine(node) {
    if (!node.children?.length) {
      node.children = [{ type: "text", value: " " }];
    }
  },

  onVisitHighlightedLine(node) {
    const props = (node.properties ??= {});
    props.className = [].concat(props.className ?? [], "highlighted");
  },

  onVisitHighlightedChars(node) {
    const props = (node.properties ??= {});
    props.className = [].concat(props.className ?? [], "word");
  },

  keepBackground: false,
};

export default rehypePrettyCodeConfig;

