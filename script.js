// Função principal para iniciar o programa
function startGame() {
    console.log("\n====================================")
    console.log("🎮 Pokémon Battle Simulator! 🎮")
    console.log("====================================\n")

    // Prompt para pegar o nome do usuário
    let userName = ""
    while (!userName) {
        userName = prompt("👋 Qual é o seu nome, treinador?")
        if (!userName) {
            console.log("❌ Por favor, digite um nome válido!")
        }
    }
    
    console.log(`\n🌟 Olá, ${userName}! Hora de escolher seu Pokémon inicial! 🌟`)

    // Prompt para escolher o Pokémon inicial
    const starterOptions = ["Bulbasaur", "Charmander", "Squirtle"]
    let starterChoice = null

    while (!starterOptions.includes(starterChoice)) {
        console.log("\n🔄 Pokémon disponíveis:")
        console.log("🌱 Bulbasaur  - Tipo: Planta/Veneno")
        console.log("🔥 Charmander - Tipo: Fogo")
        console.log("💧 Squirtle   - Tipo: Água\n")
        
        starterChoice = prompt("Digite o nome do Pokémon escolhido:")
        if (!starterOptions.includes(starterChoice)) {
            console.log("❌ Pokémon inválido! Por favor, escolha entre Bulbasaur, Charmander ou Squirtle.")
        }
    }

    console.log(`\n✨ Parabéns! Você escolheu ${starterChoice} como seu Pokémon inicial! ✨`)

    // Dados do treinador
    const trainerProfile = {
        name: userName,
        starter: starterChoice,
        victories: 0,
        defeats: 0
    }
    // Exibe o menu principal
    showMainMenu(trainerProfile)
}

// Função que exibe e gerencia o menu principal do jogo
function showMainMenu(profile) {
    let running = true

    while (running) {
        console.log("\n===============================")
        console.log("🎮 Menu Principal 🎮")
        console.log("===============================")
        console.log("1️⃣  Batalhar")
        console.log("2️⃣  Pokédex")
        console.log("3️⃣  Tutorial")
        console.log("4️⃣  Perfil do Treinador")
        console.log("5️⃣  Créditos")
        console.log("6️⃣  Sair")
        console.log("===============================\n")

        const choice = prompt("Digite sua escolha (1-6):")

        switch (choice) {
            case "1":
                startBattle(getPokemonByName(profile.starter), profile)
                break
            case "2":
                showPokedex(profile)
                break
            case "3":
                showTutorial()
                break
            case "4":
                showTrainerProfile(profile)
                break
            case "5":
                showCredits()
                break
            case "6":
                console.log("\n🌟 Obrigado por jogar o Pokémon Battle Simulator! Até a próxima! 🌟")
                running = false
                break
            default:
                console.log("❌ Opção inválida! Por favor, escolha um número entre 1 e 6.")
        }
    }
}

// Função que exibe e gerencia o menu de tutorial
function showTutorial() {
    let running = true

    while (running) {
        console.log("\n===============================")
        console.log("📚 Tutorial 📚")
        console.log("===============================")
        console.log("1️⃣  Sistema de Batalha")
        console.log("2️⃣  Tipos e suas Mecânicas")
        console.log("3️⃣  Lista de Fraquezas e Resistências")
        console.log("4️⃣  Voltar")
        console.log("===============================\n")

        const choice = prompt("Digite sua escolha (1-4):")

        switch (choice) {
            case "1":
                showBattleSystemTutorial()
                break
            case "2":
                showTypesMechanicsTutorial()
                break
            case "3":
                showWeaknessesAndResistancesList()
                break
            case "4":
                running = false
                break
            default:
                console.log("❌ Opção inválida! Por favor, escolha um número entre 1 e 4.")
        }
    }
}

// Função que exibe o tutorial do sistema de batalha
function showBattleSystemTutorial() {
    console.log("\n=================================")
    console.log("📖 Tutorial: Sistema de Batalha 📖")
    console.log("=================================")
    console.log("1️⃣  Atributos dos Pokémon:")
    console.log("   ❤️ HP: Pontos de vida")
    console.log("   ⚔️ ATTACK: Poder de ataque")
    console.log("   🛡️ DEFENSE: Poder de defesa")
    console.log("   ⚡ SPEED: Velocidade de ação")
    console.log("\n2️⃣  Cada Pokémon possui 4 movimentos únicos")
    console.log("\n3️⃣  Tipos de Movimentos:")
    console.log("   💥 Físicos: Baseados no ATTACK")
    console.log("   🌟 Especiais: Efeitos únicos")
    console.log("   📊 Status: Alteram atributos")
    console.log("\n4️⃣  A batalha é dividida em turnos")
    console.log("\n5️⃣  Status especiais:")
    console.log("   ⚡ Paralyze: Reduz velocidade")
    console.log("   🔥 Burn: Causa dano contínuo")
    console.log("   💤 Sleep: Impede ações")
    console.log("\n6️⃣  Dica: Estratégia é a chave da vitória!")
    console.log("=================================")
}

// Função que exibe o tutorial sobre tipos e suas mecânicas
function showTypesMechanicsTutorial() {
    console.log("\n=====================================")
    console.log("📖 Tutorial: Tipos e Mecânicas 📖")
    console.log("=====================================")
    console.log("1️⃣  Tipos dos Pokémon:")
    console.log("   🔄 Podem ter até dois tipos")
    console.log("   📝 Exemplo: Bulbasaur (Grass/Poison)")
    console.log("\n2️⃣  Efetividade dos Movimentos:")
    console.log("   ⭐ Super efetivo: 2x de dano")
    console.log("   ⚪ Normal: 1x de dano")
    console.log("   ⭕ Pouco efetivo: 0.5x de dano")
    console.log("\n3️⃣  Dica: Memorize as vantagens!")
    console.log("=====================================")
}

// Função que exibe a lista completa de fraquezas e resistências dos tipos
function showWeaknessesAndResistancesList() {
    console.log("\n=========================================")
    console.log("📖 Lista de Fraquezas e Resistências 📖")
    console.log("=========================================")
    console.log("🔥 Fire:")
    console.log("   ❌ Fraco: Water")
    console.log("   🛡️ Resiste: Fire, Grass")
    console.log("\n💧 Water:")
    console.log("   ❌ Fraco: Grass")
    console.log("   🛡️ Resiste: Fire, Water")
    console.log("\n🌱 Grass:")
    console.log("   ❌ Fraco: Fire, Poison")
    console.log("   🛡️ Resiste: Water, Grass")
    console.log("\n☠️ Poison:")
    console.log("   ❌ Fraco: -")
    console.log("   🛡️ Resiste: Grass, Poison")
    console.log("\n💡 Dica: Use esta lista durante as batalhas!")
    console.log("=========================================")
}

// Função que exibe o perfil do treinador com suas estatísticas
function showTrainerProfile(profile) {
    console.log("\n================================")
    console.log("👤 Perfil do Treinador 👤")
    console.log("================================")
    console.log(`🎯 Nome: ${profile.name}`)
    console.log(`🌟 Pokémon Inicial: ${profile.starter}`)
    console.log(`🏆 Vitórias: ${profile.victories}`)
    console.log(`💔 Derrotas: ${profile.defeats}`)
    console.log("================================")
}

// Função que exibe os créditos do jogo
function showCredits() {
    console.log("\n================================")
    console.log("✨ Créditos ✨")
    console.log("================================")
    console.log("🎮 Pokémon Battle Simulator")
    console.log("👨‍💻 Criado com amor por Enzo Ramos")
    console.log("Meus sinceros agradecimentos ao meu pai, que me incentivou a seguir com esse projeto.")
    console.log("A minha namorada, que esteve sempre me ajudando a testar os sistemas.")
    console.log("Ao Janael, que me disponibilizou tempo de sua aula para terminar meu código.")
    console.log("Ao Helder e Caio por sempre me motivarem a continuar.")
    console.log("A minha vó Rita, que me ensinou a nunca desistir.")
    console.log("🎯 Baseado na primeira geração de Pokémon, principalmente os jogos Red/Blue")
    console.log("================================")
}

// Array que armazena todos os Pokémon da Pokédex
const pokedex = [
    {
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
        pokedexNumber: 1,
        description: "Uma semente de planta está em suas costas desde o nascimento.",
        stage: 1,
        stats: { HP: 45, ATTACK: 49, DEFENSE: 49, SPEED: 45 },
        moves: ["Tackle", "Growl", "Vine Whip", "Razor Leaf"]
    },
    {
        name: "Charmander",
        types: ["Fire"],
        pokedexNumber: 4,
        description: "A chama na ponta de sua cauda mostra seu humor.",
        stage: 1,
        stats: { HP: 39, ATTACK: 52, DEFENSE: 43, SPEED: 65 },
        moves: ["Scratch", "Growl", "Ember", "Flamethrower"]
    },
    {
        name: "Squirtle",
        types: ["Water"],
        pokedexNumber: 7,
        description: "Usa sua concha para se proteger e atacar com jatos d'água.",
        stage: 1,
        stats: { HP: 44, ATTACK: 48, DEFENSE: 65, SPEED: 43 },
        moves: ["Tackle", "Tail Whip", "Water Gun", "Bubble Beam"]
    }
]

// Array que armazena todos os movimentos disponíveis no jogo
const moves = [
    { name: "Tackle", type: "Normal", power: 40, effect: "Nenhum efeito adicional" },
    { name: "Growl", type: "Normal", power: 0, effect: "Reduz o ATTACK do adversário" },
    { name: "Vine Whip", type: "Grass", power: 45, effect: "Nenhum efeito adicional" },
    { name: "Razor Leaf", type: "Grass", power: 55, effect: "Aumenta chance de crítico" },
    { name: "Scratch", type: "Normal", power: 40, effect: "Nenhum efeito adicional" },
    { name: "Ember", type: "Fire", power: 40, effect: "10% de chance de causar queimadura" },
    { name: "Flamethrower", type: "Fire", power: 90, effect: "10% de chance de causar queimadura" },
    { name: "Water Gun", type: "Water", power: 40, effect: "Nenhum efeito adicional" },
    { name: "Bubble Beam", type: "Water", power: 65, effect: "10% de chance de reduzir SPEED" },
    { name: "Tail Whip", type: "Normal", power: 0, effect: "Reduz a DEFENSE do adversário" }
]

// Função que exibe e gerencia o menu da Pokédex
function showPokedex(trainerProfile) {
    let running = true

    while (running) {
        console.log("\n================================")
        console.log("📱 Pokédex 📱")
        console.log("================================")
        console.log("1️⃣  Consultar Pokémon Inicial")
        console.log("2️⃣  Todos os Pokémon")
        console.log("3️⃣  Listar por Tipo")
        console.log("4️⃣  Voltar")
        console.log("================================\n")

        const choice = prompt("Digite sua escolha (1-4):")

        switch (choice) {
            case "1":
                showPokemonDetails(getPokemonByName(trainerProfile.starter))
                break
            case "2":
                listAllPokemon()
                break
            case "3":
                listByType()
                break
            case "4":
                running = false
                break
            default:
                console.log("❌ Opção inválida! Por favor, escolha um número entre 1 e 4.")
        }
    }
}

// Função que busca e retorna um Pokémon pelo nome
function getPokemonByName(name) {
    return pokedex.find(pokemon => pokemon.name === name)
}

// Função que exibe os detalhes completos de um Pokémon
function showPokemonDetails(pokemon) {
    if (!pokemon) {
        console.log("❌ Pokémon não encontrado!")
        return
    }

    console.log("\n================================")
    console.log(`📝 ${pokemon.name} 📝`)
    console.log("================================")
    console.log(`🔢 Número: #${pokemon.pokedexNumber}`)
    console.log(`⭐ Tipos: ${pokemon.types.join(", ")}`)
    console.log(`📖 ${pokemon.description}`)
    console.log(`📈 Estágio: ${pokemon.stage}`)
    console.log("\n📊 Estatísticas:")
    console.log(`   ❤️ HP: ${pokemon.stats.HP}`)
    console.log(`   ⚔️ ATTACK: ${pokemon.stats.ATTACK}`)
    console.log(`   🛡️ DEFENSE: ${pokemon.stats.DEFENSE}`)
    console.log(`   ⚡ SPEED: ${pokemon.stats.SPEED}`)
    console.log("\n🎯 Movimentos:")
    pokemon.moves.forEach(move => {
        const moveData = moves.find(m => m.name === move)
        console.log(`   ➜ ${move} (Tipo: ${moveData.type}, Poder: ${moveData.power})`)
    })
    console.log("================================")
}

// Função que lista todos os Pokémon disponíveis
function listAllPokemon() {
    console.log("\n================================")
    console.log("📋 Lista de Pokémon 📋")
    console.log("================================")
    pokedex.forEach(pokemon => console.log(`#${pokemon.pokedexNumber}: ${pokemon.name}`))
    console.log("================================\n")

    let choice
    do {
        choice = parseInt(prompt("Digite o número da Pokédex para ver os detalhes (0 para voltar):"))
        if (isNaN(choice) || choice < 0 || (choice > 0 && !pokedex.find(p => p.pokedexNumber === choice))) {
            console.log("❌ Número inválido! Por favor, tente novamente.")
        }
    } while (isNaN(choice) || choice < 0 || (choice > 0 && !pokedex.find(p => p.pokedexNumber === choice)))

    if (choice !== 0) {
        const selectedPokemon = pokedex.find(pokemon => pokemon.pokedexNumber === choice)
        showPokemonDetails(selectedPokemon)
    }
}

// Função que lista Pokémon filtrados por tipo
function listByType() {
    const allTypes = [...new Set(pokedex.flatMap(pokemon => pokemon.types))]
    console.log("\n================================")
    console.log("📋 Tipos de Pokémon 📋")
    console.log("================================")
    allTypes.forEach(type => console.log(`⭐ ${type}`))
    console.log("================================\n")

    let typeChoice
    do {
        typeChoice = prompt("Digite o tipo para listar os Pokémon:")
        if (!allTypes.includes(typeChoice)) {
            console.log("❌ Tipo inválido! Por favor, tente novamente.")
        }
    } while (!allTypes.includes(typeChoice))

    const filteredPokemon = pokedex.filter(pokemon => pokemon.types.includes(typeChoice))

    if (filteredPokemon.length > 0) {
        console.log(`\n📋 Pokémon do Tipo ${typeChoice}:`)
        filteredPokemon.forEach(pokemon => console.log(`#${pokemon.pokedexNumber}: ${pokemon.name}`))

        let choice
        do {
            choice = parseInt(prompt("Digite o número da Pokédex para ver os detalhes (0 para voltar):"))
            if (isNaN(choice) || choice < 0 || (choice > 0 && !filteredPokemon.find(p => p.pokedexNumber === choice))) {
                console.log("❌ Número inválido! Por favor, tente novamente.")
            }
        } while (isNaN(choice) || choice < 0 || (choice > 0 && !filteredPokemon.find(p => p.pokedexNumber === choice)))

        if (choice !== 0) {
            const selectedPokemon = pokedex.find(pokemon => pokemon.pokedexNumber === choice)
            showPokemonDetails(selectedPokemon)
        }
    } else {
        console.log(`❌ Nenhum Pokémon encontrado do tipo ${typeChoice}.`)
    }
}

//==============================================================================================================

// Função que inicia e gerencia uma batalha Pokémon
function startBattle(userPokemon, profile) {
    if (!userPokemon) {
        console.log("❌ Erro: Pokémon não encontrado! Por favor, tente novamente.")
        return
    }

    // Seleciona um pokemon aleatório da pokedex como oponente
    const wildPokemon = pokedex[Math.floor(Math.random() * pokedex.length)]
    
    console.log("\n================================")
    console.log("⚔️ Batalha Pokémon! ⚔️")
    console.log("================================")
    console.log(`🌟 Um ${wildPokemon.name} selvagem apareceu!`)
    console.log("================================")
    
    // Cria cópias dos pokémon para a batalha
    let playerPokemon = {
        ...userPokemon,
        currentHP: userPokemon.stats.HP
    }
    
    let enemyPokemon = {
        ...wildPokemon,
        currentHP: wildPokemon.stats.HP
    }
    
    // Mostra status inicial
    showBattleStatus(playerPokemon, enemyPokemon)
    
    // Loop principal da batalha
    while (playerPokemon.currentHP > 0 && enemyPokemon.currentHP > 0) {
        // Determina ordem dos ataques baseado na velocidade
        const firstPokemon = playerPokemon.stats.SPEED >= enemyPokemon.stats.SPEED ? playerPokemon : enemyPokemon
        const secondPokemon = firstPokemon === playerPokemon ? enemyPokemon : playerPokemon
        
        // Primeiro ataque
        if (firstPokemon === playerPokemon) {
            console.log("\n⚡ Seu Pokémon é mais rápido e ataca primeiro!")
            executeTurn(firstPokemon, secondPokemon, true)
        } else {
            console.log("\n⚡ O Pokémon selvagem é mais rápido e ataca primeiro!")
            executeTurn(firstPokemon, secondPokemon, false)
        }
        if (secondPokemon.currentHP <= 0) break
        
        // Segundo ataque
        if (secondPokemon === playerPokemon) {
            executeTurn(secondPokemon, firstPokemon, true)
        } else {
            executeTurn(secondPokemon, firstPokemon, false)
        }
    }
    
    // Determina o vencedor
    const winner = playerPokemon.currentHP > 0 ? playerPokemon : enemyPokemon
    console.log("\n================================")
    console.log(`${winner === playerPokemon ? '🏆 Vitória!' : '💔 Derrota...'}`)
    console.log(`${winner.name} venceu a batalha!`)
    console.log("================================")
    
    // Atualiza o perfil do jogador
    updateBattleRecord(playerPokemon.currentHP > 0, profile)
}

// Função que exibe o status atual da batalha
function showBattleStatus(playerPokemon, enemyPokemon) {
    console.log("\n================================")
    console.log("📊 Status da Batalha 📊")
    console.log("================================")
    console.log(`🟢 Seu ${playerPokemon.name}`)
    console.log(`   Tipos: ${playerPokemon.types.join(", ")}`)
    console.log(`   HP: ${playerPokemon.currentHP}/${playerPokemon.stats.HP}`)
    console.log(`\n🔴 ${enemyPokemon.name} selvagem`)
    console.log(`   Tipos: ${enemyPokemon.types.join(", ")}`)
    console.log(`   HP: ${enemyPokemon.currentHP}/${enemyPokemon.stats.HP}`)
    console.log("================================")
}

// Função que executa um turno de batalha
function executeTurn(attacker, defender, isPlayer) {
    let selectedMove;
    
    if (isPlayer) {
        console.log("\n================================")
        console.log("🎯 Escolha seu movimento:")
        console.log("================================")
        attacker.moves.forEach((move, index) => {
            const moveData = moves.find(m => m.name === move)
            console.log(`${index + 1}. ${move}`)
            console.log(`   Tipo: ${moveData.type}`)
            console.log(`   Poder: ${moveData.power}`)
        })
        console.log("================================")
        
        let choice
        do {
            choice = parseInt(prompt("Digite o número do movimento (1-4):")) - 1
            if (choice < 0 || choice >= attacker.moves.length) {
                console.log("❌ Movimento inválido! Por favor, escolha um número entre 1 e 4.")
            }
        } while (choice < 0 || choice >= attacker.moves.length)
        
        selectedMove = attacker.moves[choice]
    } else {
        selectedMove = attacker.moves[Math.floor(Math.random() * attacker.moves.length)]
    }
    
    const moveData = moves.find(move => move.name === selectedMove)
    
    if (!moveData) {
        console.log(`❌ Erro: Movimento ${selectedMove} não encontrado!`)
        return
    }

    const {damage, effectiveness} = calculateDamage(attacker, defender, moveData)
    defender.currentHP = Math.max(0, defender.currentHP - damage)
    
    console.log(`\n${isPlayer ? '🟢' : '🔴'} ${attacker.name} usou ${selectedMove}!`)
    
    if (effectiveness > 1) {
        console.log("🎯 Foi super efetivo!")
    } else if (effectiveness < 1 && effectiveness > 0) {
        console.log("😕 Não foi muito efetivo...")
    } else if (effectiveness === 0) {
        console.log("❌ Não teve efeito!")
    }
    
    console.log(`💥 Causou ${damage} de dano!`)
    showBattleStatus(isPlayer ? attacker : defender, isPlayer ? defender : attacker)
}

// Função que calcula o dano causado por um movimento
function calculateDamage(attacker, defender, move) {
    // Se o movimento não tem poder (como Growl ou Tail Whip), retorna 0 de dano
    if (move.power === 0) {
        return {
            damage: 0,
            effectiveness: 1
        }
    }
    
    const baseDamage = Math.floor((attacker.stats.ATTACK * move.power) / defender.stats.DEFENSE)
    const typeMultiplier = getTypeEffectiveness(move.type, defender.types)
    
    return {
        damage: Math.max(1, Math.floor(baseDamage * typeMultiplier)),
        effectiveness: typeMultiplier
    }
}

// Função que calcula a efetividade do tipo do movimento contra os tipos do defensor
function getTypeEffectiveness(moveType, defenderTypes) {
    const typeChart = {
        "Fire": { "Grass": 2.0, "Water": 0.5, "Fire": 0.5 },
        "Water": { "Fire": 2.0, "Grass": 0.5, "Water": 0.5 },
        "Grass": { "Water": 2.0, "Fire": 0.5, "Grass": 0.5, "Poison": 0.5 },
        "Poison": { "Grass": 2.0, "Poison": 0.5 },
        "Normal": { } // Tipo Normal não tem vantagens nem desvantagens
    }

    let multiplier = 1.0
    defenderTypes.forEach(defenderType => {
        if (typeChart[moveType] && typeChart[moveType][defenderType]) {
            multiplier *= typeChart[moveType][defenderType]
        }
    })

    return multiplier
}

// Função que atualiza o registro de batalhas do treinador
function updateBattleRecord(isVictory, profile) {
    if (isVictory) {
        profile.victories++
        console.log("\n🏆 Parabéns! Vitória registrada no seu perfil!")
        console.log(`Total de vitórias: ${profile.victories}`)
    } else {
        profile.defeats++
        console.log("\n💔 Não foi dessa vez... Derrota registrada no seu perfil.")
        console.log(`Total de derrotas: ${profile.defeats}`)
    }
}

//==============================================================================================================

// Inicializa o programa
startGame()