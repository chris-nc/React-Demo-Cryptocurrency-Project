import DetailButton from './DetailButton'
import { currencyFormat } from '../utils/utils'

const TableHead = () => (
    <thead>
      <tr>
        <th scope="col">Coin Name</th>
        <th scope="col">Symbol</th>
        <th scope="col">Price</th>
        <th scope="col"></th>
      </tr>
      <style jsx>{`
        thead {
          border: 1px solid #CCC;
        }
        th {
          text-align: left;
          padding: 20px 10px;
          color: #000;
        }
      `}</style>
    </thead>
  )
  
  const TableBody = ({ data }) => (
    <tbody>
      {data.map((coin) => (
        <TableRow coin={coin} key={coin.coin_id} />
      ))}
    </tbody>
  )
  
  const TableRow = ({ coin }) => (
    <tr>
      <td scope="row">{coin.coin_name}</td>
      <td>{coin.coin_id}</td>
      <td>{currencyFormat(coin.last_price)}</td>
      <td><DetailButton coinId={coin.coin_id}/></td>
      <style jsx>{`
        td {
          text-align: left;
          padding: 10px 10px;
        }
        tr:nth-child(odd) {
          background: #ECECEC
        }
        tr:nth-child(even) {
          background: #FFF
        }
      `}</style>
    </tr>
  )

  const RateTable = ({ data }) => (
    <table>
        <TableHead />
        <TableBody data={data} />
        <style jsx>{`
            table {
                width: 100%;
                margin: 20px auto;
                border-collapse: collapse;
                border: 1px solid #CCC;
            }
        `}</style>
    </table>
  )

  export default RateTable