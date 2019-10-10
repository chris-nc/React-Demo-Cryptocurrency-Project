import { useRef, useEffect } from 'react'

const PageTitle = ({ content }) => {
    
    const headingRef = useRef(null)
    
    useEffect(() => {
        headingRef.current.focus()
    }, [headingRef])
    
    return (
        <h1 className="title" ref={headingRef} tabIndex="-1">
            {content}
            <style jsx>{`
                .title {
                    color: #000;
                    margin-bottom: 5px;
                }
            `}</style>
        </h1>
    )
}

export default PageTitle