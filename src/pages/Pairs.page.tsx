import { PairActionBar } from "@/components/Pairs/PairActionBar"
import { PairsTable } from "@/components/Pairs/PairsTable"
import { Flex } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { FC } from "react"

export const PairsPage: FC = () => {
    const [pairs] = useLocalStorage({
        key: 'pairs',
        defaultValue: [],
    });

    return (
        <Flex direction="column" gap="md" p="md">
            <Flex justify="flex-end"><PairActionBar /></Flex>
            <PairsTable pairs={pairs} />
        </Flex>
    )
}