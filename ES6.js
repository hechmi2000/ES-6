const compterVoyelles = (chaine) => {
    // Utilisation d'une expression régulière pour trouver toutes les voyelles dans la chaîne
    const voyelles = chaine.match(/[aeiou]/gi);
  
    // Si aucune voyelle n'est trouvée, renvoyer 0
    // Sinon, renvoyer la longueur du tableau de voyelles
    return voyelles ? voyelles.length : 0;
  };
  
  // Exemple :
  const chaineInput = "bonjour le monde";
  const resultat = compterVoyelles(chaineInput);
  console.log(resultat); // Résultat : 7 (o, o, u, e, e, o, e sont les voyelles)




  const verifierPairImpair = (nombre) => {
    if (nombre % 2 === 0) {
      return "Pair";
    } else {
      return "Impair";
    }
  };
  
  // Exemple :
  const resultat1 = verifierPairImpair(4);
  console.log(resultat1); // Résultat : Pair
  
  const resultat2 = verifierPairImpair(7);
  console.log(resultat2); // Résultat : Impair


  const obtenirMilieu = (mot) => {
    const longueur = mot.length;
    
    if (longueur % 2 === 0) {
      // La longueur du mot est paire, retourner les deux caractères du milieu
      const indiceMilieu = longueur / 2 - 1;
      return mot.substring(indiceMilieu, indiceMilieu + 2);
    } else {
      // La longueur du mot est impaire, retourner le caractère du milieu
      const indiceMilieu = Math.floor(longueur / 2);
      return mot.charAt(indiceMilieu);
    }
  };
  
  // Exemples  :
  console.log(obtenirMilieu("test"));     // Résultat: "es"
  console.log(obtenirMilieu("testing"));  // Résultat: "t"
  console.log(obtenirMilieu("middle"));   // Résultat: "dd"
  console.log(obtenirMilieu("A"));        // Résultat: "A"




  const findOpposite = (number) => {
    return -number;
  };
  
  // Examples:
  console.log(findOpposite(1));   // Output: -1
  console.log(findOpposite(14));  // Output: -14
  console.log(findOpposite(-34)); // Output: 34




  const accum = (str) => {
    return str.split('').map((char, index) => {
      // Utilisation de la méthode repeat pour répéter le caractère index + 1 fois
      // Utilisation de toUpperCase() pour mettre la première lettre en majuscule
      // Utilisation de toLowerCase() pour mettre les lettres suivantes en minuscules
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    }).join('-');
  };
  
  // Exemples :
  console.log(accum("abcd"));    // Résultat: "A-Bb-Ccc-Dddd"
  console.log(accum("RqaEzty")); // Résultat: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  console.log(accum("cwAt"));    // Résultat: "C-Ww-Aaa-Tttt"





  const estCarreParfait = (nombre) => {
    // Si la racine carrée du nombre est un entier, c'est un carré parfait
    return Math.sqrt(nombre) % 1 === 0;
  };
  
  // Exemples :
  console.log(estCarreParfait(-1)); // Résultat: false
  console.log(estCarreParfait(0));  // Résultat: true
  console.log(estCarreParfait(3));  // Résultat: false
  console.log(estCarreParfait(4));  // Résultat: true
  console.log(estCarreParfait(25)); // Résultat: true
  console.log(estCarreParfait(26)); // Résultat: false



  const supprimerVoyelles = (chaine) => {
    // Utilisation de la méthode replace avec une expression régulière pour supprimer les voyelles
    return chaine.replace(/[aeiouAEIOU]/g, '');
  };
  
  // Exemple  :
  const chaineOriginale = "This website is for losers LOL!";
  const chaineResultat = supprimerVoyelles(chaineOriginale);
  console.log(chaineResultat); // Résultat: "Ths wbst s fr lsrs LL!"




  const memeNombreXO = (chaine) => {
    // Convertir la chaîne en minuscules pour rendre la comparaison insensible à la casse
    const chaineMinuscules = chaine.toLowerCase();
  
    // Compter les occurrences de 'x' et 'o'
    const compteX = (chaineMinuscules.match(/x/g) || []).length;
    const compteO = (chaineMinuscules.match(/o/g) || []).length;
  
    // Vérifier si les comptes sont égaux
    return compteX === compteO;
  };
  
  // Exemples d'utilisation :
  console.log(memeNombreXO("ooxx"));    // Résultat: true
  console.log(memeNombreXO("xooxx"));   // Résultat: false
  console.log(memeNombreXO("ooxXm"));   // Résultat: true
  console.log(memeNombreXO("zpzpzpp")); // Résultat: true
  console.log(memeNombreXO("zzoo"));    // Résultat: false



  const longueurDuMotLePlusCourt = (mots) => {
    // Divise la chaîne en un tableau de mots
    const tableauDeMots = mots.split(' ');
  
    // Trouve la longueur minimale en utilisant Math.min et l'opérateur de propagation
    const longueurMin = Math.min(...tableauDeMots.map(mot => mot.length));
  
    return longueurMin;
  };
  
  // Exemple  :
  const chaineDeMots = "Simple, given a string of words, return the length of the shortest word(s).";
  //const resultat = longueurDuMotLePlusCourt(chaineDeMots);
  console.log(resultat); // Résultat: 1 (à cause du mot 'a')




  const sumOfPositives = (numbers) => {
    // Utilisation de la méthode reduce pour obtenir la somme des nombres positifs
    return numbers.reduce((sum, num) => {
      // Ajoute num à la somme si num est positif
      if (num > 0) {
        return sum + num;
      }
      // Sinon, retourne simplement la somme actuelle
      return sum;
    }, 0);
  };
  
  // Exemple  :
  const numbersArray = [1, -4, 7, 12];
  const result = sumOfPositives(numbersArray);
  console.log(result); // Résultat: 20

  


  const filterList = (list) => {
    // Utilisation de la méthode filter pour filtrer les nombres de la liste
    return list.filter(item => typeof item === 'number');
  };
  
  // Exemples :
  console.log(filterList([1, 2, 'a', 'b']));        // Résultat: [1, 2]
  console.log(filterList([1, 'a', 'b', 0, 15]));     // Résultat: [1, 0, 15]
  console.log(filterList([1, 2, 'aasf', '1', '123', 123]));  // Résultat: [1, 2, 123]





const repeatString = (n, s) => {
  // Utilisation de l'opérateur de répétition pour répéter la chaîne s n fois
  return s.repeat(n);
};

// Exemples d'utilisation :
console.log(repeatString(6, "I"));        // Résultat: "IIIIII"
console.log(repeatString(5, "Hello"));    // Résultat: "HelloHelloHelloHelloHello"





const sommeRangéeNombresImpairs = (n) => {
    // Calculer le nombre de départ de la nième rangée
    const nombreDeDépart = (n * (n - 1)) + 1;
  
    // Calculer la somme des nombres dans la nième rangée
    const sommeRangée = Array.from({ length: n }, (_, index) => nombreDeDépart + (2 * index))
                      .reduce((somme, num) => somme + num, 0);
  
    return sommeRangée;
  };
  
  // Exemples  :
  console.log(sommeRangéeNombresImpairs(1)); // Résultat: 1
  console.log(sommeRangéeNombresImpairs(2)); // Résultat: 8



  





const rendreNégatif = (nombre) => {
  // Si le nombre est positif ou nul, le rendre négatif, sinon le laisser tel quel
  return nombre > 0 ? -nombre : nombre;
};

// Exemples  :
console.log(rendreNégatif(1));  // Résultat: -1
console.log(rendreNégatif(-5)); // Résultat: -5
console.log(rendreNégatif(0));  // Résultat: 0



const nombreEnChaine = (nombre) => {
    return nombre.toString();
  };


  console.log(nombreEnChaine(123));    // Résultat : "123"
console.log(nombreEnChaine(999));    // Résultat : "999"
console.log(nombreEnChaine(-100));   // Résultat : "-100"



const operationMathematiqueDeBase = (operation, valeur1, valeur2) => {
    switch (operation) {
      case '+':
        return valeur1 + valeur2;
      case '-':
        return valeur1 - valeur2;
      case '*':
        return valeur1 * valeur2;
      case '/':
        return valeur1 / valeur2;
      default:
        return "Opération non reconnue";
    }
  };
  
  // Exemples  :
  console.log(operationMathematiqueDeBase('+', 4, 7));    // Résultat: 11
  console.log(operationMathematiqueDeBase('-', 15, 18));  // Résultat: -3
  console.log(operationMathematiqueDeBase('*', 5, 5));    // Résultat: 25
  console.log(operationMathematiqueDeBase('/', 49, 7));   // Résultat: 7




  const doubleArrayValues = (array) => {
    // Utilisation de la méthode map pour créer un nouveau tableau avec chaque valeur doublée
    return array.map(value => value * 2);
  };
  
  // Exemple :
  const originalArray = [1, 2, 3];
  const newArray = doubleArrayValues(originalArray);
  console.log(newArray); // Résultat: [2, 4, 6]
  









  const reverseString = (str) => {
    // Utilisation de la méthode split pour diviser la chaîne en un tableau de caractères,
    // puis de la méthode reverse pour inverser l'ordre des caractères,
    // enfin, de la méthode join pour rejoindre les caractères en une chaîne.
    return str.split('').reverse().join('');
  };
  
  // Exemples d'utilisation :
  console.log(reverseString('world'));  // Résultat: 'dlrow'
  console.log(reverseString('word'));   // Résultat: 'drow'








  const traduireADNenARN = (chaineADN) => {
    // Utilisation de la méthode replace avec une expression régulière pour remplacer chaque 'T' par 'U'
    return chaineADN.replace(/T/g, 'U');
  };
  
  // Exemple d'utilisation :
  const sequenceADN = "GCAT";
  const sequenceARN = traduireADNenARN(sequenceADN);
  console.log(sequenceARN);  // Résultat: 'GCAU'
  












  const compterMoutons = (tableauMoutons) => {
    // Utilisation de la méthode filter pour ne conserver que les éléments égaux à true
    const moutonsPresent = tableauMoutons.filter((mouton) => mouton === true || mouton === 1);
    return moutonsPresent.length;
  };
  
  // Exemple d'utilisation :
  const tableauDeMoutons = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
  const nombreDeMoutons = compterMoutons(tableauDeMoutons);
  console.log(nombreDeMoutons);  // Résultat: 17





  const countSheep = (num) => {
    let murmurs = '';
  
    for (let i = 1; i <= num; i++) {
      murmurs += `${i} sheep...`;
    }
  
    return murmurs;
  };
  
  // Exemple d'utilisation :
  const resultat = countSheep(3);
  console.log(resultat);
  // Résultat attendu : "1 sheep...2 sheep...3 sheep..."
  
  




  





  

  





  









  

  

  


  




  





  

  







  