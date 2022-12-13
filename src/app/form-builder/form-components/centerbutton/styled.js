import styled from 'styled-components/macro';

export const Button = styled.button`
position: relative;
font-family: inherit;
line-height: inherit;
font-weight: 700;
cursor: pointer;
transition-duration: 0.1s;
transition-property: background-color, color, border-color, opacity, box-shadow;
transition-timing-function: ease-out;
outline: none;
border: 1px solid transparent;
box-shadow: rgb(0 0 0 / 10%) 0px 3px 12px 0px;
padding: 6px 14px;
min-height: 40px;
background-color: rgb(38, 38, 38);
color: rgb(229, 229, 229);
border-radius: 4px;
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
div{
  display: flex;
  align-items: center;
  margin-left: 10px;
  max-width: 100%;
  font-size: 12px;
  color: rgb(38, 38, 38);
  strong{
    font-weight: 600;
    margin-left: 4px
  }
}
`