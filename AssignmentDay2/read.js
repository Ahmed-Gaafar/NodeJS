 var fs = require('fs');
//  var content = fs.readFileSync('./greet.txt', 'utf8')
//  console.log(content)


//////////////
// fs.rename('test.txt', 'info.txt', () => {
//     console.log("\nFile Renamed!\n");

//   });


////////////////////////

fs.rm('./info.txt',()=>{
  console.log("File deleted");
})
