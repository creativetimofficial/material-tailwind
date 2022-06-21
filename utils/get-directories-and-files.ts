import { readdirSync } from "fs";
import path from "path";

export default function getDirectoriesAndFile(dir: string) {
  return readdirSync(dir)
    .map((file) => {
      if (path.extname(file) === ".mdx") {
        return [dir, file.replace(".mdx", "")];
      } else {
        return getDirectoriesAndFile(path.join(dir, file));
      }
    })
    .filter((dir) => dir !== undefined);
}
