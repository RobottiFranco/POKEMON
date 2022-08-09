let attackPlayer
let enemyAttack

function startGame()
{
    //mando a seleccion de mascotas
    let buttonSelect = document.getElementById("select-button")
    buttonSelect.addEventListener("click", selectPet)    

    //mando a modo de ataque
    let buttonAttackByFire = document.getElementById("fire-button")
    buttonAttackByFire.addEventListener("click", fireAttack)

    let buttonAttackByWater = document.getElementById("water-button")
    buttonAttackByWater.addEventListener("click", waterAttack)

    let buttonAttackByPlant = document.getElementById("plant-button")
    buttonAttackByPlant.addEventListener("click", plantAttack)
}


//attack player function
function fireAttack()
{
    attackPlayer = "fire"
    game()
}

function waterAttack()
{
    attackPlayer = "water"
    game()
}

function plantAttack()
{
    attackPlayer = "plant"
    game()
}

//function battle
function battle()
{
    let result
    //fire > plant - water > fire - plant > water

    if (attackPlayer == enemyAttack)
    {
        result = "EMPATE"
    }
    else if((attackPlayer ==  "fire" && enemyAttack == "plant") || (attackPlayer ==  "water" && enemyAttack == "fire") || (attackPlayer ==  "plant" && enemyAttack == "water"))
    {
        result = "GANASTE"
    }
    else
    {
        result = "PERDISTE"
    }

    return result
}

function game()
{
    attackPlayer = attackPlayer
    enemyAttack = randomEnemyAttack()

    document.getElementById("player-attack").innerHTML = attackPlayer
    document.getElementById("enemy-attack").innerHTML = enemyAttack
    document.getElementById("result-battle").innerHTML = battle()
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
        const user = playerPet()

        //alert("seleccionste " + user)
        document.getElementById("pokemon-player").innerHTML = user

        //alert("el enemigo selecciono " + botSelection)
        document.getElementById("pokemon-enemy").innerHTML = enemySelection
    }
    else
    {
        alert("selecciona una mascota")
    }
}


//main program

window.addEventListener("load", startGame)