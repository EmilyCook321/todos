imprt React, { useState } from "react";
import styled from "@emotion/styled";
import { useState } from "react";

export default function Todo({ todo }) {
    const [complete, setComplete] = useState(todo.complete);

    function completeTdo() {
        setComplete(true);
    }
}