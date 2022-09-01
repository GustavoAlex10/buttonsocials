import styled from 'styled-components'



export const Btn = styled.button`
    display: inline-block;
    width: 90px;
    height: 90px;
    background-color: #fff;
    box-shadow: 0 5px 15px -5px #aaa;
    margin:10px;
    border-radius:30%;
    overflow: hidden;
    position: relative;
    color: #42d2ff;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        width:120%;
        height: 120%;
        background: linear-gradient(#00c6ff, #0072ff);
        transform: rotate(45deg);
        left: -110%;
        top: 90%;
    }

    &:hover{
        color: #fff;
        transform:scale(1.3);

    
    }
    &:hover::before{
        animation: onHover 0.7s 1;
        left: -10%;
        top: -10%;
    }


    @keyframes onHover {
        0% {
            left: -110%;
            top: 90%;
        }
        50% {
            left: 10%;
            top: -30%;
        }
        100% {
            left: -10%;
            top: -10%;
        }
    }
    
`;


