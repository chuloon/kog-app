import { Flex, Table, Title } from "@mantine/core"
import { FC } from "react"
import { MatchUp } from "./MatchUp"
import { CourtRow } from "./CourtRow"

interface CourtProps {
    title: string
    matchUps: MatchUp[]
}
export const Court: FC<CourtProps> = ({ title, matchUps }) => {
    return (
        <Flex direction="column" p="md" align="center">
            <Title order={2}>{title}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Round #</Table.Th>
                        <Table.Th>Pair 1</Table.Th>
                        <Table.Th>Pair 2</Table.Th>
                        <Table.Th>Team 1 Score</Table.Th>
                        <Table.Th>vs</Table.Th>
                        <Table.Th>Pair 3</Table.Th>
                        <Table.Th>Pair 4</Table.Th>
                        <Table.Th>Team 2 Score</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        matchUps.map((matchUp, index) => (
                            <CourtRow key={index} matchUp={matchUp} />
                        ))
                    }
                </Table.Tbody>
            </Table>
        </Flex>
    )
}