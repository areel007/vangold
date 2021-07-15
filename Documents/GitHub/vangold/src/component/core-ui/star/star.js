import {useState} from "react";

const Star = props => {

    const colors = {
        yellow: "#F5A623",
        grey: "#5f5e5e"
    }

    return(
        <div className="star">
            {
                props.stars.map((_, index) => {
                    return (
                        props.currentValue > index ?
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                key={index}
                            >
                                <path d="M12.4305 7.99994L10.0005 -6.10352e-05L7.57049
                            7.99994H0.000488281L6.18049 12.4099L3.83049 19.9999L10.0005
                            15.3099L16.1805 19.9999L13.8305 12.4099L20.0005 7.99994H12.4305Z" fill="#F5A623"/>
                            </svg> :
                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                key={index}
                            >
                                <path d="M20.0005 7.23994L12.8105 6.61994L10.0005 -6.10352e-05L7.19049 6.62994L0.000488281 7.23994L5.46049 11.9699L3.82049 18.9999L10.0005 15.2699L16.1805 18.9999L14.5505 11.9699L20.0005 7.23994ZM10.0005 13.3999V4.09994L11.7105 8.13994L16.0905 8.51994L12.7705 11.3999L13.7705 15.6799L10.0005 13.3999Z" fill="#F5A623"/>
                            </svg>
                    )
                })
            }
        </div>
    )
}

export default Star