// 1. Moyenne de trois notes
function calculerMoyenne(note1, note2, note3) {
    return (note1 + note2 + note3) / 3;
}
// 2. Admission (moyenne >= 10)
function estAdmis(moyenne) {
    return moyenne >= 10;
}
//3.calcul prix TTCs
function calculerPrixTTC(prixHT, tauxTVA = 0.18){
    return prixHT*(1+tauxTVA)
    
}
// 4. Fonction fléchée : heures -> minutes
const convertirEnMinutes = (heures) => heures * 60;
console.log(calculerMoyenne(12, 14, 16)) // 14
console.log(calculerMoyenne(0, 0, 0))    // 0 (cas limite)
console.log(estAdmis(9.5))               // false
console.log(estAdmis(10))                // true (cas limite)
console.log(calculerPrixTTC(10000))      // 11800
console.log(calculerPrixTTC(10000, 0))   // 10000 (taux nul)
console.log(convertirEnMinutes(2))       // 120
console.log(convertirEnMinutes(0))       // 0 (cas limite)