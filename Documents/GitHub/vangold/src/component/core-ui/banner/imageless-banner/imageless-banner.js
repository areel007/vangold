import "./imageless-banner.css"

const ImagelessBanner = props => {
    return (
        <div className="imageless-banner">
            <div className="container">
                <div className="imageless-banner__inner">
                    <span>{ props.bannerText }</span>
                </div>
            </div>
        </div>
    )
}

export default ImagelessBanner