export function Post(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <small>{props.author}</small>
            <br />
            <button>Curtir</button>
        </div>
    )
}

