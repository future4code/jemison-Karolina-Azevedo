import { CardContainer } from "./style";

export function Card (props) {
    const {photo, name, age, bio} = props
    return (
        <CardContainer>
            <img src={photo} alt={"foto"}/>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <p>{bio}</p>
            <button>X</button>
            <button>Coração</button>
        </CardContainer>
    )
}