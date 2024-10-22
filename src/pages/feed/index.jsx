import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo"
import { useLocation } from "react-router-dom";

const Feed = () => {

    //useLocation receberá o state passado pelas páginas para impressão
    const location = useLocation();
    //armazena o nome de usuário vindo do state na variável userName
    const userName = location.state?.name;

    return(
    <>
        <Header autenticado={true} userName={userName} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>Top 4 da semana:</TitleHighlight>
                <UserInfo percentual={75} nome="John Doe" image='https://picsum.photos/32/32'/>
                <UserInfo percentual={65} nome="John Doe" image='https://picsum.photos/32/32'/>
                <UserInfo percentual={45} nome="John Doe" image='https://picsum.photos/32/32'/>
                <UserInfo percentual={25} nome="John Doe" image='https://picsum.photos/32/32'/>
            </Column>
        </Container>
        
    </>
    )
}

export { Feed };