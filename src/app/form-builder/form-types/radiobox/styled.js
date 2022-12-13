import styled from "styled-components/macro";

export const RadioWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: -8px;
margin-right: -8px;
`;

export const CheckboxOption = styled.label`
  padding: 10px 6px 7px 6px;
  width: 100%;
  display: block;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  margin-right: 8px;
  margin-bottom: 8px;
  div {
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease;
    background-color: rgba(38, 38, 38, 0.1);
    box-shadow: rgb(38 38 38 / 60%) 0px 0px 0px 1px inset;
    border-radius: 4px;
    &:hover {
      background-color: rgba(38, 38, 38, 0.3);
    }
  }

  input {
    width: 1px;
    height: 1px;
    opacity: 0;
    display: none;
    visibility: hidden;
    border-radius: 4px;
    &:checked + div {
      background-color: rgba(38, 38, 38, 0.3);
      border 1px solid rgb(38, 38, 38)
    }
  }

  .option {
    margin: 4px 5px;
    margin-top: auto;
    color: rgb(38, 38, 38);
    font-size: 18px;
  }

  .optionId{
    position: relative;
    width: 24px;
    min-width: 22px;
    height: 24px;
    border-radius: 2px;
    font-size: 12px;
    font-family: sans-serif;
    border-color: rgba(38,38,38,0.6);
    background-color: rgba(251,250,237,0.8) !important;
    color: rgb(38,38,38);
    margin: 4px 8px 0px 4px;
    padding: 2px 7px 2px 7px;
    border: 1px solid;
  }
`