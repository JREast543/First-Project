function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
    }

    const characters = {
        anime: ["Madara", "Ino", "Mito", "Naruto"],
        starWars: ["Revan", "Bastilla", "Ahsoka", "Satele"],
        halo: ["Master Chief", "Cortanna", "Lasky", "Spirit Of Fire", "Halo Ring"]
    }

    let messageWisdom = []


    function formatWisdom(wisdom){
        const formatted = messageWisdom.join('\n')
        console.log(formatted)
    }

    formatWisdom(messageWisdom);