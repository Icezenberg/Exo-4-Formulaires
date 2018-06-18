/**
 * fonction qui en fonction du choix de l'utilisateur lors de l'appel de celle ci
 * execute une fonction ajax qui recupere la data correspondant au choix de l'utilisateur
 * @param {string} param 
 * @param {function} cb 
 */
var reponse = "";
var services = function (param, cb) {

    var service = "http://localhost:9000/";

    switch (param) {
        case 'resultat':
            service = service + "/post.html";
            break;
    }