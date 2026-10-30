// 1. ...nombres regroupe tous les arguments dans un tableau
function additionner(...nombres) {
    let somme = 0
    for (let i = 0; i < nombres.length; i++) somme += nombres[i]
    return somme
}
console.log(additionner(2, 3))
console.log(additionner(1, 2, 3))
console.log(additionner(1, 2, 3, 4, 5))

// 2.
function afficherPremierEtAutres(premier, ...autres) {
    console.log("Premier :", premier)
    console.log("Autres :", autres)
}
afficherPremierEtAutres("a", "b", "c", "d")

// 3.
function creerFiche(nom, filiere, ...competences) {
    return { nom: nom, filiere: filiere, competences: competences }
}
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"))

// 4. rest doit être en dernier car il récupère TOUS les arguments restants :
//    si un paramètre venait après, JavaScript ne saurait pas où s'arrête le regroupement.
