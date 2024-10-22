import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper} from './styles';
import { Input } from "../../components/Input/";
import { api } from "../../services/api"

//schema criado com base no yupResolver para validação de campos do form
const schema = yup.object({
    email:yup.string().email('Email não é válido.').required('Email é obrigatório'),
    password:yup.string().min(3, 'No mínimo 3 caracteres.').required('Senha é obrigatória')
}).required()

const Login = () => {
    
    const navigate = useNavigate();
    //resolver passado como parâmetro na useForm para fazer as validations do schema
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                //passa para a página feed o nome de usuário logado para impressão no header
                navigate('/feed', {state: {name: data[0].name}});
            }else{
                alert('Email e/ou senha incorretos')
            }
        } catch (error) {
            alert('Houve um erro: ', error)
        }
    };

    return(
    <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e
                    entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro.</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={< MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={< MdLock />}/>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        
    </>
    )
}

export { Login };