import { MatchUpData } from "@/assets/MatchUpData";
import { Court } from "@/components/MatchUps/Court";
import { MatchUp } from "@/components/MatchUps/MatchUp";
import { Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FC } from "react";

export const MatchUpsPage: FC = () => {
    const [matchUps] = useLocalStorage<MatchUp[]>({
        key: 'matchUps',
        defaultValue: [],
    });

    const getCourtMatchUps = (courtNumber: number) => {
        return matchUps.filter(matchUp => matchUp.courtNumber === courtNumber);
    }

    return (
        <Flex direction="column" gap="md" p="md">
            {getCourtMatchUps(1).length > 0 ? <Court title="Court 1" matchUps={getCourtMatchUps(1)} /> : null}
            {getCourtMatchUps(2).length > 0 ? <Court title="Court 2" matchUps={getCourtMatchUps(2)} /> : null}
            {getCourtMatchUps(3).length > 0 ? <Court title="Court 3" matchUps={getCourtMatchUps(3)} /> : null}
            {getCourtMatchUps(4).length > 0 ? <Court title="Court 4" matchUps={getCourtMatchUps(4)} /> : null}
        </Flex>
    )
}