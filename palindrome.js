const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter a string?`, str => {
    // console.log(`Hi ${name}!`);
    let len = str.length;
    let v = 0;
    for(let j =0;j<len/2;j++){
        if(str[j] !== str[len-j-1]){
            console.log("Not a Palindrome")
            v =1;
            break;

        }

    }
    if(v === 0){
        console.log("Palindrome")
    }

    readline.close();
  });