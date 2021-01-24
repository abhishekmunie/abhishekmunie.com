import { promises as fs } from 'fs';
import { basename, dirname, resolve as resolvePath, relative as relativePath } from 'path';

import * as replaceExt from 'replace-ext';
import * as imagemin from 'imagemin';
import * as imageminWebp from 'imagemin-webp';

const srcDir = 'src/assets/images';
const dstDir = 'src/assets/webp';

const webpPlugin = imageminWebp({
  // lossless: true,
  method: 6
});

/**
 * Recursively walk a directory asynchronously and yeild file names (with full path).
 *
 * @param path Folder name you want to recursively process
 * @param filter Optional filter to specify which files to include,
 *   e.g. for json files: (f: string) => /.json$/.test(f)
 */
async function* walk(path: string, filter?: (file: string) => boolean) {
  let stat;
  try {
    stat = await fs.stat(path);
  } catch (error) {
    throw error;
  }

  if (!stat.isDirectory()) {
    if (typeof filter === 'undefined' || (filter && filter(path))) {
      yield path;
    }
    return;
  }

  let children;
  try {
    children = await fs.readdir(path);
  } catch (error) {
    throw error;
  }

  for (const child of children) {
    const childPath = resolvePath(path, child);
    for await (const res of walk(childPath, filter)) {
      yield res;
    }
  }
}

async function convertImage(filepath: string) {
  const file = relativePath(srcDir, filepath)
  const dstPath = resolvePath(dstDir, replaceExt(file, '.webp'));

  try {
    console.log(dstPath);
    await fs.stat(dstPath);

    console.log(`${file}.webp already exists, skipping...`);
    return;
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(error);
      return;
    }
  }

  console.log(`Converting ${file}...`);

  let convertedFile;
  try {
    convertedFile = await imagemin([filepath], {
      destination: dirname(dstPath),
      plugins: [
        webpPlugin
      ]
    });
  } catch (error) {
    throw error;
  }

  return convertedFile;
}

function walkFilter(file: string): boolean {
  return ! /\/.DS_Store$/.test(file);
}

(async () => {
  try {
    for await (const filepath of walk(srcDir, walkFilter)) {
      convertImage(filepath)
        .then((convertedFile: string) => {
          if (convertedFile) {
            console.log('Converted: ', convertedFile);
          }
        })
        // => [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
        .catch((error) => console.error(error));
    }
  } catch (error) {
    console.error(error);
  }
})();
