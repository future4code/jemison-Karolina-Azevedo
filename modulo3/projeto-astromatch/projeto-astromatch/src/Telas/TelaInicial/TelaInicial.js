import { TelaInicialContainer } from './style'
import { Header } from '../../Components/Header/Header'
import {Card} from '../../Components/Card/Card'



export function TelaInicial (props) {
    const {perfil} = props
    const renderPerfil = perfil.map(profile => {
        return(
            <Card 
            photo={profile.photo}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}/>
        )}) 


return (
    <TelaInicialContainer>
    <Header/>
   
    <main>
        {renderPerfil}
    </main>
    </TelaInicialContainer>
)

} 