// my code with errors

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Color = "red" | "blue" | "green";

const color_transitions: Record<Color, Color> = {
    red: "blue",
    blue: "green",
    green: "red",
};

interface ColorProps {
    color: Color;
    setColor: (newColor: Color) => void;
}

function ChangeColor(props: ColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                const newColor = color_transitions[props.color];
                props.setColor(newColor);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview(props: ColorProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: props.color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [color, setColor] = useState<Color>("red");

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {color}</span>
            <div>
                <ChangeColor color={color} setColor={setColor}></ChangeColor>
                <ColorPreview color={color} setColor={setColor}></ColorPreview>
            </div>
        </div>
    );
}
