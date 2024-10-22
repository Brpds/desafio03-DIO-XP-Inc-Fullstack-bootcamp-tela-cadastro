import styled from "styled-components"

/*
    os styled components poderiam ser reutilizados se importados de
    '../login/styles'. A opção de refazê-los foi pela intenção de 
    reforçar o que foi aprendido sobre a customização de componentes
*/

export const Container = styled.main`
    width:100%;
    max-width:80%;
    margin:0 auto;
    margin-top:20px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const Wrapper = styled.div`
    max-width:300px;
`

export const Column = styled.div`
    flex:1
`

export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
`
export const Title = styled.h2`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:32px;
    width:320px;
    margin-bottom:20px;
    line-height:44px;

    color:#FFF;
`

export const TitleRegister = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:32px;
    width:320px;
    margin-bottom:20px;
    line-height:44px;
`

export const SubtitleRegister = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:400;
    font-size:18px;
    margin-bottom:35px;
    margin-top:10px;
    line-height:25px;
`

export const TenhoContaText = styled.p`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:14px;
    line-height:19px;

    color:#FFF;
`

export const LoginText = styled.a`
    font-family:'Open Sans';
    font-style:normal;
    font-weight:700;
    font-size:14px;
    line-height:19px;
    text-decoration:none;

    color:#23DD7A;
`