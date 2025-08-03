import { FC, useState } from "react";
import { MatchUp } from "./MatchUp";
import { Table, TextInput } from "@mantine/core";

interface CourtRowProps {
    matchUp: MatchUp
}
export const CourtRow: FC<CourtRowProps> = ({ matchUp }) => {
    const [pair1Score, setPair1Score] = useState(matchUp.team1Score);
    const [pair2Score, setPair2Score] = useState(matchUp.team2Score);

    return (
        <Table.Tr key={`court-${matchUp.courtNumber}-round-${matchUp.roundNumber}`}>
            <Table.Td>{matchUp.roundNumber}</Table.Td>
            <Table.Td>{matchUp.pair1 != -1 ? matchUp.pair1 : 'BYE'}</Table.Td>
            <Table.Td>{matchUp.pair2 != -1 ? matchUp.pair2 : 'BYE'}</Table.Td>
            <Table.Td>
                <TextInput
                    value={pair1Score}
                    onChange={(e) => setPair1Score(Number(e.currentTarget.value))}
                    placeholder="Team 1 Score"
                    disabled={matchUp.pair1 === -1 || matchUp.pair2 === -1}
                />
            </Table.Td>
            <Table.Td>vs</Table.Td>
            <Table.Td>{matchUp.pair3 != -1 ? matchUp.pair3 : 'BYE'}</Table.Td>
            <Table.Td>{matchUp.pair4 != -1 ? matchUp.pair4 : 'BYE'}</Table.Td>
            <Table.Td>
                <TextInput
                    value={pair2Score}
                    onChange={(e) => setPair2Score(Number(e.currentTarget.value))}
                    placeholder="Team 2 Score"
                    disabled={matchUp.pair3 === -1 || matchUp.pair4 === -1}
                /></Table.Td>
        </Table.Tr>
    )
}