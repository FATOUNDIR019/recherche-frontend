const groupeA = ["Awa", "Moussa", "Fatou"]
const groupeB = ["Ibra", "Mariama"]
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" }

// 1. regrouper les deux listes
const tousLesEtudiants = [...groupeA, ...groupeB]
console.log(tousLesEtudiants)

// 2. copie de groupeA + "Cheikh" ; l'original ne change pas
const copieA = [...groupeA, "Cheikh"]
console.log(copieA)
console.log(groupeA)

// 3. enrichir un objet
const etudiantComplet = { ...etudiantBase, age: 22, ville: "Dakar" }
console.log(etudiantComplet)

// 4. copie avec niveau remplacé
const etudiantL3 = { ...etudiantBase, niveau: "L3" }
console.log(etudiantL3)
console.log(etudiantBase) // niveau reste "L2"

// 5. fusion de deux objets (coordonnees et contact ne sont pas fournis : je les crée)
const coordonnees = { id: 1, ville: "Dakar", telephone: "770000000" }
const contact = { telephone: "780000000", email: "msk@gmail.com" }
const profil = { ...coordonnees, ...contact }
console.log(profil)
// telephone existe dans les deux : c'est la valeur du DERNIER objet qui reste