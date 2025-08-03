import { PairsTable } from "@/components/Pairs/PairsTable";
import { StandingsActionBar } from "@/components/Standings/StandingsActionBar";
import { Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FC } from "react";

export const StandingsPage: FC = () => {
    const [pairs] = useLocalStorage({
        key: 'pairs',
        defaultValue: [],
    });

    return (
        <Flex direction="column" gap="md" p="md">
            <Flex justify="flex-end"><StandingsActionBar /></Flex>
            <PairsTable pairs={pairs} isStandings={true} />
        </Flex>
    )
}