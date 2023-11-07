import React from 'react'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from "@material-ui/core";
export default function InstructionModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (show) {  
        return (
            <div className="welcomeModal">
              <div>
              <Button className="corner" onClick={handleClose}>
                    <CloseIcon style={{ color: "black" }}/>
                </Button>
                <h2 className='instruction'>Welcome to ChatNYT, a version of NYT's Wordle with a Generative AI twist!</h2>
                <p className='instruction'>You have to guess the wordle in 6 tries.</p>
                <p className='instruction'>Each guess must be a valid 5-letter word.</p>
                <p className='instruction'>The color of the tiles will change to show how close your guess was to the word.</p>
                <p className='instruction'>If you need assistance, you can click the OpenAI logo to ask ChatGPT for help. ChatGPT will connect your most recent guess to the correct wordle.</p>
                <b className='instruction'>You can only use the ChatGPT assistance 1 time.</b>
              </div>
            </div>
          )
    }
    else {
        return (
            <div></div>
        )
    }
}
