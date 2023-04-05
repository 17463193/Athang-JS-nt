const prompt = require("prompt-sync")();

function vowels() {
    let count = 0;
    let word = prompt("Enter Word:\t");
    let consonant = 0;

  
         
        for(let i = 0; i < word.length; i++) {
           if (word[i] =='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u') {
               count++;
           }
          
            else if(consonant[i]!='a' || consonant[i]!='e'|| consonant[i]!='i'||consonant[i]!='o'||consonant[i]!='u'){
                consonant++;
            }
        }
        
        
        console.log(count);
        console.log(consonant);

    }

vowels();






