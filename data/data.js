let gs //game state object

//Game
    class GameState {
        constructor(){
            this.stage = 0
            
            //Encounter
            this.inCombat = false
            this.encounter = 1
            this.combatTurn = 1
            this.logMsg = []      // Combat log messages.
            this.statChange = []  // Stats for UI indicator.
            this.enemyAction = [] // Last enemy action.

            //Rewards
            this.flatItemReward  = 2 // Base rewards.
            this.flatFoodReward  = 2 // Food per round +1 per enemy.
            this.flatCoinsReward = 5 
            
            //Stats for end game screen.
            this.turnCounter = 0 //Calc turns for win stats.
            this.enemyCounter = 0
            this.totalEnemies = config.exitDefenders + this.stage
            this.totalCombatTurns = 0
            
            //Map
                //Merchant config.
                this.merchantQuant = 10

                //Enemies
                this.enemySpawnFrequency = config.enSpawnFrequency //30%
                this.dungeonEnemySpawnFrequency = 70
                this.enemyPartyCap = 2       
        }
    }

//Saving
    function saveGame(){
        //Increase stage to scale enemies
        // gs.mapObj = new MapObj //Generate a mapObj for the next stage

        localStorage.setItem('gameState', JSON.stringify(gs))        
        console.log('Game saved');
    }

    function clearSavedGame(){
        localStorage.removeItem('gameState')
        console.log('Game save removed');
    }

    function loadGame(){
        let gameObj = JSON.parse(localStorage.getItem('gameState'))

        if (gameObj == undefined){
            // gs = new GameState

            // gs.plObj = new PlayerObj
            // //Resolve ititial items
            // gs.plObj.startingItems.forEach(key => {addItem(key)})

            console.log('New game started');
        }
        else {
            gs = gameObj
            console.log('Game loaded');
        }
    }