console.log("hi")
let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]

];

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');
// Loop over each element in our cellElementArray:
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
    const currentCellElement = cellElementArray[elementIndex]
    // Add an event listener to the currentCellElement:
    currentCellElement.addEventListener('click', function (event) {
        // event.target tells us which element the user clicked (see Resources links below):
    
        const clickedCellElement = event.target;
        // Log the ID of the cell which was just clicked:
        console.log("You clicked on cell number: " + clickedCellElement.id)
if ( currentPlayer==='X') {
        clickedCellElement.innerHTML = 'X'
        playerXSelections.push( Number(clickedCellElement.id) ); 
        let result = checkForWin(winningCombinations, playerXSelections)
        if (result===true){
            console.log('player x wins')
        }
        currentPlayer='O'
    } else {
        clickedCellElement.innerHTML= 'O';
        playerOSelections.push(Number(clickedCellElement.id) ) ;
        let result = checkForWin(winningCombinations, playerOSelections);
        currentPlayer = 'X'
    }
    console.log ("x plays", playerXSelections);
    console.log("o plays", playerOSelections);
    });
}
    



   




 
function checkForWin (winningCombination, playerSelections) {
    for (let i=0 ; i<winningCombination.length; i++) {
        let matchNumber = 0;
        let currentCombination= winningCombination[i];
        console.log(currentCombination)
        for (let j = 0; j<currentCombination.length; j++) {
            console.log(currentCombination[j]);
            if (playerSelections.includes(currentCombination[j])) {
                //console.log('hi')
                matchNumber=matchNumber +1
            }
        
        }
        if (matchNumber ===3) {
            return true
        }
    }
    return false
}