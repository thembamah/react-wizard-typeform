import styled from 'styled-components/macro';

export const FormBuilderWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const StepWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  transition: all .5s ease;
  .fade-enter {
    opacity: 0;
    transform: translateY(-100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateY(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateY(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateY(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 400ms, transform 400ms;
  }  

  .fade-out-enter {
    opacity: 0;
    transform: translateY(100%);
  }
  .fade-out-enter-active {
    opacity: 1;
    transform: translateY(0%);
  }
  .fade-out-exit {
    opacity: 1;
    transform: translateY(0%);
  }
  .fade-out-exit-active {
    opacity: 0;
    transform: translateY(-100%);
  }
  .fade-out-enter-active,
  .fade-out-exit-active {
    transition: opacity 400ms, transform 400ms;
  }  
`

export const ArrowsWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 25px;
  bottom: 25px;
  transition: all .3s ease;
  visbility: ${props => props.show ? 'visible' : 'hidden'};
  display: ${props => props.show ? 'flex' : 'none'};
  
`

export const ArrowsButton = styled.button`
  width: 36px;
  min-width: 36px;
  height: 32px;
  background-color: rgb(38, 38, 38);
  border: none;
  outline: none,
  display: flex;
  border-radius: 0px 4px 4px 0px;
  align-items: center;
  justify-content: center;
  &:first-of-type {
    background-color: rgb(38, 38, 38);
    color: rgb(229, 229, 229);
    border-radius: 4px 0px 0px 4px;
    border-right: 1px solid rgba(128, 128, 128, 0.3);
  }
  svg {
    fill: rgb(229, 229, 229);
  }
`