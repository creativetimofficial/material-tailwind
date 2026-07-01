import { readdirSync, statSync } from "fs";
import path from "path";
export default function getDirectoriesAndFile(dir: string) {
  if (path.basename(dir) === ".DS_Store") return null;
  return readdirSync(dir)
    .map((file) => {
      const filePath = path.join(dir, file);
      if (path.extname(file) === ".mdx") {
        return [dir, file.replace(".mdx", "")];
      } else if (statSync(filePath).isDirectory()) {
        return getDirectoriesAndFile(filePath);
      } else {
        return undefined;
      }
    })
    .filter((dir) => dir !== undefined && dir !== null);
}
