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
