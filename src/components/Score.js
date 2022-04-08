export default function Score ({score, resetScore}) {
    return (
        <section>
            <h2><span className="yellow">Score: </span>{score}</h2>
            <button onClick={resetScore} className="red">Reset score</button>
        </section>
    )
}