var Translator = (function(e) {

    let toBeDone = document.getElementById("toBeTranslated").value;
    console.log(toBeDone);
    let sentenceArray = toBeDone.toLowerCase().split(" ");
    console.log(sentenceArray);
    let newSentence = [];



        e.addOldEnglish = function() {
            sentenceArray.forEach(function(item){
                if(item == "merry"){
                    newSentence.push("M'rry");
                }else if(item == "christmas"){
                    newSentence.push('Noel');
                }else if(item == 'hwæðere'){
                    newSentence.push('an');
                }else if(item == "happy"){
                    newSentence.push("drêam");
                }else if(item == 'new'){
                    newSentence.push('Hæbbendeforward');
                }else if(item == 'year'){
                    newSentence.push('Yere');
                }

                return newSentence.join(" ");
            });

            let output_div = document.querySelector('#output-language');
            output_div.innerText = newSentence.join(' ');
            let speak = document.querySelector('#text-speak');
            let speak_att = document.createAttribute('onclick');
            speak_att.value = responsiveVoice.speak(output_div.innerText, 'UK English Female', {pitch: 0}, {rate: 0});
            speak.setAttributeNode(speak_att);
        }

        return e;
    }


)(Translator || {});