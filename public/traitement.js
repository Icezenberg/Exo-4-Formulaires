/**
 * fonction qui va traiter les valeurs du formulaire
 */
$("#add").click(function(){
        // récupérer les données avec des éléments jquery 
        var val1 = $("#champ1").val();   
        var val2 =  $("#champ2").val();
        var somme = parseInt(val1) + parseInt(val2)
        console.log(val1);

        // $(".demo").append("somme");

        document.getElementById("resultat").innerHTML = somme;
    
});


// function addNumbers(a, b) {
//     return a + b; ;
// }

// x = addNumbers(1, 2);
