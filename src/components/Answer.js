export default function Answer ({changeScore, scoredState, q, answerVisibilityState, resultState, getQuestion}) {

    const {answer, value} = q
    const {showAnswer, setShowAnswer} = answerVisibilityState
    const {scored, setScored} = scoredState
    const {result, setResult} = resultState

    const scoreAnswer = (num, result) => {
        changeScore(num)
        setScored(true)
        setResult(result)
    }

    const hiddenAnswer = () => {
        return (
            <div>
                <button className="darkblue reveal" onClick={()=>setShowAnswer(true)}>Click to reveal question</button>
            </div>
        )
    }

    const revealedAnswer = () => {
        return (
            <div>
                <h3><span className="yellow">Question:</span> {answer}</h3>
                <button className="green" onClick={()=> scoreAnswer(value, true)}>I got it right!</button>
                <button className="red" onClick={()=> scoreAnswer(-value, false)}>I was wrong.</button>
            </div>
        )
    }

    const completedScoring = () => {
        return (
            <div>
                <h3><span className="yellow">Question:</span> {answer}</h3>
                { result === true ? <p>Great job!</p> : <p>You'll get the next one.</p> }
                <button className="lightblue"onClick={getQuestion}>Next answer</button>
            </div>
        )
    }

    return (
        showAnswer === true && scored === true ? completedScoring () 
        : showAnswer === true ? revealedAnswer() 
        : hiddenAnswer ()
    )

}