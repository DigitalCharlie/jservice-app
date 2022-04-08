// Dependencies
import {useState, useEffect} from "react";

// Components
import Answer from "./Answer"
import Question from "./Question"

export default function PlayArea ({changeScore}) {

    // API
    const url = `https://jservice.io/api/random`
    
    // USE STATES
    const [question, setQuestion] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)
    const [scored, setScored] = useState(false)
    const [result, setResult] = useState(false)

    const getQuestion = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setQuestion(data[0])
            setShowAnswer(false)
            setScored(false)
            setResult(false)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getQuestion()
    }, [])

    const loaded = () => {
        return (
            <section>
                <h2>Let's Play!</h2>
                <button className="lightblue" onClick={getQuestion}>Get New Answer</button>
                <Question q={question} />
                <Answer changeScore={changeScore} scoredState={{scored, setScored}} q={question} answerVisibilityState={{showAnswer, setShowAnswer}} resultState={{result, setResult}} getQuestion={getQuestion} />
            </section>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return question ? loaded() : loading ()

}