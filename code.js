const status = document.getElementById("status");
let personnage;
class Personnage {
  constructor() {
    this.pointsDeVie = 20;
    this.healthElement = document.getElementById("health");
  }

  frapper() {
    console.log("boum");
    if (this.pointsDeVie > 0) {
      this.pointsDeVie--;
      this.majAffichage();
    } else {
      console.log("Le personnage est déjà mort !");
    }
  }

  guerir() {
    if (this.pointsDeVie < 20) {
      this.pointsDeVie++;
      this.majAffichage();
    } else {
      console.log("Le personnage a déjà tous ses points de vie !");
    }
  }

  majAffichage() {
    if (this.healthElement) {
      this.healthElement.innerText = this.pointsDeVie;

      if (this.pointsDeVie <= 0) {
        document.getElementById("status").innerText = "Le personnage est mort !";
      } else if (this.pointsDeVie === 10) {
        document.getElementById("status").innerText = "Le personnage est entre la vie et la mort !";
      } else {
        document.getElementById("status").innerText = "Points de vie du personnage : " + this.pointsDeVie;
      }
    } else {
      console.error("Élément de santé non trouvé.");
    }
  }
}




function launch() {
  // Afficher le mot Nintendo
  document.getElementById("fontest").innerHTML = "Nintendo";

  // Attendre 3 secondes et ensuite changer le mot
  setTimeout(function () {
    document.getElementById("fontest").innerHTML = "";
    document.getElementById("presentationscreen").innerHTML = "Game of Death";

    // Attendre à nouveau 3 secondes et ensuite effacer le mot "Game of Death"
    setTimeout(function () {
      document.getElementById("presentationscreen").innerHTML = "";
      startGame();
    }, 3000);
  }, 3000);
}





function startGame() {
  status.style.display = "block";

  // Création d'une instance de la classe Personnage
   personnage = new Personnage();
}
