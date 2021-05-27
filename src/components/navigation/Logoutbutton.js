import styled from "styled-components";

export const Logoutbutton = styled.button`
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
  border: 0;
  border-radius: 20px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  background-color: #2B2D42;
  transition: all 0.3s ease;
  position: absolute;
  right: 10px;
  top: 10px;
`;

// background: rgb(6, 11, 38)