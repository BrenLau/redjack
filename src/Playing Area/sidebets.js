export const calculatePairs = (cardCount) => {
    let aceCount = cardCount['AS'] + cardCount['AH'] + cardCount['AC'] + cardCount['AD']
    let twoCount = cardCount['2S'] + cardCount['2H'] + cardCount['2C'] + cardCount['2D']
    let threeCount = cardCount['3S'] + cardCount['3H'] + cardCount['3C'] + cardCount['3D']
    let fourCount = cardCount['4S'] + cardCount['4H'] + cardCount['4C'] + cardCount['4D']
    let fiveCount = cardCount['5S'] + cardCount['5H'] + cardCount['5C'] + cardCount['5D']
    let sixCount = cardCount['6S'] + cardCount['6H'] + cardCount['6C'] + cardCount['6D']
    let sevenCount = cardCount['7S'] + cardCount['7H'] + cardCount['7C'] + cardCount['7D']
    let eightCount = cardCount['8S'] + cardCount['8H'] + cardCount['8C'] + cardCount['8D']
    let nineCount = cardCount['9S'] + cardCount['9H'] + cardCount['9C'] + cardCount['9D']
    let tenCount = cardCount['TS'] + cardCount['TH'] + cardCount['TC'] + cardCount['TD'] + cardCount['JS'] + cardCount['JH'] + cardCount['JC'] + cardCount['JD'] + cardCount['QS'] + cardCount['QH'] + cardCount['QC'] + cardCount['QD'] + cardCount['KS'] + cardCount['KH'] + cardCount['KC'] + cardCount['KD']
    let totalCount = aceCount + twoCount + threeCount + fourCount + fiveCount + sixCount + sevenCount + eightCount + nineCount + tenCount
    let prob = 0

    prob += ((aceCount / totalCount) * ((aceCount - 1) / (totalCount - 1)))
    prob += ((twoCount / totalCount) * ((twoCount - 1) / (totalCount - 1)))
    prob += ((threeCount / totalCount) * ((threeCount - 1) / (totalCount - 1)))
    prob += ((fourCount / totalCount) * ((fourCount - 1) / (totalCount - 1)))
    prob += ((fiveCount / totalCount) * ((fiveCount - 1) / (totalCount - 1)))
    prob += ((sixCount / totalCount) * ((sixCount - 1) / (totalCount - 1)))
    prob += ((sevenCount / totalCount) * ((sevenCount - 1) / (totalCount - 1)))
    prob += ((eightCount / totalCount) * ((eightCount - 1) / (totalCount - 1)))
    prob += ((nineCount / totalCount) * ((nineCount - 1) / (totalCount - 1)))
    prob += ((tenCount / totalCount) * ((tenCount - 1) / (totalCount - 1)))

    return prob
}

export const calculateTrios = (cardCount) => {
    let aceCount = cardCount['AS'] + cardCount['AH'] + cardCount['AC'] + cardCount['AD']
    let twoCount = cardCount['2S'] + cardCount['2H'] + cardCount['2C'] + cardCount['2D']
    let threeCount = cardCount['3S'] + cardCount['3H'] + cardCount['3C'] + cardCount['3D']
    let fourCount = cardCount['4S'] + cardCount['4H'] + cardCount['4C'] + cardCount['4D']
    let fiveCount = cardCount['5S'] + cardCount['5H'] + cardCount['5C'] + cardCount['5D']
    let sixCount = cardCount['6S'] + cardCount['6H'] + cardCount['6C'] + cardCount['6D']
    let sevenCount = cardCount['7S'] + cardCount['7H'] + cardCount['7C'] + cardCount['7D']
    let eightCount = cardCount['8S'] + cardCount['8H'] + cardCount['8C'] + cardCount['8D']
    let nineCount = cardCount['9S'] + cardCount['9H'] + cardCount['9C'] + cardCount['9D']
    let tenCount = cardCount['TS'] + cardCount['TH'] + cardCount['TC'] + cardCount['TD'] + cardCount['JS'] + cardCount['JH'] + cardCount['JC'] + cardCount['JD'] + cardCount['QS'] + cardCount['QH'] + cardCount['QC'] + cardCount['QD'] + cardCount['KS'] + cardCount['KH'] + cardCount['KC'] + cardCount['KD']
    let totalCount = aceCount + twoCount + threeCount + fourCount + fiveCount + sixCount + sevenCount + eightCount + nineCount + tenCount
    let prob = 0

    prob += ((aceCount / totalCount) * ((aceCount - 1) / (totalCount - 1)) * ((aceCount - 2) / (totalCount - 2)))
    prob += ((twoCount / totalCount) * ((twoCount - 1) / (totalCount - 1))) * ((twoCount - 2) / (totalCount - 2))
    prob += ((threeCount / totalCount) * ((threeCount - 1) / (totalCount - 1))) * ((threeCount - 2) / (totalCount - 2))
    prob += ((fourCount / totalCount) * ((fourCount - 1) / (totalCount - 1))) * ((fourCount - 2) / (totalCount - 2))
    prob += ((fiveCount / totalCount) * ((fiveCount - 1) / (totalCount - 1))) * ((fiveCount - 2) / (totalCount - 2))
    prob += ((sixCount / totalCount) * ((sixCount - 1) / (totalCount - 1))) * ((sixCount - 2) / (totalCount - 2))
    prob += ((sevenCount / totalCount) * ((sevenCount - 1) / (totalCount - 1))) * ((sevenCount - 2) / (totalCount - 2))
    prob += ((eightCount / totalCount) * ((eightCount - 1) / (totalCount - 1))) * ((eightCount - 2) / (totalCount - 2))
    prob += ((nineCount / totalCount) * ((nineCount - 1) / (totalCount - 1))) * ((nineCount - 2) / (totalCount - 2))
    prob += ((tenCount / totalCount) * ((tenCount - 1) / (totalCount - 1))) * ((tenCount - 2) / (totalCount - 2))

    return prob
}

export const calculateFlush = (cardCount) => {
    let heartCount = 0
    let spadeCount = 0
    let clubCount = 0
    let diamondCount = 0
    let totalCount = 0

    for (let key in cardCount) {
        if (key[1] === 'H') {
            heartCount += cardCount[key]
        } else if (key[1] === 'S') {
            spadeCount += cardCount[key]
        } else if (key[1] === 'C') {
            clubCount += cardCount[key]
        } else if (key[1] === 'D') {
            diamondCount += cardCount[key]
        }
        totalCount += cardCount[key]
    }

    let prob = 0
    prob += ((heartCount / totalCount) * ((heartCount - 1) / (totalCount - 2)) * ((heartCount - 2) / (totalCount - 2)))
    prob += ((spadeCount / totalCount) * ((spadeCount - 1) / (totalCount - 2)) * ((spadeCount - 2) / (totalCount - 2)))
    prob += ((clubCount / totalCount) * ((clubCount - 1) / (totalCount - 2)) * ((clubCount - 2) / (totalCount - 2)))
    prob += ((diamondCount / totalCount) * ((diamondCount - 1) / (totalCount - 2)) * ((diamondCount - 2) / (totalCount - 2)))

    return prob
}

export const calculateStraight = (cardCount) => {
    let counts = {
        A: cardCount['AS'] + cardCount['AH'] + cardCount['AC'] + cardCount['AD'],
        2: cardCount['2S'] + cardCount['2H'] + cardCount['2C'] + cardCount['2D'],
        3: cardCount['3S'] + cardCount['3H'] + cardCount['3C'] + cardCount['3D'],
        4: cardCount['4S'] + cardCount['4H'] + cardCount['4C'] + cardCount['4D'],
        5: cardCount['5S'] + cardCount['5H'] + cardCount['5C'] + cardCount['5D'],
        6: cardCount['6S'] + cardCount['6H'] + cardCount['6C'] + cardCount['6D'],
        7: cardCount['7S'] + cardCount['7H'] + cardCount['7C'] + cardCount['7D'],
        8: cardCount['8S'] + cardCount['8H'] + cardCount['8C'] + cardCount['8D'],
        9: cardCount['9S'] + cardCount['9H'] + cardCount['9C'] + cardCount['9D'],
        T: cardCount['TS'] + cardCount['TH'] + cardCount['TC'] + cardCount['TD'],
        J: cardCount['JS'] + cardCount['JH'] + cardCount['JC'] + cardCount['JD'],
        Q: cardCount['QS'] + cardCount['QH'] + cardCount['QC'] + cardCount['QD'],
        K: cardCount['KS'] + cardCount['KH'] + cardCount['KC'] + cardCount['KD'],
    }
    const totalCount = counts['A'] + counts['2'] + counts['3'] + counts['4'] + counts['5'] + counts['6'] + counts['7'] + counts['8'] + counts['9'] + counts['T'] + counts['J'] + counts['Q'] + counts['K']
    let prob = 0

    for (let i = 1; i <= 13; i++) {
        let x = i === 1 ? 'A' : i === 11 ? 'J' : i === 12 ? 'Q' : i === 13 ? 'K' : i === 10 ? 'T' : i
        let y = i + 1 === 14 ? 'A' : i + 1 === 11 ? 'J' : i + 1 === 12 ? 'Q' : i + 1 === 13 ? 'K' : i + 1 === 10 ? 'T' : i + 1
        let z = i + 2 === 14 ? 'A' : i + 2 === 15 ? '2' : i + 2 === 11 ? 'J' : i + 2 === 12 ? 'Q' : i + 2 === 13 ? 'K' : i + 2 === 10 ? 'T' : i + 2

        prob += (counts[x] / totalCount) * ((counts[y]) / (totalCount - 1)) * (counts[z] / (totalCount - 2))

    }
    return prob
}
