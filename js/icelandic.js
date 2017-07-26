var Translator = (function(e) {

    let toBeDone = document.getElementById("toBeTranslated").value;
    console.log(toBeDone);
    let sentenceArray = toBeDone.toLowerCase().split(" ");
    console.log(sentenceArray);
    let newSentence = [];



        e.addIcelandic = function() {
            sentenceArray.forEach(function(item){
                if(item == "merry"){
                    newSentence.push("gleðileg");
                }else if(item == "christmas"){
                    newSentence.push("jól");
                }else if(item == 'and'){
                    newSentence.push('og');
                }else if(item == "happy"){
                    newSentence.push("farsælt");
                }else if(item == 'new'){
                    newSentence.push('komandi');
                }else if(item == 'year'){
                    newSentence.push('ár');
                }

                return newSentence.join(" ");
            });

            let output_div = document.querySelector('#output-language');
            output_div.innerText = newSentence.join(' ')
            let speak = document.querySelector('#text-speak')
            let speak_att = document.createAttribute('onclick')
            speak_att.value = responsiveVoice.speak(output_div.innerText, 'Icelandic Male', {pitch: 0}, {rate: 0})
            speak.setAttributeNode(speak_att)
        }

        return e
    }


)(Translator);