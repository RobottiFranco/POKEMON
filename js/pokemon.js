let enemyLives = 3
let playerLives = 3

let playerAttack
let enemyAttack

function startGame()
{
    //mando a seleccion de mascotas
    let buttonSelect = document.getElementById("select-button")
    buttonSelect.addEventListener("click", selectPet)    

    //mando a seccion de ataque
    let buttonAttackByFire = document.getElementById("fire-button")
    buttonAttackByFire.addEventListener("click", fireAttack)

    let buttonAttackByWater = document.getElementById("water-button")
    buttonAttackByWater.addEventListener("click", waterAttack)

    let buttonAttackByPlant = document.getElementById("plant-button")
    buttonAttackByPlant.addEventListener("click", plantAttack)

    // reset game
    let buttonReset = document.getElementById("reset-button")
    buttonReset.addEventListener("click", resetGame)
}

function resetGame()
{
    
}

//attack player function
function fireAttack()
{
    playerAttack = "fire"
    game()
}

function waterAttack()
{
    playerAttack = "water"
    game()
}

function plantAttack()
{
    playerAttack = "plant"
    game()
}

//enemy attack function
function randomEnemyAttack()
{
    //1 = fire 2 = water 3 = plant
    const selection = random(1,3)
    
    if (selection == 1)
    {
        enemyAttack = "fire"
    }
    else if (selection == 2)
    {
        enemyAttack = "water"
    }
    else
    {
        enemyAttack = "plant"
    }

    return enemyAttack
}

function game()
{
    if ((playerLives > 0) && (enemyLives  > 0))
    {
        enemyAttack = randomEnemyAttack()
        const battleResult = battle()
    
        printBattleResult(battleResult)
    }
}

function printBattleResult(combatResult)
{
    let message = document.getElementById("message")
    let text = document.createElement("p")

    let enemyIcon = stringToIcon(enemyAttack)
    let playerIcon = stringToIcon(playerAttack)

    let result  = "Tu "+  document.getElementById("pokemon-player").innerHTML + " utilizo " + playerIcon + ", el " + document.getElementById("pokemon-enemy").innerHTML + " enemigo utilizo"+ enemyIcon + ": " + combatResult

    text.innerHTML = result

    document.getElementById("result-battle").innerHTML = combatResult

    message.appendChild(text)
    

    if (combatResult == "GANASTE")
    {
        document.getElementById("enemy-lives").innerHTML = enemyLives
    }
    else if (combatResult == "PERDISTE")
    {
        document.getElementById("player-lives").innerHTML = playerLives
    }


    if (playerLives == 0)
    {
        document.getElementById("result-battle").innerHTML = "Ganaste"
        alert("GANASTE 🏆")
    }
    else if (enemyLives == 0)
    {
        document.getElementById("result-battle").innerHTML = "Perdiste"
        alert("PERDISTE 😭")
    }
    else
    {
        document.getElementById("result-battle").innerHTML = "en duelo"
    }
}
function stringToIcon(stringChange)
{
    let icon
    
    if (stringChange == "fire")
    {
        icon = "🔥"
    }
    if (stringChange == "water")
    {
        icon = "💧"
    }
    else
    {
        icon = "🌱"
    }

    return icon
}

//function battle
function battle()
{
    let result
    //fire > plant - water > fire - plant > water

    if (playerAttack == enemyAttack)
    {
        result = "EMPATE"
    }
    else if((playerAttack ==  "fire" && enemyAttack == "plant") || (playerAttack ==  "water" && enemyAttack == "fire") || (playerAttack ==  "plant" && enemyAttack == "water"))
    {
        result = "GANASTE"
        enemyLives --
    }
    else
    {
        result = "PERDISTE"
        playerLives --
    }

    return result
}

//utils function

function random(min, max)
{
    return Math.floor( Math.random() * (max - min + 1) + min)
}

//player pet selection function
function playerPet()
{
    let selection = ""

    if ((document.getElementById("charmander").checked)) //input charmander
    {
        selection = "charmander"
    }
    else if(document.getElementById("bulbasaur").checked) //input bulbasaur
    {
        selection = "bulbasaur"
    }
    else if(document.getElementById("ivysaur").checked) //input ivysaur
    {
        selection = "ivysaur"
    }
    else{
        try
        {
            throw "Seleccion invalida"
        }
        catch(exception)
        {
            console.log(exception)
        }
        return -1
    }

    return selection
}

//bot pet selection function
function enemyPet()
{
    //1 = charmander 2 = bulbasaur 3 = ivysaur
    let selection = random(1,3)
    let pet = ""

    if (selection == 1)
    {
        pet = "charmander"
    }
    else if(selection == 2)
    {
        pet = "bulbasaur"
    }
    else 
    {
        pet = "ivysaur"
    }

    return pet
}

function selectPet()
{
    if (playerPet() != -1)
    {
        const enemySelection =  enemyPet()
        const player = playerPet()

        //alert("seleccionste " + user)
        document.getElementById("pokemon-player").innerHTML = player

        //alert("el enemigo selecciono " + botSelection)
        document.getElementById("pokemon-enemy").innerHTML = enemySelection
        return 1
    }
    else
    {
        alert("selecciona una mascota")
        return -1
    }
}



window.addEventListener("load", startGame)