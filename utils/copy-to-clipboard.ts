export function copyToClipboard(text) {
  return new Promise<void>((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;
      cb.writeText(text).then(resolve).catch(reject);
    } else {
      try {
        const body = document.querySelector("body");
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.readOnly = true;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        body?.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        body?.removeChild(textarea);
        resolve();
      } catch (e) {
        reject(e);
      }
    }
  });
}
export default copyToClipboard;
