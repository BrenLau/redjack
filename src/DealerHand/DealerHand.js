import './dealerhand.css'
import Card from '../Card/Card'
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers'

const DealerHand = ({ card, cardCount }) => {
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

    const calcOdds = (start, aces, twos, threes, fours, fives, sixes, sevens, eights, nines, tens, total) => {

        let count = 0
        let acess = 0
        if (start === 'J' || start === 'Q' || start === 'K' || start === 'T') {
            count += 10
        } else if (start === 'A') {
            acess += 1
            count += 11
        } else {
            count += Number(start)
        }

        let odds17 = 0
        let odds18 = 0
        let odds19 = 0
        let odds20 = 0
        let odds21 = 0
        let bust = 0

        for (let i = 10; i > 0; i--) {
            let imaginaryCount = count
            let iTotal = total
            let iAces = aces
            let iTwos = twos
            let iThrees = threes
            let iFours = fours
            let iFives = fives
            let iSixes = sixes
            let iSevens = sevens
            let iEights = eights
            let iNines = nines
            let iTens = tens


            let num = i === 10 ? iTens : i === 9 ? iNines : i === 8 ? iEights : i === 7 ? iSevens : i === 6 ? iSixes : i === 5 ? iFives : i === 4 ? iFours : i === 3 ? iThrees : i === 2 ? iTwos : iAces

            if (imaginaryCount + i == 17) {
                odds17 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i == 18) {
                odds18 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i == 19) {
                odds19 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i == 20) {
                odds20 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i == 21) {
                odds21 += (num / iTotal)
                continue;
            }

            for (let x = 7; x > 0; x--) {
                let secNum = x === 10 ? iTens : x === 9 ? iNines : x === 8 ? iEights : x === 7 ? iSevens : x === 6 ? iSixes : x === 5 ? iFives : x === 4 ? iFours : x === 3 ? iThrees : x === 2 ? iTwos : iAces
                if (imaginaryCount + i + x == 17) {
                    odds17 += (num / iTotal) * (secNum / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x == 18) {
                    odds18 += (num / iTotal) * (secNum / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x == 19) {
                    odds19 += (num / iTotal) * (secNum / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x == 20) {
                    odds20 += (num / iTotal) * (secNum / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x == 21) {
                    odds21 += (num / iTotal) * (secNum / (iTotal - 1))
                    continue;
                }
                //  else if (imaginaryCount + i + x > 21) {
                //     bust += (num / iTotal) * (secNum / (iTotal - 1))
                // }
                for (let y = 6; y > 0; y--) {
                    let thirdNum = y === 10 ? iTens : y === 9 ? iNines : y === 8 ? iEights : y === 7 ? iSevens : y === 6 ? iSixes : y === 5 ? iFives : y === 4 ? iFours : y === 3 ? iThrees : y === 2 ? iTwos : iAces
                    if (imaginaryCount + i + x + y == 17) {
                        odds17 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y == 18) {
                        odds18 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y == 19) {
                        odds19 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y == 20) {
                        odds20 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y == 21) {
                        odds21 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2))
                        continue;
                    }

                    for (let b = 5; b > 0; b--) {
                        let fourthNum = b === 10 ? iTens : b === 9 ? iNines : b === 8 ? iEights : b === 7 ? iSevens : b === 6 ? iSixes : b === 5 ? iFives : b === 4 ? iFours : b === 3 ? iThrees : b === 2 ? iTwos : iAces
                        if (imaginaryCount + i + x + y + b == 17) {
                            odds17 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b == 18) {
                            odds18 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b == 19) {
                            odds19 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b == 20) {
                            odds20 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b == 21) {
                            odds21 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3))
                            continue;
                        }
                        for (let c = 4; c > 0; c--) {
                            let fifthNum = c === 10 ? iTens : c === 9 ? iNines : c === 8 ? iEights : c === 7 ? iSevens : c === 6 ? iSixes : c === 5 ? iFives : c === 4 ? iFours : c === 3 ? iThrees : c === 2 ? iTwos : iAces
                            if (imaginaryCount + i + x + y + b + c == 17) {
                                odds17 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c == 18) {
                                odds18 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c == 19) {
                                odds19 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c == 20) {
                                odds20 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c == 21) {
                                odds21 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4))
                                continue;
                            }

                            for (let d = 3; d > 0; d--) {
                                let sixthNum = d === 10 ? iTens : d === 9 ? iNines : d === 8 ? iEights : d === 7 ? iSevens : d === 6 ? iSixes : d === 5 ? iFives : d === 4 ? iFours : d === 3 ? iThrees : d === 2 ? iTwos : iAces
                                if (imaginaryCount + i + x + y + b + c + d == 17) {
                                    odds17 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4)) * (sixthNum / (iTotal - 5))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + d == 18) {
                                    odds18 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4)) * (sixthNum / (iTotal - 5))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + d == 19) {
                                    odds19 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4))
                                    continue;
                                }

                                for (let e = 2; e > 0; e--) {
                                    let seventhNum = e === 10 ? iTens : e === 9 ? iNines : e === 8 ? iEights : e === 7 ? iSevens : e === 6 ? iSixes : e === 5 ? iFives : e === 4 ? iFours : e === 3 ? iThrees : e === 2 ? iTwos : iAces
                                    if (imaginaryCount + i + x + y + b + c + d + e == 17) {
                                        odds17 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + e == 18) {
                                        odds18 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    }
                                    for (let f = 1; f > 0; f--) {
                                        let eightNum = f === 10 ? iTens : f === 9 ? iNines : f === 8 ? iEights : f === 7 ? iSevens : f === 6 ? iSixes : f === 5 ? iFives : f === 4 ? iFours : f === 3 ? iThrees : f === 2 ? iTwos : iAces
                                        if (imaginaryCount + i + x + y + b + c + d + e + f == 17) {
                                            odds17 += (num / iTotal) * (secNum / (iTotal - 1)) * (thirdNum / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * (fifthNum / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7))
                                            continue;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
        console.log(odds17 + odds18 + odds19 + odds20 + odds21)


        // if (count == 11) {
        //     ways17 += sixes / total
        //     ways17 += (fives / total) * (aces / (total))
        //     ways17 += (fours / total) * (twos / (total))
        //     ways17 += (threes / total) * ((threes - 1) / (total - 1))

        //     ways18 += sevens / total
        //     ways18 += ((sixes / total) * (aces / total)) / 2
        //     ways18 += (fives / total) * (twos / total)
        //     ways18 += (fours / total) * (threes / total)

        //     ways19 += eights / total
        //     ways19 += ((sevens / total) * (aces / total)) / 2
        //     ways19 += ((sixes / total) * (twos / total)) / 2
        //     ways19 += (fives / total) * (threes / total)
        //     ways19 += (fours / total) * ((fours - 1) / (total - 1))

        //     ways20 += nines / total
        //     ways20 += ((eights / total) * (aces / total)) / 2
        //     ways20 += ((sevens / total) * (twos / total)) / 2
        //     ways20 += ((sixes / total) * (threes / total)) / 2
        //     ways20 += (fives / total) * (fours / total)

        //     ways21 += tens / total
        //     ways21 += ((nines / total) * (aces / total)) / 2
        //     ways21 += ((eights / total) * (twos / total)) / 2
        //     ways21 += ((sevens / total) * (threes / total)) / 2
        //     ways21 += ((sixes / total) * (fours / total)) / 2
        //     ways21 += (fives / total) * ((fives - 1) / (total - 1))
        // }

        // if (count == 2) {
        //     ways17 += (tens / total) * (fives / total)
        //     ways17 += (aces / total) * (fours / total)
        //     ways17 += (nines / total) * (sixes / total)
        //     ways17 += (eights / total) * (sevens / total)
        //     ways17 += (fours / total) * ((fours - 1) / (total - 1)) * (sevens / (total - 2))
        //     ways17 += (threes / total) * (threes / total) * (nines / total)
        //     ways17 += (fours / total) * (threes / total) * (eights / total)
        //     ways17 += (fives / total) * (fours / total) * (sixes / total)
        //     ways17 += (fives / total) * ((fives - 1) / (total - 1)) * ((fives - 1) / (total - 1))
        //     ways17 += (tens / total) * (fours / total) * (aces / total)
        //     ways17 += (tens / total) * (threes / total) * (twos / total)
        //     ways17 += (sixes / total) * ((sixes - 1) / (total - 1)) * (threes / total)
        //     ways17 += (nines / total) * (fours / total) * (twos / total)
        //     ways17 += (nines / total) * (fives / total) * (aces / total)

        //     ways18 += (tens / total) * (sixes / total)
        //     ways18 += (aces / total) * (fives / total)
        //     ways18 += (tens / total) * (fives / total) * (aces / total)
        //     ways18 += (tens / total) * (fours / total) * (twos / total)
        //     ways18 += (tens / total) * (threes / total) * ((threes - 1) / (total - 1))
        //     ways18 += (nines / total) * (sevens / total)
        //     ways18 += (nines / total) * (sixes / total) * (aces / total)
        //     ways18 += (nines / total) * (fives / total) * (twos / total)
        //     ways18 += (nines / total) * (fours / total) * (threes / total)
        //     ways18 += (eights / total) * ((eights - 1) / (total - 1))
        //     ways18 += (eights / total) * (sevens / total) * (aces / total)
        //     ways18 += (eights / total) * (sixes / total) * (twos / total)
        //     ways18 += (sevens / total) * (nines / total)
        //     ways18 += (sevens / total) * (sevens / total) * (twos / total)
        //     ways18 += (sevens / total) * (sixes / total) * (threes / total)
        //     ways18 += (sevens / total) * (fives / total) * (fours / total)

        //     ways19 += (tens / total) * (sevens / total)
        //     ways19 += (aces / total) * (sixes / total)
        //     ways19 += (tens / total) * (sixes / total) * (aces / total)
        //     ways19 += (tens / total) * (sixes / total) * (twos / total)
        //     ways19 += (tens / total) * (fives / total) * (threes / total)
        //     ways19 += (tens / total) * (fours / total) * ((fours - 1) / (total - 1))
        //     ways19 += (nines / total) * (eights / total)
        //     ways19 += (nines / total) * (sevens / total) * (aces / total)
        //     ways19 += (nines / total) * (sixes / total) * (twos / total)
        //     ways19 += (nines / total) * (fives / total) * (threes / total)
        //     ways19 += (eights / total) * (nines / total)
        //     ways19 += (eights / total) * ((eights - 1) / (total - 1)) * (aces / total)
        //     ways19 += (eights / total) * (sevens / total) * (twos / total)
        //     ways19 += (eights / total) * (sixes / total) * (threes / total)
        //     ways19 += (eights / total) * (fives / total) * (fours / total)

        //     ways20 += (tens / total) * (eights / total)
        //     ways20 += ((tens / total) * (sevens / total) * (aces / total)) / 2
        //     ways20 += ((tens / total) * (sixes / total) * (twos / total)) / 2
        //     ways20 += ((tens / total) * (fives / total) * (threes / total)) / 2
        //     ways20 += (tens / total) * (fours / total) * (fours / total)
        //     ways20 += (nines / total) * ((nines - 1) / (total - 1))
        //     ways20 += ((nines / total) * (eights / total) * (aces / total)) / 2
        //     ways20 += ((nines / total) * (sevens / total) * (twos / total)) / 2
        //     ways20 += ((nines / total) * (sixes / total) * (threes / total)) / 2
        //     ways20 += ((nines / total) * (fives / total) * (fours / total)) / 2
        //     ways20 += (eights / total) * (fives / total) * ((fives - 1) / (total - 1))
        //     ways20 += (eights / total) * (sixes / total) * (fours / total)
        //     ways20 += ((eights / total) * (sevens / total) * (threes / total)) / 2
        //     ways20 += (sevens / total) * (aces / total)
        //     ways20 += (aces / total) * (sixes / total) * (aces / total)
        //     ways20 += (aces / total) * (fives / total) * (fours / total)


        // }



        // console.log(parseFloat(ways20).toFixed(4))




    }

    calcOdds(card[0], Number(aceCount), Number(twoCount), Number(threeCount), Number(fourCount), Number(fiveCount), Number(sixCount), Number(sevenCount), Number(eightCount), Number(nineCount), Number(tenCount), totalCount)




    return (
        <div className='dealerspot'>
            {card ? <Card card={card} noClick={true} /> : null}
        </div>
    )
}

export default DealerHand
