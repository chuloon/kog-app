import { Table } from "@mantine/core"
import { FC } from "react"
import { Pair } from "./Pair"
import { PairRow } from "./PairRow"

interface PairsTableProps {
    pairs: Pair[],
    isStandings?: boolean
}
export const PairsTable: FC<PairsTableProps> = ({ pairs, isStandings = false }) => {
    return (
        <Table striped>
            <Table.Thead>
                <Table.Tr>
                    {
                        isStandings && <Table.Th>Standing</Table.Th>
                    }
                    <Table.Th>Pair Number</Table.Th>
                    <Table.Th>Player 1</Table.Th>
                    <Table.Th>Player 2</Table.Th>

                    {
                        !isStandings ?
                            <>
                                <Table.Th>Has Paid</Table.Th>
                                <Table.Th></Table.Th>
                            </> :
                            <>
                                <Table.Th>Point Differential</Table.Th>
                                <Table.Th>Wins</Table.Th>
                            </>
                    }
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {pairs.map((pair, index) => (
                    <PairRow key={pair.pairNumber} pair={pair} isStandings={isStandings} index={index} />
                ))}
            </Table.Tbody>
        </Table>
    )
}