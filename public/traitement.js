/**
 * fonction qui va traiter les valeurs du formulaire
 */
$(function () {

    $("#add").click(function(e){
        e.preventDefault();
        const val1 = $("#champ1").val();   
        const val2 =  $("#champ2").val();

        $.ajax({
            url : 'http://127.0.0.1:9000/post.html',
            type : 'POST',
            data : {champ1:val1, champ2:val2},
            success : function(data){ // code_html contient le HTML renvoyé
                // const somme = (parseInt(req.body.champ1)+parseInt(req.body.champ2)+"");
                // console.log(somme);
                console.log(data);

                $("#resultat").attr("value",data);

                // document.getElementById("resultat").innerHTML = somme;
               
            },
            error: function(){
                console.log(toto);
            }
        });

   

    });
});








