var Translator = (function(e) {

    let toBeDone = document.getElementById("toBeTranslated").value;
    console.log(toBeDone);
    let sentenceArray = toBeDone.toLowerCase().split(" ");
    console.log(sentenceArray);
    let newSentence = [];



        e.addEmoji = function() {
            sentenceArray.forEach(function(item){
                if(item == "merry"){
                    newSentence.push("😁");
                }else if(item == "christmas"){
                    newSentence.push('🎄🎅');
                }else if(item == 'and'){
                    newSentence.push('➕');
                }else if(item == "happy"){
                    newSentence.push("😊");
                }else if(item == 'new'){
                    newSentence.push('🆕 ');
                }else if(item == 'year'){
                    newSentence.push('🗓');
                }

                return newSentence.join(" ");
            });

            let output_div = document.querySelector('#output-language');
            output_div.innerText = newSentence.join(' ');
            let speak = document.querySelector('#text-speak');
            let speak_att = document.createAttribute('onclick');
            speak_att.value = responsiveVoice.speak(output_div.innerText, 'Czech Female', {pitch: 0}, {rate: 0});
            speak.setAttributeNode(speak_att);
        }

        return e
    }


)(Translator || {});