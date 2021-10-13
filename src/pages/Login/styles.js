import styled from 'styled-components';

export const Container = styled.div`

    width: 50%;
    min-height: 97vh;
    margin: auto;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 2px 5px #0000002D;
    border-radius: 5px;

    .title{
        text-align: center;
        margin: 10px;
    }

    .subTitle{
        margin-bottom: 30px;
        width: 80%;
        text-align: center;
    }

    .subTitle span{
        color: #686868;
        font-style: italic;
    }

    .iconFavorite{
        color: #EEBE1F;
        margin-left: 10px;
    }

    .contentLogin{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`