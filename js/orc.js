var Translator = (function() {

    let toBeDone = document.getElementById("toBeTranslated").value;
    console.log(toBeDone);
    let sentenceArray = toBeDone.toLowerCase().split(" ");
    console.log(sentenceArray);
    let newSentence = [];

    return {

        addOrc: function() {
            sentenceArray.forEach(function(item){
                if(item == "merry"){
                    newSentence.push('Merry');
                }else if(item == "christmas"){
                    newSentence.push('Chrixmus ');
                }else if(item == 'and'){
                    newSentence.push('an');
                }else if(item == "happy"){
                    newSentence.push("‘Appy");
                }else if(item == 'new'){
                    newSentence.push('Nyoo ');
                }else if(item == 'year'){
                    newSentence.push('Yea');
                }

                return newSentence.join(" ");
            });

            let output_div = document.querySelector('#output-language');
            output_div.innerText = newSentence.join(' ')
            let speak = document.querySelector('#text-speak')
            let speak_att = document.createAttribute('onclick')
            speak_att.value = responsiveVoice.speak(output_div.innerText, 'Welsh Male', {pitch: -10}, {rate: -.5})
            speat.setAttributeNode(speak_att)
        }


    }


})();