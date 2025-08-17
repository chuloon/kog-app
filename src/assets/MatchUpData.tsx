import { MatchUp } from "@/components/MatchUps/MatchUp";

const createMatchUp = (
    pair1: string | number,
    pair2: string | number,
    pair3: string | number,
    pair4: string | number,
    courtNumber: number,
    roundNumber: number
): MatchUp => {
    return {
        pair1,
        pair2,
        team1Score: 0,
        team1PointDiff: 0,
        pair3,
        pair4,
        team2Score: 0,
        team2PointDiff: 0,
        courtNumber,
        roundNumber
    }
}

export const MatchUpData = [
    {
        numberOfPairs: 16,
        hasTwoRounds: false,
        matchUps: [
            //#region COURT 1
            createMatchUp(1, 2, 3, 4, 1, 1),
            createMatchUp(13, 14, 15, 16, 1, 2),
            createMatchUp(4, 7, 8, 11, 1, 3),
            createMatchUp(1, 7, 10, 16, 1, 4),
            createMatchUp(3, 8, 15, 16, 1, 5),
            createMatchUp(9, 15, 16, 11, 1, 6),
            createMatchUp(5, 9, 10, 13, 1, 7),
            createMatchUp(3, 5, 11, 13, 1, 8),
            createMatchUp(4, 5, 14, 16, 1, 9),
            createMatchUp(3, 6, 7, 9, 1, 10),
            createMatchUp(3, 10, 14, 16, 1, 11),
            createMatchUp(1, 12, 13, 16, 1, 12),
            createMatchUp(1, 3, 8, 14, 1, 13),
            createMatchUp(9, 12, 13, 16, 1, 14),
            //#endregion

            //#region COURT 2
            createMatchUp(5, 6, 7, 8, 2, 1),
            createMatchUp(1, 5, 9, 2, 2, 2),
            createMatchUp(1, 14, 13, 6, 2, 3),
            createMatchUp(3, 8, 9, 13, 2, 4),
            createMatchUp(2, 4, 6, 13, 2, 5),
            createMatchUp(1, 4, 8, 12, 2, 6),
            createMatchUp(2, 11, 14, 15, 2, 7),
            createMatchUp(7, 9, 12, 16, 2, 8),
            createMatchUp(1, 11, 13, 15, 2, 9),
            createMatchUp(2, 15, 4, 12, 2, 10),
            createMatchUp(6, 13, 7, 9, 2, 11),
            createMatchUp(3, 15, 4, 7, 1, 12),
            createMatchUp(2, 7, 10, 11, 1, 13),
            //#endregion

            //#region COURT 3
            createMatchUp(9, 10, 11, 12, 3, 1),
            createMatchUp(3, 6, 10, 12, 3, 2),
            createMatchUp(2, 5, 10, 15, 3, 3),
            createMatchUp(4, 11, 12, 14, 3, 4),
            createMatchUp(5, 7, 12, 14, 3, 5),
            createMatchUp(2, 3, 6, 7, 3, 6),
            createMatchUp(4, 6, 1, 16, 3, 7),
            createMatchUp(8, 14, 10, 15, 3, 8),
            createMatchUp(2, 8, 10, 12, 3, 9),
            createMatchUp(1, 5, 8, 11, 3, 10),
            createMatchUp(2, 5, 8, 11, 3, 11),
            createMatchUp(6, 10, 9, 14, 1, 12),
            createMatchUp(4, 6, 5, 15, 1, 13),
            //#endregion
        ]
    },
    {
        numberOfPairs: 17,
        hasTwoRounds: false,
        matchUps: [
            //#region COURT 1
            createMatchUp(1, 2, 3, 4, 1, 1),
            createMatchUp(17, 1, 5, 9, 1, 2),
            createMatchUp(2, 7, 16, 17, 1, 3),
            createMatchUp(1, 8, 10, 16, 1, 4),
            createMatchUp(12, 17, 15, 16, 1, 5),
            createMatchUp(1, 14, 2, 12, 1, 6),
            createMatchUp(1, 10, 12, 14, 1, 7),
            createMatchUp(10, 12, 13, 15, 1, 8),
            createMatchUp(10, 15, 14, 17, 1, 9),
            createMatchUp(6, 10, 14, 16, 1, 10),
            createMatchUp(3, 11, 6, 16, 1, 11),
            //#endregion

            //#region COURT 2
            createMatchUp(5, 6, 7, 8, 2, 1),
            createMatchUp(2, 6, 10, 13, 2, 2),
            createMatchUp(1, 6, 11, 15, 2, 3),
            createMatchUp(3, 6, 12, 17, 2, 4),
            createMatchUp(1, 3, 7, 13, 2, 5),
            createMatchUp(3, 9, 15, 17, 2, 6),
            createMatchUp(2, 16, 5, 15, 2, 7),
            createMatchUp(8, 16, 14, 17, 2, 8),
            createMatchUp(11, 12, 13, 16, 2, 9),
            createMatchUp(11, 13, 12, 17, 2, 10),
            createMatchUp(10, 13, 12, 14, 2, 11),
            //#endregion

            //#region COURT 3
            createMatchUp(9, 10, 11, 12, 3, 1),
            createMatchUp(3, 7, 11, 14, 3, 2),
            createMatchUp(3, 5, 8, 10, 3, 3),
            createMatchUp(2, 5, 11, 14, 3, 4),
            createMatchUp(2, 6, 8, 9, 3, 5),
            createMatchUp(4, 6, 11, 16, 3, 6),
            createMatchUp(4, 6, 7, 17, 3, 7),
            createMatchUp(1, 6, 4, 5, 3, 8),
            createMatchUp(1, 7, 5, 9, 3, 9),
            createMatchUp(1, 7, 4, 15, 3, 10),
            createMatchUp(15, -1, 17, -1, 3, 11),
            //#endregion

            //#region COURT 4
            createMatchUp(13, 14, 15, 16, 4, 1),
            createMatchUp(4, 8, 12, 15, 4, 2),
            createMatchUp(4, 14, 13, 9, 4, 3),
            createMatchUp(4, 7, 13, 9, 4, 4),
            createMatchUp(4, 5, 10, 11, 4, 5),
            createMatchUp(5, 8, 7, 13, 4, 6),
            createMatchUp(3, 8, 11, 9, 4, 7),
            createMatchUp(2, 3, 7, 9, 4, 8),
            createMatchUp(2, 4, 8, 3, 4, 9),
            createMatchUp(2, 5, 9, 8, 4, 10),
            //#endregion
        ]
    },
    {
        numberOfPairs: 18,
        hasTwoRounds: false,
        matchUps: [
            //#region COURT 1
            createMatchUp(1, 2, 3, 4, 1, 1),
            createMatchUp(17, 18, 1, 5, 1, 2),
            createMatchUp(12, 17, 15, 18, 1, 3),
            createMatchUp(8, 12, 13, 17, 1, 4),
            createMatchUp(4, 12, 14, 18, 1, 5),
            createMatchUp(4, 6, 7, 15, 1, 6),
            createMatchUp(3, 6, 4, 8, 1, 7),
            createMatchUp(3, 9, 12, 15, 1, 8),
            createMatchUp(2, 4, 11, 17, 1, 9),
            createMatchUp(1, 10, 4, 13, 1, 10),
            createMatchUp(3, 16, 14, 17, 1, 11),
            createMatchUp(7, 16, 10, 17, 1, 12),
            //#endregion

            //#region COURT 2
            createMatchUp(5, 6, 7, 8, 2, 1),
            createMatchUp(2, 6, 9, 13, 2, 2),
            createMatchUp(1, 6, 10, 16, 2, 3),
            createMatchUp(2, 10, 15, 18, 2, 4),
            createMatchUp(1, 8, 15, 3, 2, 5),
            createMatchUp(8, 11, 14, 18, 2, 6),
            createMatchUp(7, 11, 10, 12, 2, 7),
            createMatchUp(4, 7, 13, 18, 2, 8),
            createMatchUp(3, 18, 13, 16, 2, 9),
            createMatchUp(2, 8, 15, 18, 2, 10),
            createMatchUp(1, 12, 2, 4, 2, 11),
            //#endregion

            //#region COURT 3
            createMatchUp(9, 10, 11, 12, 3, 1),
            createMatchUp(3, 7, 10, 14, 3, 2),
            createMatchUp(2, 3, 7, 11, 3, 3),
            createMatchUp(1, 7, 9, 16, 3, 4),
            createMatchUp(5, 11, 13, 16, 3, 5),
            createMatchUp(1, 12, 13, 17, 3, 6),
            createMatchUp(13, 18, 17, 15, 3, 7),
            createMatchUp(6, 16, 10, 17, 3, 8),
            createMatchUp(5, 8, 7, 12, 3, 9),
            createMatchUp(6, 12, 11, 14, 3, 10),
            createMatchUp(8, 9, 13, 15, 3, 11),
            //#endregion

            //#region COURT 4
            createMatchUp(13, 14, 15, 16, 4, 1),
            createMatchUp(4, 8, 11, 16, 4, 2),
            createMatchUp(4, 5, 9, 14, 4, 3),
            createMatchUp(3, 6, 5, 14, 4, 4),
            createMatchUp(2, 9, 10, 17, 4, 5),
            createMatchUp(2, 5, 9, 16, 4, 6),
            createMatchUp(1, 14, 2, 5, 4, 7),
            createMatchUp(1, 8, 11, 14, 4, 8),
            createMatchUp(6, 9, 10, 15, 4, 9),
            createMatchUp(3, 7, 5, 9, 4, 10),
            createMatchUp(5, 6, 11, 18, 4, 11),
            //#endregion
        ]
    },
    {
        numberOfPairs: 19,
        hasTwoRounds: true,
        matchUps: [
            //#region COURT 1
            createMatchUp(18, 16, 12, 19, 1, 1),
            createMatchUp(1, 9, 2, 16, 1, 2),
            createMatchUp(18, 17, 5, 9, 1, 3),
            createMatchUp(7, 11, 6, 5, 1, 4),
            createMatchUp(15, 16, 4, 13, 1, 5),
            createMatchUp(1, 10, 8, 11, 1, 6),
            createMatchUp(9, 8, 12, 14, 1, 7),
            createMatchUp(6, 1, 5, 3, 1, 8),
            createMatchUp(13, 9, 15, 3, 1, 9),
            createMatchUp(4, 11, 13, 17, 1, 10),
            createMatchUp(10, 8, 2, 17, 1, 11),
            createMatchUp(16, 19, 14, 11, 1, 12),
            //#endregion

            //#region COURT 2
            createMatchUp(5, 13, 6, 8, 2, 1),
            createMatchUp(1, 9, 2, 16, 2, 2),
            createMatchUp(18, 17, 5, 9, 2, 3),
            createMatchUp(7, 11, 6, 5, 2, 4),
            createMatchUp(15, 16, 4, 13, 2, 5),
            createMatchUp(1, 10, 8, 11, 2, 6),
            createMatchUp(9, 8, 12, 14, 2, 7),
            createMatchUp(6, 1, 5, 3, 2, 8),
            createMatchUp(13, 9, 15, 3, 2, 9),
            createMatchUp(4, 11, 13, 17, 2, 10),
            createMatchUp(10, 8, 2, 17, 2, 11),
            createMatchUp(16, 19, 14, 11, 2, 12),
            //#endregion

            //#region COURT 3
            createMatchUp(11, 10, 4, 15, 3, 1),
            createMatchUp(15, 11, 8, 3, 3, 2),
            createMatchUp(16, 14, 15, 10, 3, 3),
            createMatchUp(9, 19, 1, 8, 3, 4),
            createMatchUp(7, 5, 17, 9, 3, 5),
            createMatchUp(15, 2, 6, 7, 3, 6),
            createMatchUp(13, 15, 16, 17, 3, 7),
            createMatchUp(8, 14, 11, 2, 3, 8),
            createMatchUp(5, 2, 10, 16, 3, 9),
            createMatchUp(6, 3, 9, 16, 3, 10),
            createMatchUp(15, 6, 1, 18, 3, 11),
            createMatchUp(7, 9, 13, 1, 3, 12),
            //#endregion

            //#region COURT 4
            createMatchUp(14, 3, 7, 17, 4, 1),
            createMatchUp(13, 6, 12, 10, 4, 2),
            createMatchUp(4, 3, 19, 8, 4, 3),
            createMatchUp(10, 14, 3, 12, 4, 4),
            createMatchUp(2, 12, 19, 3, 4, 5),
            createMatchUp(17, 5, 18, 19, 4, 6),
            createMatchUp(7, 2, 11, 18, 4, 7),
            createMatchUp(4, 16, 7, 18, 4, 8),
            createMatchUp(1, 14, 8, 18, 4, 9),
            createMatchUp(1, 12, 14, 18, 4, 10),
            createMatchUp(5, 12, 9, 3, 4, 11),
            createMatchUp(15, 5, 17, 6, 4, 12),
            //#endregion
        ]
    },
    {
        numberOfPairs: 20,
        hasTwoRounds: true,
        matchUps: [
            //#region COURT 1
            createMatchUp(5, 16, 6, 1, 1, 1),
            createMatchUp(18, 1, 16, 3, 1, 2),
            createMatchUp(7, 8, 6, 1, 1, 3),
            createMatchUp(17, 5, 6, 7, 1, 4),
            createMatchUp(20, 14, 4, 19, 1, 5),
            createMatchUp(3, 20, 14, 2, 1, 6),
            createMatchUp(16, 3, 19, 18, 1, 7),
            createMatchUp(5, 8, 1, 18, 1, 8),
            createMatchUp(7, 12, 5, 17, 1, 9),
            createMatchUp(9, 15, 7, 13, 1, 10),
            createMatchUp(16, 20, 9, 14, 1, 11),
            createMatchUp(6, 16, 11, 10, 1, 12),
            //#endregion

            //#region COURT 2
            createMatchUp(7, 9, 20, 8, 2, 1),
            createMatchUp(18, 1, 16, 3, 2, 2),
            createMatchUp(7, 8, 6, 1, 2, 3),
            createMatchUp(17, 5, 6, 7, 2, 4),
            createMatchUp(20, 14, 4, 19, 2, 5),
            createMatchUp(3, 20, 14, 2, 2, 6),
            createMatchUp(16, 3, 19, 18, 2, 7),
            createMatchUp(5, 8, 1, 18, 2, 8),
            createMatchUp(7, 12, 5, 17, 2, 9),
            createMatchUp(9, 15, 7, 13, 2, 10),
            createMatchUp(16, 20, 9, 14, 2, 11),
            createMatchUp(6, 16, 11, 10, 2, 12),
            //#endregion

            //#region COURT 3
            createMatchUp(3, 11, 13, 2, 3, 1),
            createMatchUp(18, 1, 16, 3, 3, 2),
            createMatchUp(7, 8, 6, 1, 3, 3),
            createMatchUp(17, 5, 6, 7, 3, 4),
            createMatchUp(20, 14, 4, 19, 3, 5),
            createMatchUp(3, 20, 14, 2, 3, 6),
            createMatchUp(16, 3, 19, 18, 3, 7),
            createMatchUp(5, 8, 1, 18, 3, 8),
            createMatchUp(7, 12, 5, 17, 3, 9),
            createMatchUp(9, 15, 7, 13, 3, 10),
            createMatchUp(16, 20, 9, 14, 3, 11),
            createMatchUp(6, 16, 11, 10, 3, 12),
            //#endregion

            //#region COURT 4
            createMatchUp(15, 10, 18, 4, 4, 1),
            createMatchUp(18, 1, 16, 3, 4, 2),
            createMatchUp(7, 8, 6, 1, 4, 3),
            createMatchUp(17, 5, 6, 7, 4, 4),
            createMatchUp(20, 14, 4, 19, 4, 5),
            createMatchUp(3, 20, 14, 2, 4, 6),
            createMatchUp(16, 3, 19, 18, 4, 7),
            createMatchUp(5, 8, 1, 18, 4, 8),
            createMatchUp(7, 12, 5, 17, 4, 9),
            createMatchUp(9, 15, 7, 13, 4, 10),
            createMatchUp(16, 20, 9, 14, 4, 11),
            createMatchUp(6, 16, 11, 10, 4, 12),
            //#endregion
        ]
    },
    {
        numberOfPairs: 21,
        hasTwoRounds: true,
        matchUps: [
            //#region COURT 1
            createMatchUp(4, 2, 5, 11, 1, 1),
            createMatchUp(19, -1, 16, 8, 1, 2),
            createMatchUp(10, 6, 21, 13, 1, 3),
            createMatchUp(21, 10, 2, 19, 1, 4),
            createMatchUp(4, 16, 10, 12, 1, 5),
            createMatchUp(11, 6, 19, 9, 1, 6),
            createMatchUp(1, 14, 10, 15, 1, 7),
            createMatchUp(5, -1, 3, 16, 1, 8),
            createMatchUp(9, 11, 15, -1, 1, 9),
            createMatchUp(12, 14, 1, 19, 1, 10),
            createMatchUp(13, -1, 4, 1, 1, 11),
            createMatchUp(3, 4, 14, 15, 1, 12),
            createMatchUp(19, 13, 9, 7, 1, 13),
            createMatchUp(5, 19, 14, 21, 1, 14),
            //#endregion

            //#region COURT 2
            createMatchUp(17, 13, 21, 18, 2, 1),
            createMatchUp(4, 9, 14, 18, 2, 2),
            createMatchUp(14, 7, 20, 11, 2, 3),
            createMatchUp(7, 6, 16, -1, 2, 4),
            createMatchUp(1, 15, 18, 5, 2, 5),
            createMatchUp(20, 3, 18, 16, 2, 6),
            createMatchUp(13, 5, 11, 19, 2, 7),
            createMatchUp(8, 19, 18, 4, 2, 8),
            createMatchUp(20, 16, 4, 13, 2, 9),
            createMatchUp(3, 6, 17, 10, 2, 10),
            createMatchUp(21, 11, 18, 15, 2, 11),
            createMatchUp(9, 8, 5, 10, 2, 12),
            createMatchUp(11, 12, 21, -1, 2, 13),
            createMatchUp(9, 17, 16, 10, 2, 14),
            //#endregion

            //#region COURT 3
            createMatchUp(8, -1, 16, 15, 3, 1),
            createMatchUp(1, 20, 11, 3, 3, 2),
            createMatchUp(9, 15, 1, 17, 3, 3),
            createMatchUp(9, 3, 12, 13, 3, 4),
            createMatchUp(21, 20, 8, -1, 3, 5),
            createMatchUp(1, 12, 8, -1, 3, 6),
            createMatchUp(6, -1, 7, 2, 3, 7),
            createMatchUp(10, 2, 15, 12, 3, 8),
            createMatchUp(12, 21, 3, 7, 3, 9),
            createMatchUp(20, 13, 5, 2, 3, 10),
            createMatchUp(5, 17, 7, 10, 3, 11),
            createMatchUp(20, -1, 19, 12, 3, 12),
            createMatchUp(17, 20, 15, 6, 3, 13),
            createMatchUp(2, 18, 7, 13, 3, 14),
            //#endregion

            //#region COURT 4
            createMatchUp(20, 7, 1, 10, 4, 1),
            createMatchUp(15, 5, 6, 12, 4, 2),
            createMatchUp(19, 4, 2, -1, 4, 3),
            createMatchUp(5, 14, 18, 8, 4, 4),
            createMatchUp(3, 17, 11, 7, 4, 5),
            createMatchUp(13, 2, 17, 14, 4, 6),
            createMatchUp(21, 17, 20, 4, 4, 7),
            createMatchUp(14, 9, 7, 21, 4, 8),
            createMatchUp(8, 1, 17, 6, 4, 9),
            createMatchUp(8, -1, 9, 18, 4, 10),
            createMatchUp(14, 2, 6, 16, 4, 11),
            createMatchUp(11, 18, 16, 2, 4, 12),
            createMatchUp(8, 4, 3, 1, 4, 13),
            createMatchUp(6, -1, 12, 3, 4, 14),
            //#endregion
        ]
    },
    {
        numberOfPairs: 22,
        hasTwoRounds: true,
        matchUps: [
            //#region COURT 1
            createMatchUp(1, 2, 3, 4, 1, 1),
            createMatchUp(17, 18, 19, 20, 1, 2),
            createMatchUp(8, 9, 15, 10, 1, 3),
            createMatchUp(1, 7, 10, 14, 1, 4),
            createMatchUp(6, 21, 19, 22, 1, 5),
            createMatchUp(6, 17, 15, 21, 1, 6),
            createMatchUp(3, 6, 9, 17, 1, 7),
            //#endregion

            //#region COURT 2
            createMatchUp(5, 6, 7, 8, 2, 1),
            createMatchUp(21, 22, 8, 1, 2, 2),
            createMatchUp(11, 14, 16, 17, 2, 3),
            createMatchUp(3, 11, 15, 16, 2, 4),
            createMatchUp(1, 9, 5, 20, 2, 5),
            createMatchUp(1, 18, 11, 19, 2, 6),
            createMatchUp(21, 7, 12, 13, 2, 7),
            //#endregion

            //#region COURT 3
            createMatchUp(9, 10, 11, 12, 3, 1),
            createMatchUp(2, 5, 3, 7, 3, 2),
            createMatchUp(12, 18, 22, 3, 3, 3),
            createMatchUp(12, 2, 18, 8, 3, 4),
            createMatchUp(4, 7, 10, 16, 3, 5),
            createMatchUp(4, 20, 14, 22, 3, 6),
            createMatchUp(15, 22, 18, 20, 3, 7),
            //#endregion

            //#region COURT 4
            createMatchUp(13, 14, 15, 16, 4, 1),
            createMatchUp(4, 6, 9, 13, 4, 2),
            createMatchUp(19, 20, 21, 2, 4, 3),
            createMatchUp(4, 5, 13, 17, 4, 4),
            createMatchUp(14, 12, 11, 13, 4, 5),
            createMatchUp(2, 5, 10, 8, 4, 6),
            createMatchUp(16, -1, 19, -1, 4, 7),
            //#endregion
        ]
    },
    {
        numberOfPairs: 23,
        hasTwoRounds: true,
        matchUps: [
            //#region COURT 1
            createMatchUp(1, 6, 2, 5, 1, 1),
            createMatchUp(9, 1, 10, 3, 1, 2),
            createMatchUp(4, 5, 6, 9, 1, 3),
            createMatchUp(12, 5, 1, 7, 1, 4),
            createMatchUp(12, 2, 6, 10, 1, 5),
            createMatchUp(10, 1, 8, 9, 1, 6),
            createMatchUp(12, 6, 10, 11, 1, 7),
            createMatchUp(3, 5, 12, 9, 1, 8),
            //#endregion

            //#region COURT 2
            createMatchUp(3, 7, 4, 8, 2, 1),
            createMatchUp(11, 2, 12, 4, 2, 2),
            createMatchUp(7, 11, 10, 8, 2, 3),
            createMatchUp(2, 6, 3, 8, 2, 4),
            createMatchUp(-1, -1, -1, -1, 2, 5),
            createMatchUp(3, 11, 5, 7, 2, 6),
            createMatchUp(2, 4, 7, 9, 2, 7),
            createMatchUp(1, 8, 11, 4, 2, 8),
            //#endregion

            //#region COURT 3
            createMatchUp(13, 18, 14, 17, 3, 1),
            createMatchUp(21, 13, 22, 15, 3, 2),
            createMatchUp(16, 17, 18, 21, 3, 3),
            createMatchUp(24, 17, 13, 19, 3, 4),
            createMatchUp(24, 14, 18, 22, 3, 5),
            createMatchUp(22, 13, 20, 21, 3, 6),
            createMatchUp(24, 18, 22, 23, 3, 7),
            createMatchUp(15, 17, 24, 21, 3, 8),
            //#endregion

            //#region COURT 4
            createMatchUp(15, 19, 16, 20, 4, 1),
            createMatchUp(23, 14, 24, 16, 4, 2),
            createMatchUp(19, 23, 22, 20, 4, 3),
            createMatchUp(14, 18, 15, 20, 4, 4),
            createMatchUp(-1, -1, -1, -1, 4, 5),
            createMatchUp(15, 23, 17, 19, 4, 6),
            createMatchUp(14, 16, 19, 21, 4, 7),
            createMatchUp(13, 20, 23, 16, 4, 8),
            //#endregion
        ]
    },
    {
        numberOfPairs: 24,
        hasTwoRounds: true,
        matchUps: [
            //#region COURT 1
            createMatchUp(17, 18, 19, 20, 1, 1),
            createMatchUp(1, 2, 3, 4, 1, 2),
            createMatchUp(3, 8, 19, 23, 1, 3),
            createMatchUp(3, 7, 11, 15, 1, 4),
            createMatchUp(11, 24, 17, 23, 1, 5),
            createMatchUp(5, 10, 16, 23, 1, 6),
            createMatchUp(11, 16, 19, 24, 1, 7),
            createMatchUp(3, 5, 12, 14, 1, 8),
            //#endregion

            //#region COURT 2
            createMatchUp(21, 22, 23, 24, 2, 1),
            createMatchUp(5, 6, 7, 8, 2, 2),
            createMatchUp(4, 7, 20, 24, 2, 3),
            createMatchUp(4, 8, 12, 16, 2, 4),
            createMatchUp(16, 20, 21, 14, 2, 5),
            createMatchUp(3, 6, 18, 24, 2, 6),
            createMatchUp(12, 15, 20, 23, 2, 7),
            createMatchUp(4, 6, 11, 13, 2, 8),
            //#endregion

            //#region COURT 3
            createMatchUp(1, 5, 9, 13, 3, 1),
            createMatchUp(9, 10, 11, 12, 3, 2),
            createMatchUp(10, 13, 17, 22, 3, 3),
            createMatchUp(1, 6, 17, 21, 3, 4),
            createMatchUp(-1, -1, -1, -1, 3, 5),
            createMatchUp(4, 9, 15, 22, 3, 6),
            createMatchUp(1, 7, 10, 18, 3, 7),
            createMatchUp(2, 15, 19, 21, 3, 8),
            //#endregion

            //#region COURT 4
            createMatchUp(2, 6, 10, 14, 4, 1),
            createMatchUp(13, 14, 15, 16, 4, 2),
            createMatchUp(9, 14, 18, 21, 4, 3),
            createMatchUp(2, 5, 18, 22, 4, 4),
            createMatchUp(-1, -1, -1, -1, 4, 5),
            createMatchUp(7, 12, 13, 19, 4, 6),
            createMatchUp(2, 8, 9, 17, 4, 7),
            createMatchUp(1, 8, 20, 22, 4, 8),
            //#endregion
        ]

    }
]