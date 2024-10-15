import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [counter, setCounter] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function useAttempt(): void {
        setCounter(counter - 1);
        setProgress(!inProgress);
    }

    function changeProgress(): void {
        setProgress(!inProgress);
    }

    function addAttempt(): void {
        setCounter(counter + 1);
    }

    return (
        <div>
            <Button onClick={useAttempt} disabled={inProgress || counter === 0}>
                Start Quiz
            </Button>
            <Button onClick={changeProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
            <span>Number of Attempts Left: {counter}</span>
        </div>
    );
}
