import styled from "styled-components"

interface ImgProps {
    src: string;
}


export const Img = styled.img<ImgProps>`
    width:70px;
    height:70px;
`;