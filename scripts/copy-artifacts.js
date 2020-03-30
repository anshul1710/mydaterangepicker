/**
 * Copy files to 'dist/angular-mydatepicker' folder.
 */
const fs = require('fs');
const path = require('path');
const artifacts = ['LICENSE', 'FONT-LICENSE', 'CHANGELOG.md', 'README.md'];

artifacts.forEach(file => {
  let from = path.resolve(__dirname, '..', './', file);
  let to = path.resolve(__dirname, '..', 'dist/mydaterangepicker/', file);

  fs.readFile(from, 'utf-8', (err, data) => {
    if (err) {
      return;
    }

    fs.writeFile(to, data, (err) => {
      if (err) {
        return;
      }
    });
    console.log('File "' + file + '" copied to "dist/mydaterangepicker" folder.')
  });
});
