console.log( "icelandic.js" );

var Translator = (function() {

	let toBeTrans = toBeTranslated.value.toLowerCase();
	console.log( "toBeTrans", toBeTrans );
	let sentenceArray = toBeTrans.split(" ");
	console.log( "sentenceArray", sentenceArray );
	let newSentence = [];
	console.log( "newSentence", newSentence );

	return {
		addIcelandic: function() {

			sentenceArray.forEach( (item) => {

				if (item === "merry") {
					newSentence.push("gleðileg");
				}  else if  (item === "christmas") {
					newSentence.push("jól");
				}  else if (item === "and") {
					newSentence.push("og");
				}  else if (item === "happy") {
					newSentence.push("farsælt")
				}  else if (item === "new") {
					newSentence.push("komandi");
				}  else if (item === "year") {
					newSentence.push("ár");
				}
				return newSentence.join(" ");
			})

			console.log( "newSentence", newSentence.join(" ") );
			
		}

	}

})();