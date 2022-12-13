import styled from 'styled-components/macro';

export const QuestionWrapper = styled.section`
  width: 720px;
  margin: 0 auto;
`

export const QuestionTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: rgb(38, 38, 38);
  text-align: left;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -43px;

  span{
    color: rgb(38, 38, 38);
    font-size: 16px;
    line-height: 20px;
    height: 100%;
    outline: none;
    margin-right: 10px;
    svg{
      margin-left: 10px;
    }
  }
`

export const AnswersWrapper = styled.div`
  margin-top: 32px;
`