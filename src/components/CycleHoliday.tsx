import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🐲" | "💖" | "🐱" | "🎃" | "🎄";

const date_transitions: Record<Holiday, Holiday> = {
    "🐲": "💖",
    "💖": "🐱",
    "🐱": "🎃",
    "🎃": "🎄",
    "🎄": "🐲",
};

const alphabetical_transitions: Record<Holiday, Holiday> = {
    "🐱": "🐲",
    "🐲": "🎄",
    "🎄": "🎃",
    "🎃": "💖",
    "💖": "🐱",
};

export function CycleHoliday(): React.JSX.Element {
    const [Holiday, setHoliday] = useState<Holiday>("🐲");

    function changeHolidayDate(): void {
        const newHoliday = date_transitions[Holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayAlphabetically(): void {
        const newHoliday = alphabetical_transitions[Holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>Holiday: {Holiday}</span>
            <Button onClick={changeHolidayAlphabetically}>
                Advance Holiday by Alphabet
            </Button>
            <Button onClick={changeHolidayDate}>Advance Holiday by Year</Button>
        </div>
    );
}

/*
date order
🐲 - chinese new year - 1/29
💖 - valentines - 2/14
🐱 - cat day - 10/29
🎃 - halloween - 10/31
🎄 - christmas - 12/25

alphabetical order
🐱 - cat day - 10/29
🐲 - chinese new year - 1/29
🎄 - christmas - 12/25
🎃 - halloween - 10/31
💖 - valentines - 2/14
*/
