import styled from "styled-components"; 

export const InputArea = styled.section<{theme:string}>`
display: flex;
width: 1200px;
margin: auto;
justify-content: space-between;
padding: 40px 0px;
transition: all ease 0.2;

input{
    height: 50px;
    witdth: 450px;
    border-radius: 2px;
    padding: 0px 10px;
    border: none;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    outline:0;
    font-size:14px;

    ::placeholder{
        color: #ccc
    }
}

select {
    border-radio: 2px;
    padding: 0px 20px;
    border: none;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    outline: 0;
    font-size: 14px
}

@media(max-width:1024px){
    & {
        width:auto;
        padding:20px
    }
}

@media(max-width: 768px){
    &{
        flex-direction: column;
        select{
            margin-top: 10px; 
            height: 50px;
            width: max-content
        }

        input{
            width: 97%
        }
    }
}
`

