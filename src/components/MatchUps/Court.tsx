import { Flex, Table } from "@mantine/core"
import { FC } from "react"
import { MatchUp } from "./MatchUp"

interface CourtProps {
    title: string
    matchUps: MatchUp[]
}
export const Court: FC<CourtProps> = ({ title }) => {
    return (
        <Flex direction="column" gap="md" p="md" align="center">
            <h2>{title}</h2>
            <Table striped>
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

                    }
                </Table.Tbody>
            </Table>
        </Flex>
    )
}