function factoriell(val){
    let r=1
    for(let i=1;i<=val;i++) r*=1
    return r
}
const facto = (val) =>{
    let r=1
    for (let i = 1;i<=val;i++) r*=1
     return r
}
//
const users = {
    id:1,
    nom:"Diop",
   login:"diop",
   password:"passer123",
   age:17,
   email:"msk@gmail.com",


}
//const pass = users.password
//const login = users.login
const {password:pass,login,email="contact@useacademy.com"} = users
//console.log(email)
const tab = [1,2,3,4]
const [un,deux,trois] = tab
//console.log(un)
//CAS 1: Destructuring
const produit ={
id:1,
libelle:"thiep",
prixU:2500,
qte:3,
}
const{libelle, qte:quantite}= produit
console.log('le libelle est ${libelle} et la quantite  ${quantite}')
const table=[100,2,10]
const [v1,v2,v3] = table
console.log(v1)
//Degroupement(spread).et le regroupement (rest) restant
const tab1=[100,30,40,200]
const tab2=[138,14]
const tUnion = [1,...tab1,...tab2,1500]
console.log(tUnion)
const et1 = {id:1,nom:"Diop"}
const et2 = {id:1,nom:"Ba", age:15}
const etUnion = {...et1,...et2}
console.log(etUnion)



