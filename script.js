(function() {
let number = Math.floor(Math.random() * 8) + 1;

//variable Bonne réponse
let newP = document.createElement("p");
newP.className = "animate__animated animate__bounce good";
newP.id = "casper";
//variable reponse deja donnée 
let newPalready = document.createElement("p");
newPalready.className = "animate__animated animate__bounce already";
newPalready.id = "casper2";
//variable mauvaise réponse
let newPwrong = document.createElement("p");
newPwrong.className = "animate__animated animate__bounce wrong";
newPwrong.id = "casper3";

let input = document.getElementById("answer");

 let ulList = document.getElementById("userGoodResponse");



let tableAnswer = new Array();

// test pour compter le nb de reponse et "numéroter" mes P
let count = 0;


let player = [
    {nb: 1, names: ["toldo","peruzzi","julio cesar","handanovic","frey"]},
    {nb: 2, names: ["godin","cordoba","vrsaljko","bergomi","panucci"]},
    {nb: 3, names: ["burdisso","fachetti","kallon",]},
    {nb: 4, names: ["zanetti","berti","manicone",]},
    {nb: 5, names: ["gagliardini","stankovic","juan jesus",]},
    {nb: 6, names: ["de vrij","joao mario","lucio","maxwell","zanetti","djorkaeff"]},
    {nb: 7, names: ["sanchez","karamoh","kondogbia","cancelo","coutinho","figo","quaresma"]},
    {nb: 8, names: ["vecino","jovetic","rafinha","thiago motta","ibrahimovic"]}
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

            if(element.names.includes(guessedName) && number == element.nb  ){
                if(tableAnswer.includes(number+" "+guessedName)){
                    document.getElementById("userGoodResponse").insertAdjacentElement('beforebegin', newPalready).innerHTML = "réponse déjà donnée";
                    setTimeout(function() {
                          document.getElementById("casper2").innerHTML = "";
                        },2000);

                }else{
                     //AFFICHER CHAQUE ELELEMNT DU TABLEAU TABLEANSWER EN LI DANS LE HTML

                    tableAnswer.push(number+" "+guessedName);
                    var item = tableAnswer[tableAnswer.length-1];
                    var elem = document.createElement("li");
                    elem.innerHTML = item;
                    ulList.appendChild(elem);
                        
                    

                    //ajoute une balise p avec la bonne reponse 

                    document.getElementById("userGoodResponse").insertAdjacentElement('beforebegin', newP).innerHTML = "bonne réponse";
                    
                    // faire disparaitre "bonne réponse" apres 2sec

                    setTimeout(function() {
                          document.getElementById("casper").innerHTML = "";
                        },2000);

                    // changement de numéro si bonne réponse et refresh l'input

                    number = Math.floor(Math.random() * 8) + 1;
                    document.getElementById("num").innerHTML = number;
                    document.getElementById("answer").value = null;
                    count++;
                }
               

            }else{
                document.getElementById("userGoodResponse").insertAdjacentElement('beforebegin', newPwrong).innerHTML = " Mauvaise réponse";
                    setTimeout(function() {
                          document.getElementById("casper3").innerHTML = "";
                        },2000);
                document.getElementById("answer").value = null;
            }
        });
        
        
    })


    
})();