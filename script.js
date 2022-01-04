let elements = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Il me faut un tableau de 16 positions avec chaque élements
// de `elements` present 2 fois à des positions aléatoires

// Exo 1 : rendre `elements` aléatoire
function exo1(){
    let exo1 = [];

    let copyElements = [];

    //Facon historique
    for (let i=0; i<elements.length; i++){
        copyElements.push(elements[i]);
    }


    // Facon moderne
    //copyElements = elements.map((item) => item);

    for (let i=0; i<8; i++){

        //Choisir un element de facon aléatoire

        let rand = Math.floor(copyElements.length*Math.random() );

        exo1.push(copyElements[rand]);

        copyElements.splice(rand, 1);

    }
}

console.log(`Elements: ${elements}`);

// Exo2: rendre un tableau dans chacun des élements de
// `elements` est présent 2 fois, à des positions aléatoires
function exo2(){
    let exo2 = [];
    let copyElementsExo2 = [];

    for (let i=0; i<elements.length; i++){
        copyElementsExo2.push(elements[i]);
        copyElementsExo2.push(elements[i]);
    }

    for (let i=0; i<8*2; i++) {
    
        // choisir un element d efacon aleatoire
        
        let rand = Math.floor( copyElementsExo2.length * Math.random() );
        
        exo2.push( copyElementsExo2[rand] );
        
        copyElementsExo2.splice(rand,1);      
    }
}



let board = initBoard();

function initBoard() {
  let board = [];
  let copyElements = [];

  for (let i=0; i< elements.length; i++) {
    copyElements.push(elements[i]);
    copyElements.push(elements[i]);  
  }
  let positions = copyElements.length;

  for (let i=0; i<positions; i++) {
    // choisir un element d efacon aleatoire
    let rand = 
        Math.floor( copyElements.length * Math.random() );
    board.push( copyElements[rand] );
    copyElements.splice(rand,1);
  }  
  
  return board;  
}

let temp = "";
let tempId = "";
let tries = 0;
let cartes = 8;
let play = false
function doClick(id) {
    // Il nous faut `row` et `col` à partir de `id`
    if(play == true){
        return;
    } else {
        if (document.querySelector(`#${id}`).style.backgroundColor == 'transparent'){
            return;
        } else {
            let rowCol = id.replace('tile-', '').split('-');

            // Maintenant je veux savoir à quel élément du plateau
            // `board` ça correspond

            let position = parseInt(rowCol[0]) * 4 + parseInt(rowCol[1]);
            //console.log(position);
            //console.log(`Element ${board[position]}`);
            if(retourner <1){
                document.querySelector(`#${id}`).classList.add(board[position]);
                retourner ++;
                temp = document.querySelector(`#${id}`).classList[1]
                tempId = document.querySelector(`#${id}`)
            } else{
                tries ++;  
                document.querySelector(`#${id}`).classList.add(board[position]);
                if(temp == board[position]){
                    if(tempId == document.querySelector(`#${id}`)){
                        return;
                    } else {
                        tempId.style.backgroundColor = 'transparent';
                        document.querySelector(`#${id}`).style.backgroundColor = 'transparent';
                        retourner = 0;
                        cartes --;
                    }
                } else {
                    retourner = 0;
                    play = true;
                    setTimeout(removePosition, 1000, tempId, document.querySelector(`#${id}`), board[position]);
                }
            }
        }
        if (cartes == 0){
            play = true;
            document.getElementById('tries').innerHTML = `Tu l'as fais en ${tries} tentatives.`;
            document.getElementById('restart').innerHTML = `Rejouer`
            
        }   
    }
}

function removePosition(img1, img2, pos){
    img1.classList.remove(temp);
    img2.classList.remove(pos);
    play = false;
}

let retourner = 0

function reset(){
    play = false;
    carte = 8;
    tries = 0
    retourner = 0;
    exo1();
    exo2();
    board = initBoard();
    console.log(`Board ${board}`);
    document.querySelector('#tries').innerHTML = `Trouve les paires !`;
    for (let row=0; row < 4; row++) {
      for (let col=0; col < 4; col++) {
        let tile = document.querySelector(`#tile-${row}-${col}`);
        for (let i=0; i <16; i++)
            tile.classList.remove(board[i]);
            tile.style.backgroundColor = 'orange';
      }
    }
    
}