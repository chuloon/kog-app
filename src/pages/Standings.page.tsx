import { Pair } from "@/components/Pairs/Pair";
import { PairsTable } from "@/components/Pairs/PairsTable";
import { StandingsActionBar } from "@/components/Standings/StandingsActionBar";
import { Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FC } from "react";

export const StandingsPage: FC = () => {
    // const [pairs] = useLocalStorage<Pair[]>({
    //     key: 'pairs',
    //     defaultValue: [],
    // });
    const [standings] = useLocalStorage<Pair[]>({
        key: 'standings',
        defaultValue: [],
    });

    const [isRoundTwo] = useLocalStorage<boolean>({
        key: 'isRoundTwo',
        defaultValue: false,
    });

    const getPairTable = () => {
        if (isRoundTwo) {
            const goldPairs = standings.filter(pair => pair.pairNumber <= Math.floor(standings.length / 2));
            const silverPairs = standings.filter(pair => pair.pairNumber > Math.floor(standings.length / 2));

            return (
                <>
                    <PairsTable pairs={goldPairs} isStandings={true} title="Gold Bracket" />
                    <PairsTable pairs={silverPairs} isStandings={true} title="Silver Bracket" />
                </>
            );
        }
        else {
            return (
                <PairsTable pairs={standings} isStandings={true} />
            )
        }
    }

    return (
        <Flex direction="column" gap="md" p="md">
            <Flex justify="flex-end"><StandingsActionBar /></Flex>
            {standings.length > 0 && getPairTable()}
        </Flex>
    )
}