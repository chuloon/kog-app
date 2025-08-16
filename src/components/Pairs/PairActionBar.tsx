import { Button, Flex, Modal, TextInput } from "@mantine/core"
import { useDisclosure, useLocalStorage } from "@mantine/hooks"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { Pair } from "./Pair"
import { mockPairs } from "@/assets/mockPairData"
import { MatchUp } from "../MatchUps/MatchUp"
import { MatchUpData } from "@/assets/MatchUpData"

export const PairActionBar: FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { register, handleSubmit, getValues, reset, setFocus } = useForm()
    const [pairs, setPairs] = useLocalStorage<Pair[]>({
        key: 'pairs',
        defaultValue: [],
    });
    const [standings, setStandings] = useLocalStorage<Pair[]>({
        key: 'standings',
        defaultValue: [],
    });
    const [matchUps, setMatchUps] = useLocalStorage<MatchUp[]>({
        key: 'matchUps',
        defaultValue: [],
    });
    const [isRoundTwo, setIsRoundTwo] = useLocalStorage<boolean>({
        key: 'isRoundTwo',
        defaultValue: false,
    });

    const addPairSubmit = () => {
        const { player1Name, player2Name } = getValues()
        addNewPair(player1Name, player2Name)
        reset()
    }

    const addNewPair = (player1Name: string, player2Name: string) => {
        const newPair: Pair = {
            pairNumber: pairs.length + 1,
            player1Name,
            player2Name,
            cumulativePointDiff: 0,
            cumulativeWins: 0,
            hasPaid: false,
            standing: pairs.length + 1, // Assuming standing is the same as pair number for new pairs
        }

        setPairs([...pairs, newPair]);
        setFocus("player1Name"); // Reset focus to the first input
        return newPair; // Optionally return the newly added pair
    }

    const setMatchUpClick = () => {
        if (pairs.length >= 16) {
            const matchUpData = MatchUpData.find(data => data.numberOfPairs === pairs.length)
            console.log("MatchUpData:", matchUpData);
            if (matchUpData) setMatchUps(matchUpData.matchUps)
        }
    }

    const resetClick = () => {
        open();
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title="Confirm Reset" centered>
                Are you sure you want to reset the tournament? This will clear all pairs and matchups.
                <Flex justify="flex-end" gap="sm" mt="md">
                    <Button variant="outline" onClick={close}>Cancel</Button>
                    <Button variant="filled" color="red" onClick={() => {
                        setPairs([]);
                        setMatchUps([]);
                        setStandings([])
                        setIsRoundTwo(false);
                        close();
                    }}>Reset</Button>
                </Flex>
            </Modal>
            <Flex gap="sm">
                <form onSubmit={handleSubmit(addPairSubmit)}>
                    <Flex gap="sm">
                        <Button variant='subtle' onClick={setMatchUpClick}>Set Match-Ups</Button>
                        <TextInput {...register("player1Name")} placeholder="Player 1 Name" />
                        <TextInput {...register("player2Name")} placeholder="Player 2 Name" />
                        <Button type='submit' variant="filled">Add New Pair</Button>
                        <Button variant="outline" onClick={resetClick}>Reset</Button>
                    </Flex>
                </form>
            </Flex>
        </>
    )
}