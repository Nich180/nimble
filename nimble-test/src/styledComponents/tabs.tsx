import styled from "styled-components";

interface tabProps { 
    active: boolean,
    id: any,
};

export const TabsLayout = styled.section`
    display: flex;
    align-items: baseline;
    flex-direction: column;
    max-width: 944px;
    margin-right: auto;
    margin-left: auto;
`;

export const Tabs = styled.div`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: -1px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  padding: 5px 20px;

  background: none;
  border-bottom: ${(props: tabProps) => (props.active ? "2px solid #007A68" : "")};
  color: ${(props: tabProps) => (props.active ? "" : "#999999")};
`;

export const Content = styled.div`
  border-top: 1px solid #E6E6E6;
  max-width: 944px;
  margin-right: auto;
  margin-top: 0.5px;
  margin-left: auto;
`;
