import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi. The names Adrian Ayala",
            "Developer",
            "Creator",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  );
}