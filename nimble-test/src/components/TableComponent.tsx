import React, { useCallback,useState } from "react";
import moment from 'moment';
import TriangleUp from '../assets/TriangleUp.svg';
import TriangleDown from '../assets/TriangleDown.svg'

interface TableComponentProps {
  data: any,
  footerLabel: string,
}

interface TableProps {
  date: string,
  description: string,
  amount: any,
}

const TableComponent = ({ data, footerLabel }: TableComponentProps) => {
  const [sort, setSort] = useState<boolean>(true);
  const [sortedData, setSortedData] = useState(data);

  const changeOrder = useCallback((order: boolean) => {
    setSort(order);
    setSortedData(
      data.sort(() => {
        return -1;
    }))
  }, [data])

  return (
  <>
    <table>
      <thead>
        <tr>
          <th onClick={() => changeOrder(!sort)}>{`DATE`} {sort ? <img src={TriangleUp} alt='up-triangle'/> : <img src={TriangleDown} alt='down-triangle'/>}</th>
          <th>TRANSACTION</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(({ date, description, amount }: TableProps, index: number) => {
          return (
            <tr key={index}>
              <td>{moment(date).format('DD/MM/YYYY')}</td>
              <td style={{ width: '60%' }}>{description}</td>
              <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'AUD' }).format(parseFloat(amount))}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>
            {`Total ${footerLabel} Repayments`}
          </td>
          <td />
          <td>
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'AUD' })
              .format(parseFloat(data.reduce((a: any, obj: { amount: number }) =>  a + obj.amount, 0))
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  </>
)};

export default TableComponent;
