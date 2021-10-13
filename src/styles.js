import styled from 'styled-components';

export const ContainerRepo = styled.div`
    padding: 0px 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    h2{
        margin: 20px 12px;
        text-align: center;
    }
    h2 span{
        color: #686868;
        font-style: italic;
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ul li{
        background-color: #E8EEF0;
        padding: 5px 20px;
        margin: 3px 0;
        border-radius: 50px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul li a{
        color: #000000;
    }
    ul li a:hover{
        color: #535353;
    }

    button{
        border: none;
        background-color: #ffffff;
        padding: 8px 10px;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #00000036;
        margin: 3px;
        cursor: pointer;
    }

    .iconFavorite{
        color: #EEBE1F;
        margin-left: 10px;
    }


    .containerActionsRepo{
        display: flex;
        align-items: center;
    }

    .containerActionsRepo .formAvalicao label{
        margin-right:10px;
        font-weight: 500;
    }

    .containerActionsRepo .formAvalicao select{
        min-width: 40px;
        margin-right:15px;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
        box-shadow: 0px 2px 5px #00000036;
        outline: none;
    }
`