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
    let choice

    while (!starterChoice) {
        console.log("\n🔄 Pokémon disponíveis:")
        console.log("1. 🌱 Bulbasaur  - Tipo: Planta/Veneno")
        console.log("2. 🔥 Charmander - Tipo: Fogo")
        console.log("3. 💧 Squirtle   - Tipo: Água\n")
        
        choice = parseInt(prompt("Digite o número do Pokémon escolhido (1-3):"))
        if (choice >= 1 && choice <= 3) {
            starterChoice = starterOptions[choice - 1]
        } else {
            console.log("❌ Número inválido! Por favor, escolha um número entre 1 e 3.")
        }
    }

    console.log(`\n✨ Parabéns! Você escolheu ${starterChoice} como seu Pokémon inicial! ✨`)

    // Dados do treinador
    const trainerProfile = {
        name: userName,
        starter: starterChoice,
        victories: 0,
        defeats: 0,
        lastBattle: null,
        level: 1,
        experience: 0
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
        console.log("3️⃣  Perfil do Treinador")
        console.log("4️⃣  Sair")
        console.log("===============================\n")

        const choice = prompt("Digite sua escolha (1-4):")

        switch (choice) {
            case "1":
                startBattle(getPokemonByName(profile.starter), profile)
                break
            case "2":
                showPokedex(profile)
                break
            case "3":
                showTrainerProfile(profile)
                break
            case "4":
                console.log("\n🌟 Obrigado por jogar o Pokémon Battle Simulator! Até a próxima! 🌟")
                running = false
                break
            default:
                console.log("❌ Opção inválida! Por favor, escolha um número entre 1 e 4.")
        }
    }
}

//==============================================================================================================

// Função que exibe o perfil do treinador com suas estatísticas
function showTrainerProfile(profile) {
    // Calcula a taxa de vitória
    const totalBattles = profile.victories + profile.defeats;
    const winRate = totalBattles > 0 ? ((profile.victories / totalBattles) * 100).toFixed(1) : 0;

    console.log("\n====================================")
    console.log("✨ PERFIL DO TREINADOR POKÉMON ✨") 
    console.log("====================================")
    console.log(`🎯 Nome: ${profile.name.toUpperCase()}`)
    console.log(`\n📋 INFORMAÇÕES DO TREINADOR:`)
    console.log(`   🌟 Pokémon Inicial: ${profile.starter}`)
    console.log(`   📈 Nível: ${profile.level}`)
    console.log(`   ⭐ Experiência: ${profile.experience}/${profile.level * 200}`)
    console.log(`\n🏆 HISTÓRICO DE BATALHAS:`)
    console.log(`   ✅ Vitórias: ${profile.victories}`)
    console.log(`   ❌ Derrotas: ${profile.defeats}`)
    console.log(`   📊 Taxa de Vitória: ${winRate}%`)
    if (profile.lastBattle) {
        console.log(`   🕒 Última Batalha: ${profile.lastBattle}`)
    }
    console.log("\n💫 Continue treinando para se tornar")
    console.log("   um Mestre Pokémon!")
    console.log("====================================")
}

//==============================================================================================================

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
        name: "Ivysaur", 
        types: ["Grass", "Poison"],
        pokedexNumber: 2,
        description: "O bulbo em suas costas cresceu tanto que não consegue mais ficar sobre duas pernas.",
        stage: 2,
        stats: { HP: 60, ATTACK: 62, DEFENSE: 63, SPEED: 60 },
        moves: ["Tackle", "Growl", "Vine Whip", "Razor Leaf"]
    },
    {
        name: "Venusaur",
        types: ["Grass", "Poison"], 
        pokedexNumber: 3,
        description: "Sua flor libera um aroma agradável quando está absorvendo energia solar.",
        stage: 3,
        stats: { HP: 80, ATTACK: 82, DEFENSE: 83, SPEED: 80 },
        moves: ["Tackle", "Growl", "Vine Whip", "Solar Beam"]
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
        name: "Charmeleon",
        types: ["Fire"],
        pokedexNumber: 5,
        description: "Quando balança sua cauda em chamas, eleva a temperatura a níveis insuportáveis.",
        stage: 2,
        stats: { HP: 58, ATTACK: 64, DEFENSE: 58, SPEED: 80 },
        moves: ["Scratch", "Growl", "Ember", "Flamethrower"]
    },
    {
        name: "Charizard",
        types: ["Fire", "Flying"],
        pokedexNumber: 6,
        description: "Cospe fogo tão quente que derrete rochas. Pode causar incêndios florestais sem querer.",
        stage: 3,
        stats: { HP: 78, ATTACK: 84, DEFENSE: 78, SPEED: 100 },
        moves: ["Scratch", "Growl", "Fire Blast", "Wing Attack"]
    },
    {
        name: "Squirtle",
        types: ["Water"],
        pokedexNumber: 7,
        description: "Usa sua concha para se proteger e atacar com jatos d'água.",
        stage: 1,
        stats: { HP: 44, ATTACK: 48, DEFENSE: 65, SPEED: 43 },
        moves: ["Tackle", "Tail Whip", "Water Gun", "Bubble Beam"]
    },
    {
        name: "Wartortle",
        types: ["Water"],
        pokedexNumber: 8,
        description: "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito velho.",
        stage: 2,
        stats: { HP: 59, ATTACK: 63, DEFENSE: 80, SPEED: 58 },
        moves: ["Tackle", "Tail Whip", "Water Gun", "Bubble Beam"]
    },
    {
        name: "Blastoise",
        types: ["Water"],
        pokedexNumber: 9,
        description: "Os jatos de água disparados pelos canhões em sua concha são fortes o suficiente para perfurar aço.",
        stage: 3,
        stats: { HP: 79, ATTACK: 83, DEFENSE: 100, SPEED: 78 },
        moves: ["Tackle", "Tail Whip", "Hydro Pump", "Skull Bash"]
    },
    {
        name: "Caterpie",
        types: ["Bug"],
        pokedexNumber: 10,
        description: "Seus pés com ventosas permitem que ele escale qualquer superfície.",
        stage: 1,
        stats: { HP: 45, ATTACK: 30, DEFENSE: 35, SPEED: 45 },
        moves: ["Tackle", "String Shot"]
    },
    {
        name: "Metapod",
        types: ["Bug"],
        pokedexNumber: 11,
        description: "Seu casulo é resistente como ferro. Permanece imóvel para evoluir.",
        stage: 2,
        stats: { HP: 50, ATTACK: 20, DEFENSE: 55, SPEED: 30 },
        moves: ["Harden"]
    },
    {
        name: "Butterfree",
        types: ["Bug", "Flying"],
        pokedexNumber: 12,
        description: "Em batalha, bate suas asas em alta velocidade para liberar poeira tóxica no ar.",
        stage: 3,
        stats: { HP: 60, ATTACK: 45, DEFENSE: 50, SPEED: 70 },
        moves: ["Confusion", "Sleep Powder", "Psybeam", "Whirlwind"]
    },
    {
        name: "Weedle",
        types: ["Bug", "Poison"],
        pokedexNumber: 13,
        description: "O ferrão em sua cabeça é muito venenoso. Seu olfato agudo ajuda a encontrar comida.",
        stage: 1,
        stats: { HP: 40, ATTACK: 35, DEFENSE: 30, SPEED: 50 },
        moves: ["Poison Sting", "String Shot"]
    },
    {
        name: "Kakuna",
        types: ["Bug", "Poison"],
        pokedexNumber: 14,
        description: "Quase incapaz de se mover, esse Pokémon só pode endurecer sua casca para se proteger.",
        stage: 2,
        stats: { HP: 45, ATTACK: 25, DEFENSE: 50, SPEED: 35 },
        moves: ["Harden"]
    },
    {
        name: "Beedrill",
        types: ["Bug", "Poison"],
        pokedexNumber: 15,
        description: "Voa em alta velocidade e ataca usando seus ferrões venenosos em suas patas dianteiras e cauda.",
        stage: 3,
        stats: { HP: 65, ATTACK: 90, DEFENSE: 40, SPEED: 75 },
        moves: ["Fury Attack", "Twineedle", "Rage", "Pin Missile"]
    },
    {
        name: "Pidgey",
        types: ["Normal", "Flying"],
        pokedexNumber: 16,
        description: "Muito dócil. Se atacado, geralmente levanta areia para se proteger em vez de revidar.",
        stage: 1,
        stats: { HP: 40, ATTACK: 45, DEFENSE: 40, SPEED: 56 },
        moves: ["Tackle", "Sand Attack", "Gust", "Quick Attack"]
    },
    {
        name: "Pidgeotto",
        types: ["Normal", "Flying"],
        pokedexNumber: 17,
        description: "Muito protetor de seu território, esse Pokémon vigia sua área do céu.",
        stage: 2,
        stats: { HP: 63, ATTACK: 60, DEFENSE: 55, SPEED: 71 },
        moves: ["Tackle", "Sand Attack", "Gust", "Wing Attack"]
    },
    {
        name: "Pidgeot",
        types: ["Normal", "Flying"],
        pokedexNumber: 18,
        description: "Pode voar a Mach 2, buscando presas em grandes áreas.",
        stage: 3,
        stats: { HP: 83, ATTACK: 80, DEFENSE: 75, SPEED: 101 },
        moves: ["Wing Attack", "Sky Attack", "Hurricane", "Quick Attack"]
    },
    {
        name: "Rattata",
        types: ["Normal"],
        pokedexNumber: 19,
        description: "Seus dentes crescem continuamente. Rói coisas duras para mantê-los curtos.",
        stage: 1,
        stats: { HP: 30, ATTACK: 56, DEFENSE: 35, SPEED: 72 },
        moves: ["Tackle", "Tail Whip", "Quick Attack", "Hyper Fang"]
    },
    {
        name: "Raticate",
        types: ["Normal"],
        pokedexNumber: 20,
        description: "Seus pés traseiros são palmados. Eles agem como nadadeiras, então pode nadar em rios.",
        stage: 2,
        stats: { HP: 55, ATTACK: 81, DEFENSE: 60, SPEED: 97 },
        moves: ["Tackle", "Tail Whip", "Hyper Fang", "Super Fang"]
    },
    {
        name: "Spearow",
        types: ["Normal", "Flying"],
        pokedexNumber: 21,
        description: "Come insetos em áreas gramadas. Precisa bater suas pequenas asas rapidamente para se manter no ar.",
        stage: 1,
        stats: { HP: 40, ATTACK: 60, DEFENSE: 30, SPEED: 70 },
        moves: ["Peck", "Growl", "Fury Attack", "Aerial Ace"]
    },
    {
        name: "Fearow",
        types: ["Normal", "Flying"],
        pokedexNumber: 22,
        description: "Com seu pescoço longo e bico poderoso, tem uma vantagem considerável em caçar em terra e água.",
        stage: 2,
        stats: { HP: 65, ATTACK: 90, DEFENSE: 65, SPEED: 100 },
        moves: ["Drill Peck", "Fury Attack", "Aerial Ace", "Drill Run"]
    },
    {
        name: "Ekans",
        types: ["Poison"],
        pokedexNumber: 23,
        description: "Quanto mais velho fica, mais cresce. À noite, enrola seu longo corpo em galhos para descansar.",
        stage: 1,
        stats: { HP: 35, ATTACK: 60, DEFENSE: 44, SPEED: 55 },
        moves: ["Wrap", "Poison Sting", "Bite", "Acid"]
    },
    {
        name: "Arbok",
        types: ["Poison"],
        pokedexNumber: 24,
        description: "Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.",
        stage: 2,
        stats: { HP: 60, ATTACK: 95, DEFENSE: 69, SPEED: 80 },
        moves: ["Wrap", "Poison Sting", "Acid", "Gunk Shot"]
    },
    {
        name: "Pikachu",
        types: ["Electric"],
        pokedexNumber: 25,
        description: "Quando vários destes Pokémon se reúnem, sua eletricidade pode causar tempestades.",
        stage: 1,
        stats: { HP: 35, ATTACK: 55, DEFENSE: 40, SPEED: 90 },
        moves: ["Thunder Shock", "Growl", "Quick Attack", "Thunderbolt"]
    },
    {
        name: "Raichu",
        types: ["Electric"],
        pokedexNumber: 26,
        description: "Sua cauda longa serve como terra para se proteger de sua própria energia elétrica.",
        stage: 2,
        stats: { HP: 60, ATTACK: 90, DEFENSE: 55, SPEED: 110 },
        moves: ["Thunder Shock", "Thunder Wave", "Thunderbolt", "Thunder"]
    },
    {
        name: "Sandshrew",
        types: ["Ground"],
        pokedexNumber: 27,
        description: "Adora banhar-se na areia. Rola na areia para se livrar da sujeira em suas escamas.",
        stage: 1,
        stats: { HP: 50, ATTACK: 75, DEFENSE: 85, SPEED: 40 },
        moves: ["Scratch", "Sand Attack", "Poison Sting", "Slash"]
    },
    {
        name: "Sandslash",
        types: ["Ground"],
        pokedexNumber: 28,
        description: "Enrola-se em bola quando em perigo. Pode rolar enquanto enrolado para atacar ou escapar.",
        stage: 2,
        stats: { HP: 75, ATTACK: 100, DEFENSE: 110, SPEED: 65 },
        moves: ["Scratch", "Sand Attack", "Earthquake", "Slash"]
    }
]

// Array que armazena todos os movimentos disponíveis no jogo
const moves = [
    // Movimentos do tipo Normal
    { name: "Tackle", type: "Normal", power: 40, accuracy: 100, effects: null },
    { name: "Scratch", type: "Normal", power: 40, accuracy: 100, effects: null },
    { name: "Quick Attack", type: "Normal", power: 40, accuracy: 100, effects: null },
    { name: "Fury Attack", type: "Normal", power: 15, accuracy: 85, effects: null },
    { name: "Rage", type: "Normal", power: 20, accuracy: 100, effects: null },
    { name: "Slash", type: "Normal", power: 70, accuracy: 100, effects: null },
    { name: "Wrap", type: "Normal", power: 15, accuracy: 90, effects: { type: "trap", chance: 100 } },
    { name: "Hyper Fang", type: "Normal", power: 80, accuracy: 90, effects: null },
    { name: "Super Fang", type: "Normal", power: 0, accuracy: 90, effects: null },
    { name: "Growl", type: "Normal", power: 0, accuracy: 100, effects: null },
    { name: "Tail Whip", type: "Normal", power: 0, accuracy: 100, effects: null },
    { name: "Harden", type: "Normal", power: 0, accuracy: 100, effects: null },
    { name: "Whirlwind", type: "Normal", power: 0, accuracy: 100, effects: null },

    // Movimentos do tipo Fire
    { name: "Ember", type: "Fire", power: 40, accuracy: 100, effects: { type: "burn", chance: 10 } },
    { name: "Flamethrower", type: "Fire", power: 90, accuracy: 100, effects: { type: "burn", chance: 10 } },
    { name: "Fire Blast", type: "Fire", power: 110, accuracy: 85, effects: { type: "burn", chance: 30 } },

    // Movimentos do tipo Water
    { name: "Water Gun", type: "Water", power: 40, accuracy: 100, effects: null },
    { name: "Bubble Beam", type: "Water", power: 65, accuracy: 100, effects: null },
    { name: "Hydro Pump", type: "Water", power: 110, accuracy: 80, effects: null },

    // Movimentos do tipo Grass
    { name: "Vine Whip", type: "Grass", power: 45, accuracy: 100, effects: null },
    { name: "Razor Leaf", type: "Grass", power: 55, accuracy: 95, effects: null },
    { name: "Solar Beam", type: "Grass", power: 120, accuracy: 100, effects: null },
    { name: "Sleep Powder", type: "Grass", power: 0, accuracy: 75, effects: { type: "sleep", chance: 100 } },

    // Movimentos do tipo Electric
    { name: "Thunder Shock", type: "Electric", power: 40, accuracy: 100, effects: { type: "paralyze", chance: 10 } },
    { name: "Thunderbolt", type: "Electric", power: 90, accuracy: 100, effects: { type: "paralyze", chance: 10 } },
    { name: "Thunder Wave", type: "Electric", power: 0, accuracy: 90, effects: { type: "paralyze", chance: 100 } },
    { name: "Thunder", type: "Electric", power: 110, accuracy: 70, effects: { type: "paralyze", chance: 30 } },

    // Movimentos do tipo Poison
    { name: "Poison Sting", type: "Poison", power: 15, accuracy: 100, effects: null },
    { name: "Acid", type: "Poison", power: 40, accuracy: 100, effects: null },
    { name: "Gunk Shot", type: "Poison", power: 120, accuracy: 80, effects: null },

    // Movimentos do tipo Ground
    { name: "Sand Attack", type: "Ground", power: 0, accuracy: 100, effects: null },
    { name: "Earthquake", type: "Ground", power: 100, accuracy: 100, effects: null },
    { name: "Drill Run", type: "Ground", power: 80, accuracy: 95, effects: null },

    // Movimentos do tipo Flying
    { name: "Gust", type: "Flying", power: 40, accuracy: 100, effects: null },
    { name: "Wing Attack", type: "Flying", power: 60, accuracy: 100, effects: null },
    { name: "Peck", type: "Flying", power: 35, accuracy: 100, effects: null },
    { name: "Aerial Ace", type: "Flying", power: 60, accuracy: 100, effects: null },
    { name: "Drill Peck", type: "Flying", power: 80, accuracy: 100, effects: null },
    { name: "Sky Attack", type: "Flying", power: 140, accuracy: 90, effects: null },
    { name: "Hurricane", type: "Flying", power: 110, accuracy: 70, effects: { type: "confuse", chance: 30 } },

    // Movimentos do tipo Bug
    { name: "String Shot", type: "Bug", power: 0, accuracy: 95, effects: null },
    { name: "Twineedle", type: "Bug", power: 25, accuracy: 100, effects: null },
    { name: "Pin Missile", type: "Bug", power: 25, accuracy: 95, effects: null },

    // Movimentos do tipo Psychic
    { name: "Confusion", type: "Psychic", power: 50, accuracy: 100, effects: { type: "confuse", chance: 10 } },
    { name: "Psybeam", type: "Psychic", power: 65, accuracy: 100, effects: { type: "confuse", chance: 10 } },

    // Movimentos do tipo Dark
    { name: "Bite", type: "Dark", power: 60, accuracy: 100, effects: null }
]

//==============================================================================================================

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
                if (trainerProfile.starter) {
                    showPokemonDetails(getPokemonByName(trainerProfile.starter))
                } else {
                    console.log("❌ Você ainda não escolheu um Pokémon inicial!")
                }
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
    return pokedex.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase())
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
        if (moveData) {
            console.log(`   ➜ ${move} (Tipo: ${moveData.type}, Poder: ${moveData.power}, Precisão: ${moveData.accuracy}%)`)
            if (moveData.effect !== "Nenhum efeito adicional") {
                console.log(`      💫 Efeito: ${moveData.effect}`)
            }
        }
    })
    console.log("================================")
}

// Função que lista todos os Pokémon disponíveis
function listAllPokemon() {
    console.log("\n================================")
    console.log("📋 Lista de Pokémon 📋")
    console.log("================================")
    
    const sortedPokemon = [...pokedex].sort((a, b) => a.pokedexNumber - b.pokedexNumber)
    sortedPokemon.forEach(pokemon => {
        console.log(`#${pokemon.pokedexNumber.toString().padStart(3, '0')}: ${pokemon.name}`)
    })
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
    const allTypes = [...new Set(pokedex.flatMap(pokemon => pokemon.types))].sort()
    console.log("\n================================")
    console.log("📋 Tipos de Pokémon 📋")
    console.log("================================")
    allTypes.forEach((type, index) => console.log(`${index + 1}. ⭐ ${type}`))
    console.log("================================\n")

    let typeChoice
    do {
        typeChoice = prompt("Digite o tipo para listar os Pokémon (ou 0 para voltar):")
        if (typeChoice === "0") return
        
        if (!allTypes.includes(typeChoice)) {
            console.log("❌ Tipo inválido! Por favor, tente novamente.")
        }
    } while (!allTypes.includes(typeChoice))

    const filteredPokemon = pokedex.filter(pokemon => pokemon.types.includes(typeChoice))
        .sort((a, b) => a.pokedexNumber - b.pokedexNumber)

    if (filteredPokemon.length > 0) {
        console.log(`\n📋 Pokémon do Tipo ${typeChoice}:`)
        filteredPokemon.forEach(pokemon => {
            console.log(`#${pokemon.pokedexNumber.toString().padStart(3, '0')}: ${pokemon.name}`)
        })

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

    // Seleciona um pokemon aleatório do mesmo estágio do inicial
    const sameStagePokemons = pokedex.filter(p => p.stage === userPokemon.stage)
    const wildPokemon = sameStagePokemons[Math.floor(Math.random() * sameStagePokemons.length)]
    
    console.log("\n================================")
    console.log("⚔️ Batalha Pokémon! ⚔️")
    console.log("================================")
    console.log(`🌟 Um ${wildPokemon.name} selvagem apareceu!`)
    console.log("================================")
    // Cria cópias dos pokémon para a batalha com status
    let playerPokemon = {
        ...userPokemon,
        currentHP: userPokemon.stats.HP,
        status: {
            frozen: false,
            burned: false,
            sleeping: false,
            paralyzed: false,
            confused: false,
            trapped: false,
            sleepTurns: 0,
            confusedTurns: 0
        }
    }
    
    let enemyPokemon = {
        ...wildPokemon,
        currentHP: wildPokemon.stats.HP,
        status: {
            frozen: false,
            burned: false,
            sleeping: false,
            paralyzed: false,
            confused: false,
            trapped: false,
            sleepTurns: 0,
            confusedTurns: 0
        }
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

        // Aplica efeitos de status no fim do turno
        applyStatusEffects(playerPokemon)
        applyStatusEffects(enemyPokemon)
        
        // Mostra status após os ataques
        showBattleStatus(playerPokemon, enemyPokemon)
    }
    
    // Determina o vencedor
    const winner = playerPokemon.currentHP > 0 ? playerPokemon : enemyPokemon
    console.log("\n================================")
    console.log(`${winner === playerPokemon ? '🏆 Vitória!' : '💔 Derrota...'}`)
    console.log(`${winner.name} venceu a batalha!`)
    console.log("================================")
    
    // Atualiza o perfil do jogador
    updateBattleRecord(playerPokemon.currentHP > 0, profile)
    
    // Atualiza a última batalha
    profile.lastBattle = new Date().toLocaleString()
    
    // Atualiza experiência e nível
    if (playerPokemon.currentHP > 0) {
        const expGain = Math.floor(100 * (1 + profile.level * 0.1))
        profile.experience += expGain
        console.log(`\n✨ Ganhou ${expGain} pontos de experiência!`)
        
        while (profile.experience >= profile.level * 200) {
            profile.experience -= profile.level * 200
            profile.level++
            console.log(`\n🌟 Parabéns! Você subiu para o nível ${profile.level}!`)
        }
    }
}

// Função que exibe o status atual da batalha
function showBattleStatus(playerPokemon, enemyPokemon) {
    console.log("\n================================")
    console.log("📊 Status da Batalha 📊")
    console.log("================================")
    console.log(`🟢 Seu ${playerPokemon.name}`)
    console.log(`   Tipos: ${playerPokemon.types.join(", ")}`)
    console.log(`   HP: ${Math.max(0, playerPokemon.currentHP)}/${playerPokemon.stats.HP}`)
    showStatusEffects(playerPokemon)
    console.log(`\n🔴 ${enemyPokemon.name} selvagem`)
    console.log(`   Tipos: ${enemyPokemon.types.join(", ")}`)
    console.log(`   HP: ${Math.max(0, enemyPokemon.currentHP)}/${enemyPokemon.stats.HP}`)
    showStatusEffects(enemyPokemon)
    console.log("================================")
}

// Função que mostra os status ativos
function showStatusEffects(pokemon) {
    const activeStatus = []
    if (pokemon.status.frozen) activeStatus.push("❄️ Congelado")
    if (pokemon.status.burned) activeStatus.push("🔥 Queimado")
    if (pokemon.status.sleeping) activeStatus.push("💤 Dormindo")
    if (pokemon.status.paralyzed) activeStatus.push("⚡ Paralisado")
    if (pokemon.status.confused) activeStatus.push("💫 Confuso")
    if (pokemon.status.trapped) activeStatus.push("🕸️ Preso")
    
    if (activeStatus.length > 0) {
        console.log(`   Status: ${activeStatus.join(", ")}`)
    }
}

// Função que executa um turno de batalha
function executeTurn(attacker, defender, isPlayer) {
    // Verifica se pode atacar baseado nos status
    if (attacker.status.frozen) {
        if (Math.random() < 0.2) {
            attacker.status.frozen = false
            console.log(`\n❄️ ${attacker.name} se descongelou!`)
        } else {
            console.log(`\n❄️ ${attacker.name} está congelado e não pode atacar!`)
            return
        }
    }
    
    if (attacker.status.sleeping) {
        if (attacker.status.sleepTurns >= 3 || Math.random() < 0.3) {
            attacker.status.sleeping = false
            attacker.status.sleepTurns = 0
            console.log(`\n💤 ${attacker.name} acordou!`)
        } else {
            attacker.status.sleepTurns++
            console.log(`\n💤 ${attacker.name} está dormindo!`)
            return
        }
    }
    
    if (attacker.status.paralyzed && Math.random() < 0.25) {
        console.log(`\n⚡ ${attacker.name} está paralisado e não consegue se mover!`)
        return
    }
    
    let selectedMove
    
    if (isPlayer) {
        console.log("\n================================")
        console.log("🎯 Escolha seu movimento:")
        console.log("================================")
        attacker.moves.forEach((move, index) => {
            const moveData = moves.find(m => m.name === move)
            if (moveData) {
                console.log(`${index + 1}. ${move}`)
                console.log(`   Tipo: ${moveData.type}`)
                if (moveData.power > 0) {
                    console.log(`   Poder: ${moveData.power}`)
                } else {
                    console.log(`   Poder: - (Movimento de Status)`)
                }
                console.log(`   Precisão: ${moveData.accuracy}%`)
                if (moveData.effects) {
                    const effectType = {
                        "freeze": "Chance de congelar",
                        "burn": "Chance de queimar",
                        "sleep": "Chance de dormir",
                        "paralyze": "Chance de paralisar",
                        "confuse": "Chance de confundir",
                        "trap": "Chance de prender"
                    }
                    console.log(`   Efeito: ${effectType[moveData.effects.type]} (${moveData.effects.chance}%)`)
                }
            }
        })
        console.log("================================")
        
        let choice
        do {
            choice = parseInt(prompt("Digite o número do movimento (1-4):")) - 1
            if (isNaN(choice) || choice < 0 || choice >= attacker.moves.length) {
                console.log("❌ Movimento inválido! Por favor, escolha um número entre 1 e 4.")
            }
        } while (isNaN(choice) || choice < 0 || choice >= attacker.moves.length)
        
        selectedMove = attacker.moves[choice]
    } else {
        const validMoves = attacker.moves.filter(move => moves.find(m => m.name === move))
        selectedMove = validMoves[Math.floor(Math.random() * validMoves.length)]
    }
    
    const moveData = moves.find(move => move.name === selectedMove)
    
    if (!moveData) {
        console.log(`❌ Erro: Movimento ${selectedMove} não encontrado!`)
        return
    }

    // Verifica se o ataque acerta baseado na accuracy
    const accuracyRoll = Math.random() * 100
    if (accuracyRoll > moveData.accuracy) {
        console.log(`\n${isPlayer ? '🟢' : '🔴'} ${attacker.name} usou ${selectedMove}!`)
        console.log("❌ Mas errou!")
        return
    }

    console.log(`\n${isPlayer ? '🟢' : '🔴'} ${attacker.name} usou ${selectedMove}!`)

    // Se o movimento tem poder 0, é um movimento de status
    if (!moveData.power || moveData.power === 0) {
        applyMoveEffects(moveData, defender)
        return
    }

    // Aplica efeitos de status do movimento junto com o dano
    applyMoveEffects(moveData, defender)

    const {damage, effectiveness} = calculateDamage(attacker, defender, moveData)
    defender.currentHP = Math.max(0, defender.currentHP - damage)
    
    if (effectiveness > 1) {
        console.log("🎯 Foi super efetivo!")
    } else if (effectiveness < 1 && effectiveness > 0) {
        console.log("😕 Não foi muito efetivo...")
    } else if (effectiveness === 0) {
        console.log("❌ Não teve efeito!")
    }
    
    if (damage > 0) {
        console.log(`💥 Causou ${damage} de dano!`)
    }
}

// Função que aplica os efeitos dos movimentos
function applyMoveEffects(move, target) {
    if (!move.effects) return
    
    const chance = Math.random() * 100
    if (chance <= move.effects.chance) {
        switch (move.effects.type) {
            case "freeze":
                if (!target.status.frozen) {
                    target.status.frozen = true
                    console.log(`\n❄️ ${target.name} foi congelado! (${move.effects.chance}% de chance)`)
                }
                break
            case "burn":
                if (!target.status.burned) {
                    target.status.burned = true
                    console.log(`\n🔥 ${target.name} foi queimado! (${move.effects.chance}% de chance)`)
                }
                break
            case "sleep":
                if (!target.status.sleeping) {
                    target.status.sleeping = true
                    target.status.sleepTurns = 0
                    console.log(`\n💤 ${target.name} caiu no sono! (${move.effects.chance}% de chance)`)
                }
                break
            case "paralyze":
                if (!target.status.paralyzed) {
                    target.status.paralyzed = true
                    console.log(`\n⚡ ${target.name} foi paralisado! (${move.effects.chance}% de chance)`)
                }
                break
            case "confuse":
                if (!target.status.confused) {
                    target.status.confused = true
                    target.status.confusedTurns = 0
                    console.log(`\n💫 ${target.name} ficou confuso! (${move.effects.chance}% de chance)`)
                }
                break
            case "trap":
                if (!target.status.trapped) {
                    target.status.trapped = true
                    console.log(`\n🕸️ ${target.name} foi preso! (${move.effects.chance}% de chance)`)
                }
                break
        }
    }
}

// Função que aplica os efeitos de status no fim do turno
function applyStatusEffects(pokemon) {
    if (pokemon.status.burned) {
        const burnDamage = Math.max(1, Math.floor(pokemon.stats.HP / 16))
        pokemon.currentHP = Math.max(0, pokemon.currentHP - burnDamage)
        console.log(`\n🔥 ${pokemon.name} sofreu ${burnDamage} de dano pela queimadura!`)
    }
    
    if (pokemon.status.confused) {
        if (pokemon.status.confusedTurns >= 4 || Math.random() < 0.25) {
            pokemon.status.confused = false
            pokemon.status.confusedTurns = 0
            console.log(`\n💫 ${pokemon.name} não está mais confuso!`)
        } else {
            pokemon.status.confusedTurns++
            if (Math.random() < 0.33) {
                const confusionDamage = Math.max(1, Math.floor(pokemon.stats.HP / 8))
                pokemon.currentHP = Math.max(0, pokemon.currentHP - confusionDamage)
                console.log(`\n💫 ${pokemon.name} se machucou em sua confusão! (${confusionDamage} de dano)`)
            }
        }
    }
}

// Função que calcula o dano causado por um movimento
function calculateDamage(attacker, defender, move) {
    // Se o movimento não tem poder (como Growl ou Tail Whip), retorna 0 de dano
    if (!move.power || move.power === 0) {
        return {
            damage: 0,
            effectiveness: 1
        }
    }
    
    let baseDamage = Math.floor((attacker.stats.ATTACK * move.power) / defender.stats.DEFENSE)
    
    // Modificadores de status
    if (attacker.status.burned) {
        baseDamage = Math.floor(baseDamage * 0.5)
    }
    
    const typeMultiplier = getTypeEffectiveness(move.type, defender.types)
    
    // Garante dano mínimo de 1 se o movimento não for inefetivo
    const finalDamage = typeMultiplier > 0 ? Math.max(1, Math.floor(baseDamage * typeMultiplier)) : 0
    
    return {
        damage: finalDamage,
        effectiveness: typeMultiplier
    }
}

// Função que calcula a efetividade do tipo do movimento contra os tipos do defensor
function getTypeEffectiveness(moveType, defenderTypes) {
    const typeChart = {
        "Bug": {
            "Grass": 2.0, "Poison": 2.0, "Psychic": 2.0,
            "Fighting": 0.5, "Flying": 0.5, "Ghost": 0.5,
            "Fire": 0.5, "Steel": 0.5, "Fairy": 0.5
        },
        "Dragon": {
            "Dragon": 2.0,
            "Steel": 0.5,
            "Fairy": 0.0
        },
        "Electric": {
            "Water": 2.0, "Flying": 2.0,
            "Grass": 0.5, "Electric": 0.5, "Dragon": 0.5,
            "Ground": 0.0
        },
        "Fairy": {
            "Fighting": 2.0, "Dragon": 2.0, "Dark": 2.0,
            "Fire": 0.5, "Poison": 0.5, "Steel": 0.5
        },
        "Fighting": {
            "Normal": 2.0, "Ice": 2.0, "Rock": 2.0, "Dark": 2.0, "Steel": 2.0,
            "Flying": 0.5, "Poison": 0.5, "Bug": 0.5, "Psychic": 0.5, "Fairy": 0.5,
            "Ghost": 0.0
        },
        "Fire": {
            "Grass": 2.0, "Ice": 2.0, "Bug": 2.0, "Steel": 2.0,
            "Fire": 0.5, "Water": 0.5, "Rock": 0.5, "Dragon": 0.5
        },
        "Flying": {
            "Grass": 2.0, "Fighting": 2.0, "Bug": 2.0,
            "Electric": 0.5, "Rock": 0.5, "Steel": 0.5
        },
        "Ghost": {
            "Ghost": 2.0, "Psychic": 2.0,
            "Dark": 0.5,
            "Normal": 0.0
        },
        "Grass": {
            "Water": 2.0, "Ground": 2.0, "Rock": 2.0,
            "Fire": 0.5, "Grass": 0.5, "Poison": 0.5, "Flying": 0.5, "Bug": 0.5, "Dragon": 0.5, "Steel": 0.5
        },
        "Ground": {
            "Fire": 2.0, "Electric": 2.0, "Poison": 2.0, "Rock": 2.0, "Steel": 2.0,
            "Grass": 0.5, "Bug": 0.5,
            "Flying": 0.0
        },
        "Ice": {
            "Grass": 2.0, "Ground": 2.0, "Flying": 2.0, "Dragon": 2.0,
            "Fire": 0.5, "Water": 0.5, "Ice": 0.5, "Steel": 0.5
        },
        "Normal": {
            "Rock": 0.5, "Steel": 0.5,
            "Ghost": 0.0
        },
        "Poison": {
            "Grass": 2.0, "Fairy": 2.0,
            "Poison": 0.5, "Ground": 0.5, "Rock": 0.5, "Ghost": 0.5, "Steel": 0.0
        },
        "Psychic": {
            "Fighting": 2.0, "Poison": 2.0,
            "Psychic": 0.5, "Steel": 0.5,
            "Dark": 0.0
        },
        "Rock": {
            "Fire": 2.0, "Ice": 2.0, "Flying": 2.0, "Bug": 2.0,
            "Fighting": 0.5, "Ground": 0.5, "Steel": 0.5
        },
        "Steel": {
            "Ice": 2.0, "Rock": 2.0, "Fairy": 2.0,
            "Fire": 0.5, "Water": 0.5, "Electric": 0.5, "Steel": 0.5
        },
        "Dark": {
            "Ghost": 2.0, "Psychic": 2.0,
            "Fighting": 0.5, "Dark": 0.5, "Fairy": 0.5
        },
        "Water": {
            "Fire": 2.0, "Ground": 2.0, "Rock": 2.0,
            "Water": 0.5, "Grass": 0.5, "Dragon": 0.5
        }
    }

    let multiplier = 1.0
    defenderTypes.forEach(defenderType => {
        if (typeChart[moveType] && typeChart[moveType][defenderType] !== undefined) {
            multiplier *= typeChart[moveType][defenderType]
        }
    })

    return multiplier
}

// Função que atualiza o registro de batalhas do treinador
function updateBattleRecord(isVictory, profile) {
    // Atualiza vitórias e derrotas
    if (isVictory) {
        profile.victories++
    } else {
        profile.defeats++
    }

    // Atualiza data da última batalha
    profile.lastBattle = new Date().toLocaleString()

    // Atualiza experiência e nível
    if (isVictory) {
        profile.experience += 50
        while (profile.experience >= profile.level * 200) {
            profile.experience -= profile.level * 200
            profile.level++
            console.log(`\n🌟 Parabéns! Você subiu para o nível ${profile.level}!`)
        }
    } else {
        profile.experience += 20
        while (profile.experience >= profile.level * 200) {
            profile.experience -= profile.level * 200
            profile.level++
            console.log(`\n🌟 Parabéns! Você subiu para o nível ${profile.level}!`)
        }
    }

    // Calcula taxa de vitória
    const totalBattles = profile.victories + profile.defeats
    const winRate = totalBattles > 0 ? ((profile.victories / totalBattles) * 100).toFixed(1) : 0

    // Exibe resultados
    console.log("\n====================================")
    console.log(isVictory ? "🏆 VITÓRIA!" : "💔 DERROTA...")
    console.log("====================================")
    console.log(`📊 ESTATÍSTICAS ATUALIZADAS:`)
    console.log(`   ✅ Vitórias: ${profile.victories}`)
    console.log(`   ❌ Derrotas: ${profile.defeats}`) 
    console.log(`   📈 Taxa de Vitória: ${winRate}%`)
    console.log(`   📊 Nível: ${profile.level}`)
    console.log(`   ⭐ Experiência: ${profile.experience}/${profile.level * 200}`)
    console.log("====================================")
}

//==============================================================================================================

// Inicializa o programa
startGame()
