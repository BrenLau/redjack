import './dealerhand.css'
import Card from '../Card/Card'
import { useState, useEffect } from 'react'

const DealerHand = ({ card, cardCount, ResetButton, countHand, yourCards }) => {
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
    const [odds, setOdds] = useState({})

    useEffect(() => {
        if (card) {
            setOdds(calcOdds(card[0], Number(aceCount), Number(twoCount), Number(threeCount), Number(fourCount), Number(fiveCount), Number(sixCount), Number(sevenCount), Number(eightCount), Number(nineCount), Number(tenCount), totalCount))
        }
    }, [card, cardCount])

    const [yourCardCount, setYourCardCount] = useState()

    useEffect(() => {
        setYourCardCount(countHand(yourCards))
    }, [yourCards])

    const calcOdds = (start, iAces, iTwos, iThrees, iFours, iFives, iSixes, iSevens, iEights, iNines, iTens, iTotal) => {

        let imaginaryCount = 0
        if (start === 'J' || start === 'Q' || start === 'K' || start === 'T') {
            imaginaryCount += 10
        } else if (start === 'A') {
            imaginaryCount += 1
        } else {
            imaginaryCount += Number(start)
        }

        let odds17 = 0
        let odds18 = 0
        let odds19 = 0
        let odds20 = 0
        let odds21 = 0

        for (let i = 1; i <= 10; i++) {

            let num = i === 10 ? iTens : i === 9 ? iNines : i === 8 ? iEights : i === 7 ? iSevens : i === 6 ? iSixes : i === 5 ? iFives : i === 4 ? iFours : i === 3 ? iThrees : i === 2 ? iTwos : iAces
            if (num <= 0) continue;
            if (imaginaryCount + i === 17) {
                odds17 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i === 18) {
                odds18 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i === 19) {
                odds19 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i === 20) {
                odds20 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i === 21) {
                odds21 += (num / iTotal)
                continue;
            } else if (imaginaryCount + i < 17 && (imaginaryCount === 1 || i === 1)) {
                if (imaginaryCount + i + 10 === 17) {
                    odds17 += (num / iTotal)
                    continue;
                } else if (imaginaryCount + i + 10 === 18) {
                    odds18 += (num / iTotal)
                    continue;
                } else if (imaginaryCount + i + 10 === 19) {
                    odds19 += (num / iTotal)
                    continue;
                } else if (imaginaryCount + i + 10 === 20) {
                    odds20 += (num / iTotal)
                    continue;
                } else if (imaginaryCount + i + 10 === 21) {
                    odds21 += (num / iTotal)
                    continue;
                }
            }

            for (let x = 1; x <= 10; x++) {
                let dups1 = 0
                if (x === i) {
                    dups1++
                }
                let secNum = x === 10 ? iTens : x === 9 ? iNines : x === 8 ? iEights : x === 7 ? iSevens : x === 6 ? iSixes : x === 5 ? iFives : x === 4 ? iFours : x === 3 ? iThrees : x === 2 ? iTwos : iAces
                if (secNum - dups1 <= 0) continue;
                if (imaginaryCount + i + x === 17) {
                    odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x === 18) {
                    odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x === 19) {
                    odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x === 20) {
                    odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x === 21) {
                    odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                    continue;
                } else if (imaginaryCount + i + x < 17 && (imaginaryCount === 1 || i === 1 || x === 1)) {
                    if (imaginaryCount + i + x + 10 === 17) {
                        odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                        continue;
                    } else if (imaginaryCount + i + x + 10 === 18) {
                        odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                        continue;
                    } else if (imaginaryCount + i + x + 10 === 19) {
                        odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                        continue;
                    } else if (imaginaryCount + i + x + 10 === 20) {
                        odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                        continue;
                    } else if (imaginaryCount + i + x + 10 === 21) {
                        odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1))
                        continue;
                    }
                }

                for (let y = 1; y <= 10; y++) {
                    let dups2 = 0
                    if (i === y) {
                        dups2++
                    }
                    if (x === y) {
                        dups2++
                    }
                    let thirdNum = y === 10 ? iTens : y === 9 ? iNines : y === 8 ? iEights : y === 7 ? iSevens : y === 6 ? iSixes : y === 5 ? iFives : y === 4 ? iFours : y === 3 ? iThrees : y === 2 ? iTwos : iAces
                    if (thirdNum - dups2 <= 0) continue

                    if (imaginaryCount + i + x + y === 17) {
                        odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y === 18) {
                        odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y === 19) {
                        odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y === 20) {
                        odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y === 21) {
                        odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                        continue;
                    } else if (imaginaryCount + i + x + y < 17 && (imaginaryCount === 1 || i === 1 || x === 1 || y === 1)) {
                        if (imaginaryCount + i + x + y + 10 === 17) {
                            odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                            continue;
                        } else if (imaginaryCount + i + x + y + 10 === 18) {
                            odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                            continue;
                        } else if (imaginaryCount + i + x + y + 10 === 19) {
                            odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                            continue;
                        } else if (imaginaryCount + i + x + y + 10 === 20) {
                            odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                            continue;
                        } else if (imaginaryCount + i + x + y + 10 === 21) {
                            odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2))
                            continue;
                        }
                    }

                    for (let b = 1; b <= 8; b++) {
                        let dups3 = 0
                        if (i === b) {
                            dups3++
                        }
                        if (x === b) {
                            dups3++
                        }
                        if (y === b) {
                            dups3++
                        }
                        let fourthNum = b === 10 ? iTens : b === 9 ? iNines : b === 8 ? iEights : b === 7 ? iSevens : b === 6 ? iSixes : b === 5 ? iFives : b === 4 ? iFours : b === 3 ? iThrees : b === 2 ? iTwos : iAces
                        if (fourthNum - dups3 <= 0) continue;

                        if (imaginaryCount + i + x + y + b === 17) {
                            odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b === 18) {
                            odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b === 19) {
                            odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b === 20) {
                            odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b === 21) {
                            odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                            continue;
                        } else if (imaginaryCount + i + x + y + b < 17 && (imaginaryCount === 1 || i === 1 || x === 1 || y === 1 || b === 1)) {
                            if (imaginaryCount + i + x + y + b + 10 === 17) {
                                odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + 10 === 18) {
                                odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + 10 === 19) {
                                odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + 10 === 20) {
                                odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + 10 === 21) {
                                odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3))
                                continue;
                            }
                        }

                        for (let c = 1; c <= 7; c++) {
                            let dups4 = 0
                            if (i === c) {
                                dups4++
                            }
                            if (x === c) {
                                dups4++
                            }
                            if (y === c) {
                                dups4++
                            }
                            if (b === c) {
                                dups4++
                            }
                            let fifthNum = c === 10 ? iTens : c === 9 ? iNines : c === 8 ? iEights : c === 7 ? iSevens : c === 6 ? iSixes : c === 5 ? iFives : c === 4 ? iFours : c === 3 ? iThrees : c === 2 ? iTwos : iAces
                            if (fifthNum - dups4 <= 0) continue;

                            if (imaginaryCount + i + x + y + b + c === 17) {
                                odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c === 18) {
                                odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c === 19) {
                                odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c === 20) {
                                odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                continue;
                            } else if (imaginaryCount + i + x + y + b + c === 21) {
                                odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                continue;
                            } else if ((imaginaryCount + i + x + y + c < 17) && (imaginaryCount === 1 || i === 1 || x === 1 || y === 1 || b === 1) || c === 1) {
                                if (imaginaryCount + i + x + y + b + c + 10 === 17) {
                                    odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + 10 === 18) {
                                    odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + 10 === 19) {
                                    odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + 10 === 20) {
                                    odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + 10 === 21) {
                                    odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4))
                                    continue;
                                }
                            }

                            for (let d = 1; d <= 6; d++) {
                                let dups5 = 0
                                if (i === d) {
                                    dups5++
                                }
                                if (x === d) {
                                    dups5++
                                }
                                if (y === d) {
                                    dups5++
                                }
                                if (b === d) {
                                    dups5++
                                }
                                if (c === d) {
                                    dups5++
                                }
                                let sixthNum = d === 10 ? iTens : d === 9 ? iNines : d === 8 ? iEights : d === 7 ? iSevens : d === 6 ? iSixes : d === 5 ? iFives : d === 4 ? iFours : d === 3 ? iThrees : d === 2 ? iTwos : iAces
                                if (sixthNum - dups5 <= 0) continue;

                                if (imaginaryCount + i + x + y + b + c + d === 17) {
                                    odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + d === 18) {
                                    odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + d === 19) {
                                    odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + d === 20) {
                                    odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                    continue;
                                } else if (imaginaryCount + i + x + y + b + c + d === 21) {
                                    odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                    continue;
                                } else if ((imaginaryCount + i + x + y + b + c + d < 17) && (imaginaryCount === 1 || i === 1 || x === 1 || y === 1 || b === 1) || c === 1 || d === 1) {
                                    if (imaginaryCount + i + x + y + b + c + d + 10 === 17) {
                                        odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + 10 === 18) {
                                        odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + 10 === 19) {
                                        odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + 10 === 20) {
                                        odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + 10 === 21) {
                                        odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * ((sixthNum - dups5) / (iTotal - 5))
                                        continue;
                                    }
                                }


                                for (let e = 1; e <= 6; e++) {
                                    let dups6 = 0
                                    if (i === e) {
                                        dups6++
                                    }
                                    if (x === e) {
                                        dups6++
                                    }
                                    if (y === e) {
                                        dups6++
                                    }
                                    if (b === e) {
                                        dups6++
                                    }
                                    if (c === e) {
                                        dups6++
                                    }
                                    if (d === e) {
                                        dups6++
                                    }
                                    let seventhNum = e === 10 ? iTens : e === 9 ? iNines : e === 8 ? iEights : e === 7 ? iSevens : e === 6 ? iSixes : e === 5 ? iFives : e === 4 ? iFours : e === 3 ? iThrees : e === 2 ? iTwos : iAces
                                    if (seventhNum - dups6 <= 0) continue;

                                    if (imaginaryCount + i + x + y + b + c + d + e === 17) {
                                        odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + e === 18) {
                                        odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + e === 19) {
                                        odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + e === 20) {
                                        odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    } else if (imaginaryCount + i + x + y + b + c + d + e === 21) {
                                        odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6))
                                        continue;
                                    }
                                    for (let f = 1; f <= 6; f++) {
                                        let dups7 = 0
                                        if (i === f) {
                                            dups7++
                                        }
                                        if (x === f) {
                                            dups7++
                                        }
                                        if (y === f) {
                                            dups7++
                                        }
                                        if (b === f) {
                                            dups7++
                                        }
                                        if (c === f) {
                                            dups7++
                                        }
                                        if (d === f) {
                                            dups7++
                                        }
                                        if (e === f) {
                                            dups7++
                                        }
                                        let eightNum = f === 10 ? iTens : f === 9 ? iNines : f === 8 ? iEights : f === 7 ? iSevens : f === 6 ? iSixes : f === 5 ? iFives : f === 4 ? iFours : f === 3 ? iThrees : f === 2 ? iTwos : iAces
                                        if (eightNum - dups7 <= 0) continue;

                                        if (imaginaryCount + i + x + y + b + c + d + e + f === 17) {
                                            odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7))
                                            continue;
                                        } else if (imaginaryCount + i + x + y + b + c + d + e + f === 18) {
                                            odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7))
                                            continue;
                                        } else if (imaginaryCount + i + x + y + b + c + d + e + f === 19) {
                                            odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7))
                                            continue;
                                        } else if (imaginaryCount + i + x + y + b + c + d + e + f === 20) {
                                            odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7))
                                            continue;
                                        } else if (imaginaryCount + i + x + y + b + c + d + e + f === 21) {
                                            odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7))
                                            continue;
                                        }
                                        for (let g = 1; g <= 6; g++) {
                                            let ninthNum = g === 10 ? iTens : g === 9 ? iNines : g === 8 ? iEights : g === 7 ? iSevens : g === 6 ? iSixes : g === 5 ? iFives : g === 4 ? iFours : g === 3 ? iThrees : g === 2 ? iTwos : iAces
                                            if (imaginaryCount + i + x + y + b + c + d + e + f + g === 17) {
                                                odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8))
                                                continue;
                                            } else if (imaginaryCount + i + x + y + b + c + d + e + f + g === 18) {
                                                odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8))
                                                continue;
                                            } else if (imaginaryCount + i + x + y + b + c + d + e + f + g === 19) {
                                                odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8))
                                                continue;
                                            } else if (imaginaryCount + i + x + y + b + c + d + e + f + g === 20) {
                                                odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8))
                                                continue;
                                            } else if (imaginaryCount + i + x + y + b + c + d + e + f + g === 21) {
                                                odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8))
                                                continue;
                                            }
                                            for (let h = 1; h <= 6; h++) {
                                                let tenthNum = h === 10 ? iTens : h === 9 ? iNines : h === 8 ? iEights : h === 7 ? iSevens : h === 6 ? iSixes : h === 5 ? iFives : h === 4 ? iFours : h === 3 ? iThrees : h === 2 ? iTwos : iAces
                                                if (imaginaryCount + i + x + y + b + c + d + e + f + g + h === 17) {
                                                    odds17 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8)) * (tenthNum / (iTotal - 9))
                                                    continue;
                                                } else if (imaginaryCount + i + x + y + b + c + d + e + f + g + h === 18) {
                                                    odds18 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * (fourthNum / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8)) * (tenthNum / (iTotal - 9))
                                                    continue;
                                                } else if (imaginaryCount + i + x + y + b + c + d + e + f + g + h === 19) {
                                                    odds19 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8)) * (tenthNum / (iTotal - 9))
                                                    continue;
                                                } else if (imaginaryCount + i + x + y + b + c + d + e + f + g + h === 20) {
                                                    odds20 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8)) * (tenthNum / (iTotal - 9))
                                                    continue;
                                                } else if (imaginaryCount + i + x + y + b + c + d + e + f + g + h === 21) {
                                                    odds21 += (num / iTotal) * ((secNum - dups1) / (iTotal - 1)) * ((thirdNum - dups2) / (iTotal - 2)) * ((fourthNum - dups3) / (iTotal - 3)) * ((fifthNum - dups4) / (iTotal - 4)) * (sixthNum / (iTotal - 5)) * (seventhNum / (iTotal - 6)) * (eightNum / (iTotal - 7)) * (ninthNum / (iTotal - 8)) * (tenthNum / (iTotal - 9))
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
            }

        }

        return {
            odds17: Number(odds17).toFixed(3),
            odds18: Number(odds18).toFixed(3),
            odds19: Number(odds19).toFixed(3),
            odds20: Number(odds20).toFixed(3),
            odds21: Number(odds21).toFixed(3),
        }






    }



    calcOdds(card[0], Number(aceCount), Number(twoCount), Number(threeCount), Number(fourCount), Number(fiveCount), Number(sixCount), Number(sevenCount), Number(eightCount), Number(nineCount), Number(tenCount), totalCount, 17)




    return (
        <div className='dealerspot'>
            {card ? <Card card={card} noClick={true} /> : <div className='dealerspot2'></div>}
            {card ? <div className='approxodds'>Approximate Odds:
                <div className='approxnum'>{`17: ${odds.odds17}`}
                </div>
                <div className='approxnum'>{`18: ${odds.odds18}`}
                </div>
                <div className='approxnum'>{`19: ${odds.odds19}`}
                </div>
                <div className='approxnum'>{`20: ${odds.odds20}`}
                </div>
                <div className='approxnum'>{`21: ${odds.odds21}`}
                </div>
                <div className='approxnum red'>{`Bust: ${(1 - (odds.odds17) - (odds.odds18) - (odds.odds19) - (odds.odds20) - (odds.odds21)).toFixed(3)}`}
                </div>
                <div className='approxnum'>{`Dealer wins: ${yourCardCount < 17 ? Number(odds.odds17) + Number(odds.odds18) + Number(odds.odds19) + Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 17 ? Number(odds.odds18) + Number(odds.odds19) + Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 18 ? Number(odds.odds19) + Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 19 ? Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 20 ? Number(odds.odds21) : 0}`}
                </div>
            </div> : null}

            <ResetButton />
        </div>
    )
}

export default DealerHand
