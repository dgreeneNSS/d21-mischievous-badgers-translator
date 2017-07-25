let toBeDone = document.getElementById("toBeTranslated").value;
console.log(toBeDone);
let sentenceArray = toBeDone.toLowerCase().split(" ");
console.log(sentenceArray);
let newSentence = [];
console.log( "newSentence", newSentence );

sentenceArray.forEach(function(item){
    if(item == "merry"){
        newSentence.push('joyeux');
    }else if(item == "christmas"){
        newSentence.push('noel');
    }else if(item == 'and'){
        newSentence.push('et');
    }else if(item == "happy"){
        newSentence.push('bonne');
    }else if(item == 'new'){
        newSentence.push('nouvelle');
    }else if(item == 'year'){
        newSentence.push('annee');
    }
});
