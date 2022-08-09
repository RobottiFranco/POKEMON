function startGame()
{
    let buttonSelect = document.getElementById("select-button")
    buttonSelect.addEventListener("click", selectPet)    
}

function random(min, max)
{
    return Math.floor( Math.random() * (max - min + 1) + min)
}

function petGamer()
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

function petBot()
{
    let bot = random(1,3)
    let selectionBot = ""

    if (bot == 1) //input charmander
    {
        selectionBot = "charmander"
    }
    else if(bot == 2) //input bulbasaur
    {
        selectionBot = "bulbasaur"
    }
    else //input ivysaur
    {
        selectionBot = "ivysaur"
    }

    return selectionBot
}

function selectPet()
{
    if (petGamer() != -1)
    {
        let botSelection =  petBot()
        let user = petGamer()

        alert("seleccionste " + user)
        document.getElementById("pokemon-player").innerHTML = user

        alert("el enemigo selecciono " + botSelection)
        document.getElementById("pokemon-enemy").innerHTML = botSelection
    }
    else
    {
        alert("selecciona una mascota")
    }
}


//main program
window.addEventListener("load", startGame)