(function() {
let number = Math.floor(Math.random() * 4) + 1;
let newP = document.createElement("p");




let input = document.getElementById("answer");
newP.className = "animate__animated animate__bounce good";
 let ulList = document.getElementById("userGoodResponse");



let tableAnswer = new Array();

// test pour compter le nb de reponse et "numéroter" mes P
let count = 0;


let player = [
    {nb: 1, names: ["toldo","peruzzi","julio cesar",]},
    {nb: 2, names: ["cordoba","vrsaljko","bergomi","panucci"]},
    {nb: 3, names: ["burdisso","fachetti","kallon",]},
    {nb: 4, names: ["zanetti","berti","manicone",]}
];
// LANCER L ACTION DU BOUTTON SI JAMAIS ON APPUIE SUR ENTER 
    document.getElementById("num").innerHTML = number;
    input.addEventListener("keyup", function(event){
        if(event.keyCode === 13){
            document.getElementById("run").click();
        }
    });



    


// CE QUI SE PASSE QUAND ON CLIQUE SUR LE BOUTTON CONFIRM
    document.getElementById("run").addEventListener("click",function(){
        guessedName = document.getElementById("answer").value;
        console.log(guessedName);

        player.forEach(element => {

            if(number == element.nb && element.names.includes(guessedName)){
                
                //AFFICHER CHAQUE ELELEMNT DU TABLEAU TABLEANSWER EN LI DANS LE HTML
                tableAnswer.push(number+" "+guessedName);
                
                var item = tableAnswer[tableAnswer.length-1];
                var elem = document.createElement("li");
                elem.innerHTML = item;
                ulList.appendChild(elem);
                     
                

                //ajoute une balise p avec la bonne reponse 

                document.getElementById("userGoodResponse").insertAdjacentElement('beforebegin', newP).innerHTML = "bonne réponse";
                
                // document.getElementById("userGoodResponse").appendChild(newP).innerHTML = number +" "+guessedName;
                
                

                // changement de numéro si bonne réponse et refresh l'input

                number = Math.floor(Math.random() * 4) + 1;
                document.getElementById("num").innerHTML = number;
                document.getElementById("answer").value = null;
                count++;

            }
        });
        
        
    })


    
})();