let vehicule = function(couleur, roues, marques) {
    this.couleur = "blue";
    this.roues = 4;
    this.marques = " Renault"

    this.demarrer = function () {
        console.log("je demarre")
    }

    this.arreter = function (){
        console.log("je m'arrete")
    }
}


let velo = function (couleur, roues, marques, rayonsRoues, typePeinture) {
    vehicule.call(this, couleur, roues, marques);
    this.rayonsRoues = 24;
    this.typePeinture = "Yellow"

    this.monter = function () {
        console.log("Je suis monter")
    }
}

velo.prototype = Object.create(vehicule.prototype);
velo.prototype.constructor = velo


let voiture = function (couleur, roues, marques, assurance, proprietaire) {
    vehicule.call(this, couleur, roues, marques);
    this.assurance = "Macif";
    this.proprietaire = "Damien";

    this.passserAucarWash = function () {
        console.log("je suis toute propre")
    }
}

voiture.prototype = Object.create(vehicule.prototype);
voiture.prototype.constructor = voiture


console.log(vehicule)
console.log(velo)
console.log(voiture)