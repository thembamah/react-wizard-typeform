import styled from 'styled-components/macro';

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -8px;
  margin-right: -8px;
`

export const Input = styled.input`
    display: block;
    width: 100%;
    font-family: inherit;
    color: rgb(38, 38, 38);
    padding: 0px 0px 8px;
    border: none;
    outline: none;
    border-radius: 0px;
    appearance: none;
    background-image: none;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    transform: translateZ(0px);
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    line-height: unset;
    -webkit-text-fill-color: rgb(38, 38, 38);
    animation: 1ms ease 0s 1 normal none running native-autofill-in;
    transition: background-color 1e+08s ease 0s, box-shadow 0.1s ease-out 0s;
    box-shadow: rgb(38 38 38 / 30%) 0px 1px;
    background-color: transparent !important;
    &:focus {
      box-shadow: rgb(38 38 38) 0px 2px;
    }
`