import React from 'react'

import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import {
    BuscarInputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
    UserName
} from './styles'
import { useNavigate } from 'react-router-dom'

const Header = ({autenticado, userName}) => {
    
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/register')
    }

  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <a href='/'><img src={logo} alt='Logo da Dio' /></a>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <>
                    <UserName>{userName}</UserName>
                    <UserPicture src='https://picsum.photos/32/32'/>
                    </>
                ) : (
                <>
                    <MenuRight href='/'>Home</MenuRight>
                    <Button onClick={handleLogin} title="Entrar"/>
                    <Button onClick={handleRegister} title="Cadastrar"/>
                </>
                )
                }
                
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export {Header}