const etudiant = {
    id: 2026,
    nom: "Ndiaye",
    prenom: "Moussa",
    filiere: "IAGE",
    niveau: "L2",
    ville: "Dakar"
}
const resultats = [15, 11, 17, 13, 16]

// 1. extraire nom, prenom, filiere
const { nom, prenom, filiere } = etudiant
console.log(nom, prenom, filiere)

// 2. renommage : niveau -> classe
const { niveau: classe } = etudiant
console.log(classe)

// 3. première, deuxième et dernière note (le tableau n'est pas modifié)
const [premiere, deuxieme] = resultats
const derniere = resultats[resultats.length - 1]
console.log(premiere, deuxieme, derniere)
console.log(resultats)

// 4. ignorer une position : on laisse un vide entre les deux virgules
const [noteUne, , noteTrois] = resultats
console.log(noteUne, noteTrois)

// 5. valeur par défaut pour une propriété absente
const { email = "contact@useacademy.com" } = etudiant
console.log(email)

// 6. phrase de présentation
console.log(`${prenom} ${nom} est en ${filiere}, classe ${classe}`)