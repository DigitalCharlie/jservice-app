export default function Question ({q}) {
    const {question, category, value} = q
    return (
    <div>
        <h3><span className="yellow">Category:</span> {category.title}</h3>
        <h3><span className="yellow">Value:</span> {value}</h3>
        <h3><span className="yellow">Question:</span> {question}</h3>
    </div>)
}