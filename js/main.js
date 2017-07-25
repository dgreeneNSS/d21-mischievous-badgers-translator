console.log('Hello world');

let langbtn = document.getElementById('runTranslate');
runTranslate.addEventListener("click", () =>{
    let toBeTranslated = document.getElementById("toBeTranslated").value;
    let whichSelected;
    let radios = document.getElementsByName("whichLang");
    for (let i = 0; i < radios.length; i++){
        //0 = emoji, 1 = French, 2 = Old English, 4 = Orc
        if (radios[i].checked) {
            whichSelected = radios[i].value;
            break;
        }
    }
    console.log("whichSelected", whichSelected);

    if (whichSelected == 0){
        Translator.addEmoji(toBeTranslated);
    }else if(whichSelected == 1){
        Translator.addFrench(toBeTranslated);
    }else if(whichSelected == 2){
        Translator.addOldEnglish(toBeTranslated)
    }else if(whichSelected == 3){
        Translator.addOrc(toBeTranslated);
    }
});
