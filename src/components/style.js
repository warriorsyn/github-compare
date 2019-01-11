import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;
    flex-wrap: wrap;
`

export const Repository = styled.div`


    div {
        display: flex;
        background-color: white;
        border-radius: 3px;
        width: 240px;
        flex-direction: column;
        margin: 0 10px;
        margin-bottom: 10px;
        flex: 0 0 100%; 
    }

    @media screen and (min-width: 480px) {
        div {
            flex: 0 0 50%;
        }
    }
    @media screen and (min-width: 768px) {
        div {
            flex: 0 0 100%;
        }
    }



    header {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 64px;
    }
    
    strong {
        font-size: 24px;
        margin-top: 10px;
    }

    small {
        font-size: 14px;
        color: #666;
    }

    ul {
        list-style: none;

    }

    li {
        font-weight: bold;
        padding: 12px 20px;
        

        small {
            font-weight: normal;
            font-size:12px;
            color: #999;
            font-style: italic;
        }

        &:nth-child(2n - 1) {
            background-color: #f5f5f5;
        }
    }

`