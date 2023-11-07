import {React, useState, useEffect } from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import OpenAI from 'openai';
import { ring } from 'ldrs'
import { Icon } from "@material-ui/core";
import YourLogo from '../chatgpt.svg'
ring.register()

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true // This is also the default, can be omitted
});

export default function AIAssistance({solution, guesses, turn}) {
    const [showRes, setShowRes] = useState(false)
    const [res, setRes] = useState('')
    const [clicked, setClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    let mostRecent = guesses[turn-1].map((l, i) => {
        return l.key
    }).join('')
    const chatCompletion = async() => {
        let response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": `we are playing a game where I have to guess a 5 letter secret word. You know the word, but I do not. I need your help in giving me hints about the secret word without actually revealing the word itself. You will help me by relating the most previous word that I just guessed with the secret word. Again, you will not reveal the word. For example, if my most recent guess was spoon, and the word is pasta, you would give a hint such as \"your guess spoon relates to the hidden word in that they both pertain to food. the difference is that spoon is a possible vessel in which you can eat the secret word with.\" Also, do not make the hint about the number of letters in the word. for this scenario, my most recent guess was ${mostRecent}, and the secret word is ${solution}. please give me a hint, using the instructions I just gave, without revealing the secret word ${solution}. It is incredibly important that you response does not include the word ${solution}!`}],
            temperature: 0.2,
            max_tokens: 1000,
            frequency_penalty: 0.0
        });
        console.log()
        return response['choices'][0]['message']['content']
    }
    const getResponse = async() => {
        if (!clicked) {
            setIsLoading(true);
            let response = await chatCompletion();
            setIsLoading(false);
            setRes(response);
            setShowRes(true);
            setClicked(true);
        }
        else {
            let response = 'You have already used your AI Assistance.';
            setRes(response);
        }
    }
  return (
    <div className='assistance'>
    <IconButton onClick={getResponse} fontSize = "small" color="primary" style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px',alignItems: "center", justifyContent: "center"}} aria-label="AI Assistance" component="span">
        <Icon>
            <img src={YourLogo} height={23} width={23} alt="description"/>
        </Icon>
        </IconButton>
        {isLoading && <l-ring className="fade" size="30" color="gray"></l-ring>}
        {showRes && <p className='typewriter'>{res}</p>}
    </div>
  )
}