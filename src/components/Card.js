import '../styles/Card.css'

const Card = (props) => {
    const cardClicked = props.cardClicked

    return(
        <div className="main-card" id={`${props.title}` } onClick={() => cardClicked(props.title)}>
            <img alt="" src={require(`../assets/${props.imgSource}.png`).default} />
            <h3 id="title">{props.title}</h3>
        </div>
    )
}

export default Card;