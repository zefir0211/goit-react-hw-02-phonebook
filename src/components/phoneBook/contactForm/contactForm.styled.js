import styled from '@emotion/styled';

export const Form = styled.form`
    margin-top: 20px;
`;

export const Span = styled.span`
    display: block;
    margin-top: 20px;
    text-align: center;
`;

export const Input = styled.input`
    width: 70%;
    margin: 10px auto 0 auto;
    padding: 5px 10px;
    display: block;
    border-radius: 10px;
    font-size: 1em;
`;

export const Button = styled.button`
    margin: 0 auto;
    margin-top: 20px;
    padding: 5px 10px;
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.88;
    background: transparent;
    border: 0 solid;
    border-radius: 3px;
    box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 0%);
    color: #fff;
    outline: 2px solid;
    outline-color: hsla(0, 0%, 100%, 0.5);
    outline-offset: 0;
    position: relative;
    text-decoration: none;
    text-shadow: none;
    text-transform: uppercase;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, &:focus {
        transform: scale(1.05);
    }
`;