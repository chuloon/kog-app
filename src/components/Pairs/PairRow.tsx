import { Button, Checkbox, Table } from "@mantine/core";
import { FC, useState } from "react";
import { Pair } from "./Pair";
import { useLocalStorage } from "@mantine/hooks";

interface PairRowProps {
    pair: Pair,
    index: number,
    isStandings: boolean
}
export const PairRow: FC<PairRowProps> = ({ pair, isStandings, index }) => {
    const [hasPaid, setHasPaid] = useState(pair.hasPaid);
    const [pairs, setPairs] = useLocalStorage<Pair[]>({
        key: 'pairs',
        defaultValue: [],
    });

    const handlePaymentChange = (checked: boolean) => {
        setHasPaid(checked)
        setPairs(pairs.map(p => p.pairNumber === pair.pairNumber ? { ...p, hasPaid: checked } : p));
    }

    const handleDeleteClick = () => {
        const filteredPairs = pairs.filter(p => p.pairNumber !== pair.pairNumber)
        const updatedPairs = filteredPairs.map((pair, index) => { return { ...pair, pairNumber: index + 1 } });
        setPairs(updatedPairs);
    }

    return (
        <Table.Tr>
            {
                isStandings && <Table.Td>{index + 1}</Table.Td>
            }
            <Table.Td>{pair.pairNumber}</Table.Td>
            <Table.Td>{pair.player1Name}</Table.Td>
            <Table.Td>{pair.player2Name}</Table.Td>

            {
                !isStandings ?
                    <>

                        <Table.Td>
                            <Checkbox
                                checked={hasPaid}
                                onChange={(e) => handlePaymentChange(e.currentTarget.checked)}
                            />
                        </Table.Td>
                        <Table.Td visibleFrom="sm">
                            <Button variant='outline' onClick={handleDeleteClick}>Delete</Button>
                        </Table.Td>
                    </> :
                    <>
                        <Table.Td>{pair.cumulativePointDiff}</Table.Td>
                        <Table.Td>{pair.cumulativeWins}</Table.Td>
                    </>
            }
        </Table.Tr>
    )
}