import { Button, Checkbox, Table } from "@mantine/core";
import { FC, useState } from "react";
import { Pair } from "./Pair";
import { useLocalStorage } from "@mantine/hooks";

interface PairRowProps {
    pair: Pair
}
export const PairRow: FC<PairRowProps> = ({ pair }) => {
    const [hasPaid, setHasPaid] = useState(pair.hasPaid);
    const [pairs, setPairs] = useLocalStorage<Pair[]>({
        key: 'pairs',
    });

    const handlePaymentChange = (checked: boolean) => {
        setHasPaid(checked)
        setPairs(pairs.map(p => p.pairNumber === pair.pairNumber ? { ...p, hasPaid: checked } : p));
    }

    const handleDeleteClick = () => {
        setPairs(pairs.filter(p => p.pairNumber !== pair.pairNumber));
    }

    return (
        <Table.Tr>
            <Table.Td>{pair.pairNumber}</Table.Td>
            <Table.Td>{pair.player1Name}</Table.Td>
            <Table.Td>{pair.player2Name}</Table.Td>
            <Table.Td>{pair.cumulativePointDiff}</Table.Td>
            <Table.Td>{pair.cumulativeWins}</Table.Td>
            <Table.Td>
                <Checkbox
                    checked={hasPaid}
                    onChange={(e) => handlePaymentChange(e.currentTarget.checked)}
                />
            </Table.Td>
            <Table.Td>
                <Button variant='outline' onClick={handleDeleteClick}>Delete</Button>
            </Table.Td>
        </Table.Tr>
    )
}