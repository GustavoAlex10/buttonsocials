import styled from 'styled-components'

interface ContainerProps {
    backgroundColor: string;
}


export const Container = styled.div<ContainerProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width:1200px;
    text-align: center;
    

   
`;


