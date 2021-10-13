import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    min-height: 50vh;
    margin: auto;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 2px 5px #0000002D;
    border-radius: 5px;

    .title{
        text-align: center;
        margin: 20px;
        margin-top: 0;
    }

    .contentLogin{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`