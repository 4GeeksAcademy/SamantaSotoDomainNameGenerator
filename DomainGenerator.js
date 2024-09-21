let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];

for ( let pronoun = 0; pronoun < pronouns.length; pronoun++ ){
  for( let adj = 0; adj < adjs.length; adj++ ){
    for (let noun = 0; noun < nouns.length; noun++) {
      console.log(pronouns[pronoun]+adjs[adj]+nouns[noun]+".com");
      
    }
  }
}