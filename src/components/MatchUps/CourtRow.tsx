import { FC } from "react";
import { MatchUp } from "./MatchUp";
import { Table, TextInput } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Pair } from "../Pairs/Pair";

interface CourtRowProps {
    matchUp: MatchUp
}
export const CourtRow: FC<CourtRowProps> = ({ matchUp }) => {
    const [matchUps, setMatchUps] = useLocalStorage<MatchUp[]>({
        key: 'matchUps',
        defaultValue: [],
    });
    const [pairs, setPairs] = useLocalStorage<Pair[]>({
        key: 'pairs',
        defaultValue: [],
    });

    const updateMatchUp = (score: number, teamLabel: string) => {
        setMatchUps(matchUps.map(m => m === matchUp ? { ...m, [teamLabel]: score } : m));
    }

    return (
        <Table.Tr key={`court-${matchUp.courtNumber}-round-${matchUp.roundNumber}`}>
            <Table.Td>{matchUp.roundNumber}</Table.Td>
            <Table.Td>{matchUp.pair1 != -1 ? matchUp.pair1 : 'BYE'}</Table.Td>
            <Table.Td>{matchUp.pair2 != -1 ? matchUp.pair2 : 'BYE'}</Table.Td>
            <Table.Td>
                <TextInput
                    value={matchUp.team1Score}
                    onChange={(e) => updateMatchUp(Number(e.currentTarget.value), 'team1Score')}
                    placeholder="Team 1 Score"
                    disabled={matchUp.pair1 === -1 || matchUp.pair2 === -1}
                />
            </Table.Td>
            <Table.Td>vs</Table.Td>
            <Table.Td>{matchUp.pair3 != -1 ? matchUp.pair3 : 'BYE'}</Table.Td>
            <Table.Td>{matchUp.pair4 != -1 ? matchUp.pair4 : 'BYE'}</Table.Td>
            <Table.Td>
                <TextInput
                    value={matchUp.team2Score}
                    onChange={(e) => updateMatchUp(Number(e.currentTarget.value), 'team2Score')}
                    placeholder="Team 2 Score"
                    disabled={matchUp.pair3 === -1 || matchUp.pair4 === -1}
                /></Table.Td>
        </Table.Tr>
    )
}