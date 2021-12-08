const fs = require('fs/promises');

const read = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
};

const contentFunc = async (path, content) => {
  try {
    const isContent = await read(path);
    isContent.push(content);

    await fs.writeFile(path, JSON.stringify(isContent));

    return content;
  } catch (e) {
    return null;
  }
};

module.exports = { read, contentFunc };
