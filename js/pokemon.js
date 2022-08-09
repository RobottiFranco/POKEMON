let playerAttack
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

function game()
{
    enemyAttack = randomEnemyAttack()

    document.getElementById("player-attack").innerHTML = playerAttack
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

//function battle
function battle()
{
    let result
    //fire > plant - water > fire - plant > water

    if (playerAttack == enemyAttack)
    {
        result = "EMPATE"
    }
    else if((playerAttack==  "fire" && enemyAttack == "plant") || (playerAttack ==  "water" && enemyAttack == "fire") || (playerAttack ==  "plant" && enemyAttack == "water"))
    {
        result = "GANASTE"
    }
    else
    {
        result = "PERDISTE"
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