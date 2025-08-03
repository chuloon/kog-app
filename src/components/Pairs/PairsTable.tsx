import { Table } from "@mantine/core"
import { FC } from "react"
import { Pair } from "./Pair"
import { PairRow } from "./PairRow"

interface PairsTableProps {
    pairs: Pair[]
}
export const PairsTable: FC<PairsTableProps> = ({ pairs }) => {
    return (
        <Table striped>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Pair Number</Table.Th>
                    <Table.Th>Player 1</Table.Th>
                    <Table.Th>Player 2</Table.Th>
                    <Table.Th>Point Differential</Table.Th>
                    <Table.Th>Wins</Table.Th>
                    <Table.Th>Has Paid</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {pairs.map((pair) => (
                    <PairRow key={pair.pairNumber} pair={pair} />
                ))}
            </Table.Tbody>
        </Table>
    )
}