import { Button, Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FC } from "react";
import { MatchUp } from "../MatchUps/MatchUp";
import { Pair } from "../Pairs/Pair";
import { MatchUpData } from "@/assets/MatchUpData";
import { get } from "http";

export const StandingsActionBar: FC = () => {
    const [pairs, setPairs] = useLocalStorage<Pair[]>({
        key: 'pairs',
        defaultValue: [],
    });
    const [matchUps, setMatchUps] = useLocalStorage<MatchUp[]>({
        key: 'matchUps',
        defaultValue: [],
    });
    const [standings, setStandings] = useLocalStorage<Pair[]>({
        key: 'standings',
        defaultValue: [],
    });
    const [isRoundTwo, setIsRoundTwo] = useLocalStorage<boolean>({
        key: 'isRoundTwo',
        defaultValue: false,
    });

    const resetStandings = () => {
        const resetPairs = pairs.map(pair => ({
            ...pair,
            cumulativePointDiff: 0,
            cumulativeWins: 0,
        }));
        setPairs(resetPairs);
    }

    const getMatchUps = () => {
        const matchUpData = MatchUpData.find(data => data.numberOfPairs === pairs.length)
        console.log("MatchUpData:", matchUpData);
        if (matchUpData) setMatchUps(matchUpData.matchUps)
    }

    const calculatePairStandings = () => {
        resetStandings()
        const updatedPairs: Pair[] = pairs.map(pair => {
            let cumulativePointDiff = 0;
            let cumulativeWins = 0;

            matchUps.forEach(matchUp => {
                const team1PointDiff = matchUp.team1Score - matchUp.team2Score;
                const team2PointDiff = matchUp.team2Score - matchUp.team1Score;

                if (matchUp.pair1 === pair.pairNumber || matchUp.pair2 === pair.pairNumber) {
                    cumulativePointDiff += team1PointDiff;
                    cumulativeWins += team1PointDiff > 0 ? 1 : 0;
                }
                else if (matchUp.pair3 === pair.pairNumber || matchUp.pair4 === pair.pairNumber) {
                    cumulativePointDiff += team2PointDiff;
                    cumulativeWins += team2PointDiff > 0 ? 1 : 0;
                }
            });

            return {
                ...pair,
                cumulativePointDiff,
                cumulativeWins,
            };
        });

        const sortedPairs = updatedPairs.sort((a, b) => {
            if (a.cumulativePointDiff > b.cumulativePointDiff) return -1;
            if (a.cumulativePointDiff < b.cumulativePointDiff) return 1;
            return b.cumulativeWins - a.cumulativeWins; // Sort by wins if point diff is equal
        })

        setStandings(sortedPairs)
    }

    const startRoundTwo = () => {
        setPairs(standings.map((pair, index) => ({
            ...pair,
            pairNumber: index + 1, // Reset pair numbers for round two
        })
        ))

        setStandings([]); // Clear standings for the next round
        setIsRoundTwo(true);
        getMatchUps();
    }

    return (
        <Flex justify="flex-end" gap="md">
            <Button variant='filled' onClick={calculatePairStandings}>Calculate</Button>
            {/* {!isRoundTwo && <Button variant='outline' onClick={startRoundTwo} disabled={pairs.length < 19}>Start Round 2</Button>} */}
        </Flex>
    )
}