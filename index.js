const fs = require('fs');

// function mergerApp(fileOne, fileTwo, newFileName) {
//   fs.readFile('people1.json', 'utf8', (err, data) => {
//     const people1 = JSON.parse(data);
//
//     fs.readFile('people1.json', 'utf8', (err, data) => {
//       const people2 = JSON.parse(data);
//       const mergeData = people1.concat(people2).sort();
//
//       fs.writeFile(`${newFileName}.txt`, mergeData, () => {
//         console.log('The file has been saved successfully!');
//       });
//     });
//   });
// };
//
// function mergerApp(fileOne, fileTwo, newFileName) {
//   const people1 = fs.readFileSync('people1.json', 'utf8', (err, data) => {
//     return data;
//   });
//
//   const people2 = fs.readFileSync('people2.json', 'utf8', (err, data) => {
//     return data;
//   });
//
//   const formattedData1 = JSON.parse(people1);
//   const formattedData2 = JSON.parse(people2);
//   const mergeData = formattedData1.concat(formattedData2).sort();
//
//   fs.writeFileSync(`${newFileName}.txt`, formattedData1.concat(formattedData2).sort(), () => {
//     console.log('The file has been saved successfully!');
//   });
// };
//
// mergerApp('people1.json', 'people2.json', 'peopleComplete');

// //Bonus
fs.readdir('./directory', function( err, data) {
  console.log(data)
});
