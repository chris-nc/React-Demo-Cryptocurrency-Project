import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import RateTable from '../components/RateTable'
import { apiParams, apiUrlString } from '../utils/utils'

const Index = (props) => (
  <Layout>
    <RateTable data={props.data} />
  </Layout>
)

Index.getInitialProps = async () => {

  const [ usdt, btc, bch, lcc ] = await Promise.all([
    fetch(apiUrlString('usdt'), apiParams.apiRequestHeaders).then(result => result.json()),
    fetch(apiUrlString('btc'), apiParams.apiRequestHeaders).then(result => result.json()),
    fetch(apiUrlString('bch'), apiParams.apiRequestHeaders).then(result => result.json()),
    fetch(apiUrlString('lcc'), apiParams.apiRequestHeaders).then(result => result.json()),
  ])

  return {
    data: [
      btc,
      bch,
      lcc,
      usdt,
    ]
  }
}

export default Index