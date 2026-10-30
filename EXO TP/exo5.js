const etudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
}

// 1.
function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant
    return { prenom: prenom, nom: nom, filiere: filiere }
}

// 2.
function calculerMoyenneNotes(notes) {
    if (notes.length === 0) return 0
    let somme = 0
    for (let i = 0; i < notes.length; i++) somme += notes[i]
    return somme / notes.length
}

// 3. spread : on crée un nouvel objet et un nouveau tableau
function ajouterNote(etudiant, nouvelleNote) {
    return { ...etudiant, notes: [...etudiant.notes, nouvelleNote] }
}

// 4.
function creerResume(etudiant, ...options) {
    return {
        identite: extraireIdentite(etudiant),
        moyenne: calculerMoyenneNotes(etudiant.notes),
        options: options
    }
}

// 5. tests
console.log(extraireIdentite(etudiantL2))
console.log(calculerMoyenneNotes(etudiantL2.notes))
console.log(calculerMoyenneNotes([])) // 0 (cas limite)

const etudiantMaj = ajouterNote(etudiantL2, 18)
console.log(etudiantMaj.notes)  // [13, 16, 12, 18]
console.log(etudiantL2.notes)   // [13, 16, 12] : inchangé

console.log(creerResume(etudiantL2, "Anglais", "Projet"))


