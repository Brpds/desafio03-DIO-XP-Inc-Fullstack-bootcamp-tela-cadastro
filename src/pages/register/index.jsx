import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api"

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Column, LoginText, Row, SubtitleRegister, TenhoContaText, Title, TitleRegister, Wrapper } from "./styles";

const schema = yup.object({
    nomeCompleto:yup.string().min(3, 'Mínimo de 3 caracteres').required('Nome é obrigatório').max(100, 'Nome não pode exceder 100 caracteres'),
    email:yup.string().email('Email não é válido.').required('Email é obrigatório'),
    password:yup.string().min(3, 'No mínimo 3 caracteres.').required('Senha é obrigatória')
}).required()

const Register = () => {

    const navigate = useNavigate();
    
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    }); 

    const onSubmit = async formData => {
        try {
            //testa se um usuário com o email existe no db.json
            const { data } = await api.get(`users?email=${formData.email}`);
            
            if (data.length === 1) {
                //caso o usuário exista, retornará que o usuário já está cadastrado
                alert('Email já cadastrado')
            } else {
                //cadastrará o novo usuário, caso o email não exista
                const novoUsuario = {
                    // o id será uma timestamp, dificultando repetição
                    id: Date.now(),
                    name: formData.nomeCompleto,
                    email: formData.email,
                    senha: formData.password
                };
    
                const response = await api.post('/users', novoUsuario);
                //caso a resposta da requisição post seja 201, indica criado com sucesso
                if (response.status === 201) {
                    alert('Conta criada com sucesso!');
                    //passa para a página feed o nome de usuário criado para impressão no header
                    navigate('/feed', { state: {name: novoUsuario.name}});
                }
            }
        } catch (error) {
            alert('Houve um erro: ' + error.message);
        }
    };
    

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias,
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="nomeCompleto" errorMessage={errors?.nomeCompleto?.message} control={control} placeholder="Nome Completo" leftIcon={< FaUser />}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={< MdEmail />}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={< MdLock />}/>
                            <Button title="Criar minha conta" variant="secondary" type="button" />
                        </form>
                        <SubtitleRegister>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas
                            de privacidade e os Termos de Uso da DIO.
                        </SubtitleRegister>
                        <Row>
                            <TenhoContaText>Já tenho conta.</TenhoContaText>
                            <LoginText href="/login">Fazer Login</LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
            <Row>

            </Row>
        </>
    )
}

export {Register};