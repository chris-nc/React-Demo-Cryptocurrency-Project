const CoinDetailItem = ({ className, label, value }) => (
    <div className={`detail-group ${className}`}>
        <div className="label">{label}</div>
        <div className="value">{value}</div>
        <style jsx>{`
            .detail-group {
                padding: 5px 0;
            }

            .label {
                display: inline-block;
                font-weight: bold;
                color: #000;
                margin-right: 5px;
            }

            .value {
                display: inline-block;
            }
        `}</style>
    </div>
)

export default CoinDetailItem