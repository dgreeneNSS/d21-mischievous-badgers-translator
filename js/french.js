
var Translator = (function() {

    let toBeDone = document.getElementById("toBeTranslated").value;
    console.log(toBeDone);
    let sentenceArray = toBeDone.toLowerCase().split(" ");
    console.log(sentenceArray);
    let newSentence = [];

    return {

        addFrench: function() {
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

            return newSentence.join(" ");
        });

            let output_div = document.querySelector('#output-language');
            output_div.innerText = newSentence.join(' ')
            let speak = document.querySelector('#text-speak')
            let speak_att = document.createAttribute('onclick')
            speak_att.value = responsiveVoice.speak(output_div.innerText, 'French Female', {pitch: 1}, {rate: 0})
            speak.setAttributeNode(speak_att)
    }
        
    };

})();

