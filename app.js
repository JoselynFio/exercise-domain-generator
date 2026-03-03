
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com']
   
for (let index = 0; index < pronoun.length; index++){
    
    for (let w = 0; w < adj.length; w++){
    
        for ( let x = 0; x < noun.length; x++){ 
    
            for ( let h = 0; h < extension.length; h++){    
    
                console.log (pronoun[index] + adj[w] + noun[x] + extension[h]);
 
            }

        }

    }

}