const fs = require('fs/promises');

const read = async (object) => {
  try {
    const body = await fs.readFile(object, 'utf8');
    return JSON.parse(body);
  } catch (e) {
    return null;
  }
};

const bodyFunc = async (object, body) => {
  try {
    const isBody = await read(object);
    isBody.push(body);

    await fs.writeFile(object, JSON.stringify(isBody));

    return body;
  } catch (e) {
    return null;
  }
};

const updateBody = async (object, body) => {
  try {
    await fs.writeFile(object, JSON.stringify(body));
    return body;
  } catch (e) {
    return null;
  }
};

module.exports = { read, bodyFunc, updateBody };
