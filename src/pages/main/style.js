import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
   
`

// export const Content = styled.div`
//     display: flex;
//     padding-top: 20px;
//     justify-content: center;
// `

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px; 

`

export const Form = styled.form`
    margin-top: 20px;

    display: flex;
    justify-content: center;
    input {
        width: 230px;
        height: 45px;
    }

    @media screen and (min-width: 768px) {
        input {
            width: 230px;
            height: 45px;
        }
    }

    button {
        border: 0;
        margin-left: 4px;
        background-color: #63f5b0;
        padding: 10px;
        color: white;
        font-weight: bold;
        &:hover {
            background-color: #52D89F;
        }
    }

`