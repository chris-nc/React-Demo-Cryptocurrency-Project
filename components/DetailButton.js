import Link from 'next/link'

const DetailButton = ({ coinId }) => (
    <Link href="/detail/[id]" as={`/detail/${coinId}`}>
      <button type="button">
        Details
        <style jsx>{`
          button {
            background-color: #676767;
            color: #FFF;
            padding: 10px 15px;
            font-size: 14px;
            border-radius: 8px;
          }
  
          button:hover {
            background-color: #000;
            cursor: pointer;
          }
      `}</style>
      </button> 
    </Link>  
)

export default DetailButton