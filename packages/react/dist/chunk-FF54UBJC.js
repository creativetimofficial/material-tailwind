"use client";

// src/utils/merge-refs.ts
function mergeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (ref) {
        Object.assign(ref, {
          current: node
        });
      }
    }
  };
}
var merge_refs_default = mergeRefs;

export {
  mergeRefs,
  merge_refs_default
};
