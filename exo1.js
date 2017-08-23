function User (prenom, nom, pays, age, paiement) {
  this.prenom = prenom;
  this.nom = nom;
  this.pays = pays;
  this.age = age;
  this.paiement = paiement;
  this.getName = function() {
    alert(this.nom +" "+this.age +" ans");
  };
}
