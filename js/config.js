let config = {
    //Player
        life:      32, //32
        power:      0,
        def:        0,
        dice:       6,
        inventory: 80,
        slots:      5,

    //Progression
        expRequiredPerLvl: 2,
        basePassieSkillPoints: 0,

    //Game
        // testCombat: true, //Initiates combat at the start (for testing).
        showScreen: '', 
        clearLs: true,
        showCombatInfoLog: true,

    //Items
        startingItems: [
            'club',
            'shield',
            'bandages',
            'axe',
        ],

        coins: rng(12,6),
        food:  rng(4,2),

    //Enemy
        eneLife: 8, //8
        // forceEnemyProfile: 'minion',
        enSpawnFrequency: 30,

    //Combat UI
        bgCounter: 3, //1 per saved combat bg for rng.

    //Map
        mapX:            3, //1
        mapY:            2, //2
        exitDefenders:   1,
        mandatoryTiles: [
            // {tileId:`2-${this.yAxis}`, tileType: 'casino', enemyUnit: true, boss: true, enemyQuant: 1},
            // {tileType: 'dungeon-1', enemyUnit: false},
            // {tileType: 'enchanter-1', enemyUnit: false},
            // {tileType: 'merchant-1'},
            // {tileType:'monument-1', tileId:`1-2`, loreEvent: 9},
            // {tileType:'monument-1', tileId:`2-2`, loreEvent: 8},
        ],
}