import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import CoinDetailItem from '../../components/CoinDetailItem'
import BackButton from '../../components/BackButton'
import { apiParams, apiUrlString, currencyFormat } from '../../utils/utils'

const Detail = ({ detail }) => (
    <Layout>
        <div className="detail">
            <PageTitle content={`${detail.coin_name} | ${detail.coin_id}`} />
            <CoinDetailItem className='price' label='Price:' value={currencyFormat(detail.last_price)} />
            <CoinDetailItem className='24-hr-vol' label='24-Hour Volume:' value={currencyFormat(detail.volume_24hr)} />
            <CoinDetailItem className='coin-yield' label='$100 = ' value={currencyFormat(detail.last_price/100)} />
            <CoinDetailItem className='coin-yield' label='$250 = ' value={currencyFormat(detail.last_price/250)} />
            <CoinDetailItem className='coin-yield' label='$5,000 = ' value={currencyFormat(detail.last_price/5000)} />
        </div>
        <BackButton />
    </Layout>
)

Detail.getInitialProps = async (router) => {

    const detail = await fetch(apiUrlString(router.query.id), apiParams.apiRequestHeaders).then(result => result.json())
  
    return { detail }
  }
  
export default withRouter(Detail)