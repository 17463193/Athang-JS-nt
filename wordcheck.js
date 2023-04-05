const prompt = require("prompt-sync")();

function vowels() {
    let count = 0;
    let word1 = prompt("Enter Word1:\t");
    let word2 = prompt("Enter Word2:\t");
     let a = 4;
    // let consonant = 0;

  
         
        for(let i = 0; i <= 4; i++) {
           if (word1[i] == word2[a] || word1[i] == word2[a-2] || word1[i] == word2[a-3] ||word1[i] == word2[a-4]) {
               count++;
               
           }
          
            // else if(consonant[i]!='a' || consonant[i]!='e'|| consonant[i]!='i'||consonant[i]!='o'||consonant[i]!='u'){
            //     consonant++;
            // }
        }
      
        
        console.log('Similar word:\t'+count);
        // console.log(word);

    }

vowels();






