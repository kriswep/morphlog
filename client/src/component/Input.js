import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  line-height: 1rem;
  padding: 0.1rem 0;
  font-size: 0.8rem;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${props => props.theme.lightAccent};
  padding: 0.5rem 0.25rem;
  box-shadow: -0.05rem 0.05rem 0.2rem ${props => props.theme.lightAccent};
  border-radius: 0.2rem;
  &:focus {
    outline-color: ${props => props.theme.lightAccent};
  }
  &::placeholder {
    color: ${props => props.theme.lightAccent};
  }
`;

const Textarea = Input.withComponent('textarea').extend`
  resize: none;
  height: 8rem;
`;

const MyInput = ({ textarea, name, label, ...rest }) => {
  return (
    <Container>
      {name && label && <Label for={name}>{label}</Label>}
      {textarea ? (
        <Textarea name={name} {...rest} />
      ) : (
        <Input name={name} {...rest} />
      )}
    </Container>
  );
};

export default MyInput;
