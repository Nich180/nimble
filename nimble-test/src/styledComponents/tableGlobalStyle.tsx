import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      border-bottom: 1px solid #E6E6E6;
      border-collapse: collapse;
    }
    th {
      text-transform: uppercase;
    },
    td,
    tr {
      font-size: 14px;
      height: 50px;
      padding: 5px;
      text-align: left;
    }
    th {
      text-align: left;
      font-size: 12px;
      color: #999999;
    }
    tfoot { 
      font-weight: bold;
      tr {
        td {
          border-bottom: 0px solid red;
        }
      }
    }
  }
`;