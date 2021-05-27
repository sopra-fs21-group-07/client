import styled from "styled-components";

export const Button = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: ${props => props.width || null};
  height: 35px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: ${props => props.marginLeft || null};
  border: 0;
  border-radius: 10px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  // opacity: ${props => (props.disabled ? 1 : 1)};
  background: #408cec;
  transition: all 0.3s ease;
  :disabled {
    background: #dddddd;
  }
`;
