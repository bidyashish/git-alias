/* 
  Node spawn to run shell script
*/
const { exec } = require("child_process");
exec("sh  git-alias.sh", (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`
    Thanks for installing git-alias ! You can use short command for widely used git commands

    gc = git checkout
    example "gc YourBranchName" 

    gp="git pull"
    example "gp YourBranchName" 

    gps="git push"
    example "gps"  
    
    `);
  }
});
