import { Button, Flex, TextInput } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { Pair } from "./Pair"
import { mockPairs } from "@/assets/mockPairData"

export const PairActionBar: FC = () => {
    const { register, handleSubmit, getValues, reset } = useForm()
    const [pairs, setPairs] = useLocalStorage<Pair[]>({
        key: 'pairs',
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
        return newPair; // Optionally return the newly added pair
    }

    const addMockPairs = () => {
        setPairs(mockPairs)
    }

    return (
        <Flex gap="sm">
            <form onSubmit={handleSubmit(addPairSubmit)}>
                <Flex gap="sm">
                    <Button variant='subtle' onClick={addMockPairs}>Add Mock Pairs</Button>
                    <TextInput {...register("player1Name")} placeholder="Player 1 Name" />
                    <TextInput {...register("player2Name")} placeholder="Player 2 Name" />
                    <Button type='submit' variant="filled">Add New Pair</Button>
                    <Button variant="outline" onClick={() => setPairs([])}>Reset</Button>
                </Flex>
            </form>
        </Flex>
    )
}