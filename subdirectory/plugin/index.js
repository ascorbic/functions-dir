const { copy, ensureDir } = require('fs-extra');
const path = require('path');

exports.onBuild = async function onBuild({
    constants: {
      INTERNAL_FUNCTIONS_SRC,
    },
  }) {
    console.log({INTERNAL_FUNCTIONS_SRC});
      const functionDir = path.join(INTERNAL_FUNCTIONS_SRC, 'hello');
      await ensureDir(functionDir);
    await copy(path.resolve(__dirname, './hello'), functionDir);

  }