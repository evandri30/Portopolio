"use client";

import { useEffect, useState } from "react";

type Options = {
    typeMs?: number;
    deleteMs?: number;
    holdMs?: number;
};

/** Types each word out, holds it, deletes it, then moves to the next word (looping). */
export function useTypewriter(words: string[], { typeMs = 150, deleteMs = 50, holdMs = 1500 }: Options = {}) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const full = words[index % words.length];
        const finishedTyping = !deleting && text === full;
        const delay = finishedTyping ? holdMs : deleting ? deleteMs : typeMs;

        const timer = setTimeout(() => {
            if (finishedTyping) {
                setDeleting(true);
            } else if (deleting && text === "") {
                setDeleting(false);
                setIndex((i) => i + 1);
            } else {
                setText(full.slice(0, text.length + (deleting ? -1 : 1)));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

    return text;
}
