function ReadTime(readtime){
    if (readtime < 30){
        let coffeenum=Math.floor(readtime/5)
        let coffees= "☕️".repeat(coffeenum+1)
        return (
            <p>{coffees} {readtime} minute read</p>
        )
    }
    if (readtime >=30){
        let bentonum=Math.floor(readtime/10)
        let bentos="🍱".repeat(bentonum+1)
        return (
            <p>{bentos} {readtime} minute read</p>
        )
    }
}

function Article({title,date="January 1,1970",preview,readtime}){
    return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        {ReadTime(readtime)}
    </article>
    )
}

export default Article