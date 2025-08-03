import { Pair } from "@/components/Pairs/Pair";
import { PairsTable } from "@/components/Pairs/PairsTable";
import { StandingsActionBar } from "@/components/Standings/StandingsActionBar";
import { Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FC } from "react";

export const StandingsPage: FC = () => {
    const [standings] = useLocalStorage<Pair[]>({
        key: 'standings',
        defaultValue: [],
    });

    return (
        <Flex direction="column" gap="md" p="md">
            <Flex justify="flex-end"><StandingsActionBar /></Flex>
            {standings.length > 0 && <PairsTable pairs={standings} isStandings={true} />}
        </Flex>
    )
}