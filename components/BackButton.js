import Router from 'next/router'

const BackButton = () => (
    <button className="backButton" onClick={() => Router.back()}>
        &laquo; Back
        <style jsx>{`
          .backButton {
            margin: 20px 0;
            color: #0088ff;
            background: none;
            border: none;
            font-size: 14px;
          }
  
          .backButton:hover {
            color: #0070d2;
            cursor: pointer;
          }
      `}</style>
    </button>
)

export default BackButton
