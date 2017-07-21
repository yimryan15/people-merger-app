const fs = require('fs');

//read first file
fs.readFile('people1.json', 'utf8', (err, data) => {
  if (err) throw err;
  let people1 = JSON.parse(data);

  //  read second file
  fs.readFile('people2.json', 'utf8', (err, data) => {
    if (err) throw err;
    let people2 = JSON.parse(data);

    //  merge the data set
    let finalData = people1.concat(people2).sort();

      //  write the file
      fs.writeFile('peopleComplete.txt', finalData, (err) => {
        if (err) throw err;
        console.log('The file has been saved successfully!');
      });
  });
});
