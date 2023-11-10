# Getting Started with Create React App

Thank you to [Net Ninja](https://www.youtube.com/watch?v=ZSWl5UwhHcs) for an incredibly detailed and helpful tutorial on setting up a Wordle clone app in React! Most of my frontend experience is in Vue.js, so this project helped me immensely in getting better with things like React Hooks.

## Overview
It is no secret that Wordle took the world by storm in 2022. It allowed people to connect with their friends, family, and peers through a little bit of healthy competition. Personally, I look forward to challenging my partner who lives across the country in a Wordle match everyday (even though I lose more often than not 😔).

As somebody who hates to lose, coupled with being an AI-optimist who likes to throw AI at trivial problems, I wanted to see how I could leverage Generative AI to help me in my daily Wordle endeavors. I mean, considering that there are more than *158,000* 5-letter words in the English language, how am I supposed to guess just one of them in 6 tries? Preposterous. Ridiculous.

Introducing [ChatNYT](https://chatnyt-1acc81fc0a7a.herokuapp.com/), a ChatGPT assisted Wordle game! This game allows the user to prompt ChatGPT for a hint that connects their most previous guess to the hidden word at most once. The hope is that the user can narrow down the possible list of 5 letter words that they are guessing.

We know that [Language Models are Few Shot Learners](https://papers.nips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html). For this project, I ask ChatGPT to connect the hidden word with the most previous guess (in nontrivial ways, i.e. other than the fact that they are both 5 letter words), and feed in several examples to allow ChatGPT to perform few-shot in-context learning in the hopes to make the hints more helpful.

This app was created using React and the OpenAI API (GPT-3.5). See below how to run locally, or play the deployed version [here](https://chatnyt-1acc81fc0a7a.herokuapp.com/)!



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

