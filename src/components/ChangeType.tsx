import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    // No parameters or return value, because it's a closure
    function changeQuestionType(): void {
        setQuestionType(
            // If it's red, make it green
            questionType === "short_answer_question" ?
                "multiple_choice_question"
                // If it's green, make it yellow
            :   "short_answer_question",
        );
    }

    // Only includes <div>Hello!</div> if `visible` is true
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
