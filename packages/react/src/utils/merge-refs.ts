export function mergeRefs(...refs: any[]) {
  return (node: any) => {
    for (const ref of refs) {
      if (ref) {
        Object.assign(ref, {
          current: node,
        });
      }
    }
  };
}

export default mergeRefs;
