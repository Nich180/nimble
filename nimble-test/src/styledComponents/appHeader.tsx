import styled from "styled-components";

interface ImgProps {
    hasMargin: boolean,
}

export const AppHeader = styled.header`
    background-color: #ED2924;
    height: 118px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    margin-bottom: 60px;
`;

export const Img = styled.img`
    margin-bottom: ${({ hasMargin }: ImgProps) => (hasMargin ? "6px" : "0")};
`;
