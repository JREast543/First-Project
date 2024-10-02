function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
    }

    const characters = {
        anime: ["Madara", "Ino", "Mito", "Naruto"],
        starWars: ["Revan", "Bastilla", "Ahsoka", "Satele"],
        halo: ["Master Chief", "Cortanna", "Lasky", "Spirit Of Fire", "Halo Ring"]
    }

    let messageWisdom = []

    for (let name in characters){
        let optionIdx = generateRandomNumber(characters[name].length)


        switch(name) {
            case "anime":
                messageWisdom.push(`Anime name generated is: "${characters[name][optionIdx]}".`)
                break
            case "starWars":
                messageWisdom.push(`Star wars name generated is: "${characters[name][optionIdx]}".`)
                break
            case "halo":
                messageWisdom.push(`Halo name generated is: "${characters[name][optionIdx]}".`)
                break
            default:
                messageWisdom.push(`not enough infomation present to formulate a response.`)
        }
    }

    
    function formatWisdom(wisdom){
        const formatted = messageWisdom.join('\n')
        console.log(formatted)
    }

    formatWisdom(messageWisdom);