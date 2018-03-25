const fs = require('fs');
const path = process.argv[2];
const fileName = process.argv[3];

function mergerApp(fileOne, fileTwo, newFileName) {
  fs.readFile('people1.json', 'utf8', (err, data) => {
    const people1 = JSON.parse(data);

    fs.readFile('people1.json', 'utf8', (err, data) => {
      const people2 = JSON.parse(data);
      const mergeData = people1.concat(people2).sort();

      fs.writeFile(`${newFileName}.txt`, mergeData, () => {
        console.log('The file has been saved successfully!');
      });
    });
  });
};

//synchchronous
function mergerApp(fileOne, fileTwo, newFileName) {
  const people1 = fs.readFileSync('people1.json', 'utf8', (err, data) => {
    return data;
  });

  const people2 = fs.readFileSync('people2.json', 'utf8', (err, data) => {
    return data;
  });

  const formattedData1 = JSON.parse(people1);
  const formattedData2 = JSON.parse(people2);
  const mergeData = formattedData1.concat(formattedData2).sort();

  fs.writeFileSync(`${newFileName}.txt`, formattedData1.concat(formattedData2).sort(), () => {
    console.log('The file has been saved successfully!');
  });
};

mergerApp('people1.json', 'people2.json', 'peopleComplete');

//Bonus
function mergePeople(path) {
  const files = fs.readdirSync(path);
  const mergedPeople = [];
  files.forEach(function(file) {
    const data = JSON.parse(fs.readFileSync(`${path}/${file}`, 'utf8'));
    Array.prototype.push.apply(mergedPeople, data);

  });
  fs.writeFileSync(`${path}/${fileName}`, mergePeople.sort());
}

mergePeople();
