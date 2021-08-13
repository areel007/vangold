import React from "react";
import ImagelessBanner from "../../core-ui/banner/imageless-banner/imageless-banner";
import "./top-jobs-view.css";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import TopJobsViewModal from "../../core-ui/modal/top-jobs-view";

const TopJobsView = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <div className="top-jobs-view">
            <ImagelessBanner bannerText="Top Jobs" />
                <div className="container">
                    <div className="top-jobs-view__inner">
                        <p className="page-nav">Vangold > Browse Jobs</p>

                        <div className="jobs-view-head">
                            <h2>Website and Application Designer</h2>
                            <p>₦200,000-₦500,000</p>
                        </div>
                        <div className="jobs-view-head2">
                            <div style={{width:530}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#808080"/>
                                </svg>
                                <p>Lagos, Nigeria</p>
                            </div>
                            <div style={{width:600}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8.99977L3 10.9998C7.97 6.02977 16.03 6.02977 21 10.9998L23 8.99977C16.93 2.92977 7.08 2.92977 1 8.99977ZM9 16.9998L12 19.9998L15 16.9998C13.35 15.3398 10.66 15.3398 9 16.9998ZM5 12.9998L7 14.9998C9.76 12.2398 14.24 12.2398 17 14.9998L19 12.9998C15.14 9.13977 8.87 9.13977 5 12.9998Z" fill="#808080"/>
                                </svg>
                                <p>Remote Friendly</p>
                            </div>
                            <div style={{width:400}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 16V15H3.01L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10ZM20 7H15.99V5L13.99 3H9.99L7.99 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7ZM14 7H10V5H14V7Z" fill="#808080"/>
                                </svg>
                                <p>Full Time</p>
                            </div>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                    <path d="M19.0781 14.1571C18.6732 14.1571 18.2797 14.2066 17.903 14.2992L9.70167 6.09796C9.79434 5.72123 9.8438 5.32776 9.8438 4.9229C9.8438 2.20898 7.63584 0.000976562 4.92192 0.000976562C4.32834 0.000976562 3.74695 0.106445 3.19383 0.31443C2.97014 0.398523 2.80453 0.590477 2.75405 0.824008C2.70356 1.05754 2.77519 1.30077 2.94412 1.46971L4.35914 2.88468L4.16306 4.1639L2.8838 4.35993L1.46883 2.94496C1.29989 2.77602 1.05656 2.70454 0.823125 2.75488C0.589547 2.80532 0.397594 2.97098 0.3135 3.19462C0.105469 3.74774 0 4.32923 0 4.9229C0 7.63682 2.20795 9.84477 4.92188 9.84477C5.32683 9.84477 5.72034 9.79527 6.09708 9.70265L14.2983 17.9038C14.2057 18.2805 14.1562 18.6741 14.1562 19.079C14.1562 21.7929 16.3642 24.0008 19.0781 24.0008C19.6717 24.0008 20.2531 23.8954 20.8063 23.6873C21.03 23.6032 21.1956 23.4113 21.246 23.1778C21.2965 22.9442 21.2249 22.7009 21.0559 22.5321L19.6409 21.1171L19.8369 19.8379L21.1162 19.6419L22.5312 21.0569C22.7001 21.2258 22.9433 21.2975 23.1769 21.2469C23.4105 21.1965 23.6024 21.0308 23.6865 20.8072C23.8945 20.2541 24 19.6726 24 19.079C24 16.365 21.792 14.1571 19.0781 14.1571Z" fill="#808080"/>
                                    <path d="M21.8058 5.79946L23.7948 3.81046C23.9266 3.6786 24.0007 3.49977 24.0007 3.3133C24.0007 3.12679 23.9266 2.94796 23.7948 2.81614L21.1845 0.20591C20.9099 -0.0686367 20.4647 -0.0686367 20.1901 0.20591L18.2012 2.19486L21.8058 5.79946Z" fill="#808080"/>
                                    <path d="M1.8896 18.8218L0.0587584 23.0153C-0.056976 23.2804 0.00143027 23.5893 0.205993 23.7938C0.340618 23.9284 0.520477 23.9997 0.703336 23.9997C0.798212 23.9997 0.89393 23.9806 0.98454 23.941L5.17802 22.1101L1.8896 18.8218Z" fill="#808080"/>
                                    <path d="M12.9941 7.40186L17.2053 3.19074L20.8093 6.79478L16.5982 11.0059L12.9941 7.40186Z" fill="#808080"/>
                                    <path d="M2.72461 17.6685L7.39906 12.994L11.0031 16.5981L6.32865 21.2725L2.72461 17.6685Z" fill="#808080"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p>Expert</p>
                            </div>
                        </div>
                        <div className="jobs-view-social-btn">
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#3C5A9A"/>
                                    <path d="M15.9014 3.68311H13.2431C11.6656 3.68311 9.91092 4.34659 9.91092 6.63329C9.91862 7.43007 9.91092 8.19314 9.91092 9.05193H8.08594V11.956H9.96739V20.3164H13.4247V11.9009H15.7066L15.913 9.04378H13.3651C13.3651 9.04378 13.3708 7.77283 13.3651 7.40374C13.3651 6.50009 14.3054 6.55184 14.3619 6.55184C14.8094 6.55184 15.6794 6.55314 15.9027 6.55184V3.68311H15.9014Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                Share
                            </button>
                            <button>
                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                    <path d="M9.16971 16.1666C15.8864 16.1666 19.5596 10.6 19.5596 5.77287C19.5596 5.61478 19.5564 5.45742 19.5492 5.3007C20.264 4.78336 20.8808 4.1428 21.3708 3.40907C20.7165 3.70007 20.0124 3.89592 19.2737 3.98423C20.0277 3.53199 20.6064 2.81655 20.8795 1.96374C20.1627 2.38913 19.3785 2.689 18.5607 2.85044C17.8944 2.14038 16.9457 1.69629 15.8952 1.69629C13.8786 1.69629 12.2434 3.33223 12.2434 5.34878C12.2434 5.63547 12.2754 5.91424 12.3381 6.18173C9.30313 6.02896 6.61194 4.57534 4.81085 2.36504C4.48646 2.92252 4.31584 3.55611 4.3164 4.2011C4.3164 5.46849 4.96106 6.5873 5.94142 7.24186C5.36152 7.22414 4.79435 7.06745 4.28761 6.78496C4.28706 6.8003 4.28706 6.81524 4.28706 6.83163C4.28706 8.60073 5.54577 10.0778 7.21665 10.4125C6.90284 10.498 6.57902 10.5412 6.25376 10.5411C6.01887 10.5411 5.78995 10.5179 5.56747 10.4752C6.03237 11.9267 7.38042 12.9829 8.97871 13.0124C7.72887 13.9924 6.15446 14.5761 4.44331 14.5761C4.15222 14.5763 3.86137 14.5594 3.57227 14.5255C5.18838 15.5617 7.10737 16.1664 9.16989 16.1664" fill="#1DA1F2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="24" height="16.1664" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                Tweet
                            </button>
                            <button>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                    <path d="M11.2716 22.7277C10.0625 21.5185 10.0625 19.5528 11.2716 18.3436L14.1 15.5152L12.7565 14.1717L9.92811 17.0001C7.9765 18.9517 7.9765 22.1196 9.92811 24.0712C11.8797 26.0228 15.0476 26.0228 16.9992 24.0712L19.8276 21.2428L18.4841 19.8992L15.6557 22.7277C14.4465 23.9368 12.4808 23.9368 11.2716 22.7277ZM14.8779 20.5356L20.5347 14.8788L19.1205 13.4646L13.4636 19.1214L14.8779 20.5356ZM16.9992 9.92904L14.1708 12.7575L15.5143 14.101L18.3427 11.2725C19.5518 10.0634 21.5176 10.0634 22.7267 11.2725C23.9359 12.4817 23.9359 14.4475 22.7267 15.6566L19.8983 18.485L21.2418 19.8285L24.0702 17.0001C26.0219 15.0485 26.0219 11.8807 24.0702 9.92904C22.1186 7.97743 18.9508 7.97743 16.9992 9.92904Z" fill="#0B13D2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white" transform="translate(0.0292969 17) rotate(-45)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                Copy
                            </button>
                        </div>
                        <div className="top-jobs-view-article">
                            <h2>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque 
                                egestas leo tempor in ut eget. Euismod et scelerisque aliquam viverra. Vel, 
                                nullam pellentesque neque, elit ut cras vitae. Facilisis non sit elit quis 
                                consectetur lobortis. Mollis fusce nibh elementum eget bibendum quam proin. 
                                Arcu lacus mauris pellentesque in risus. Consectetur cras adipiscing accumsan, 
                                lacus id a. Nibh dictum eget amet nec ultricies purus porttitor pretium. 
                                Dignissim ridiculus molestie vestibulum suscipit at tempus. Vitae risus 
                                fringilla quis in sagittis nulla auctor. Donec vulputate feugiat massa turpis. 
                                Id sed quis nulla sed. Auctor porttitor felis in vulputate. Cras enim, vulputate nunc, ornare. 
                                Porttitor erat lorem ligula vitae amet iaculis mattis mattis. Augue nibh porttitor nunc dictum a, 
                                risus et ut egestas. Diam, egestas eget duis in velit vehicula risus sodales. Dictumst sit massa 
                                egestas id nibh laoreet tristique. Ultrices eu sit id amet, eu non lacinia in.
                            </p>
                        </div>
                        <div className="top-jobs-view-article">
                            <h2>What you’ll do</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet euismod augue
                                elementum eleifend arcu dolor. Odio nec, et mollis vehicula. Sed sed lobortis et adipiscing
                                aliquam est augue cras dolor. Sit semper enim bibendum commodo eget orci, facilisis.
                            Dui elit massa molestie faucibus nibh. Est tristique id eget posuere feugiat.
                                Mi nisl enim bibendum mauris. Et risus integer donec massa augue. 
                                Amet molestie aliquam vitae, volutpat enim, porttitor arcu leo. 
                                Vitae vitae enim dictum ac in penatibus. 
                                Eu suspendisse accumsan volutpat elementum ipsum posuere. 
                                In consectetur viverra massa placerat ac. 
                                Pulvinar dictum lacus fringilla scelerisque phasellus. 
                                Tellus mi neque imperdiet in donec facilisis. 
                                Aliquam arcu in nibh vel nisl fringilla velit purus. 
                                Et nisl velit nunc viverra mattis eu, id. 
                                Habitant penatibus sed quis tincidunt facilisi molestie donec feugiat. 
                                Tellus consequat est cum nulla massa sit facilisi nunc sodales. 
                                Porttitor amet, et eget sed quis leo. 
                                Ultrices nullam pellentesque amet, dui ullamcorper et. 
                                Auctor posuere malesuada massa et et pharetra est.
                                Ante id urna elit neque massa gravida suspendisse. 
                                Porttitor phasellus sodales malesuada ultrices enim tincidunt. 
                                Volutpat dictumst bibendum urna phasellus ac mi ornare ultricies congue. 
                                Congue amet, pellentesque in ullamcorper hac. Pretium dictum cras urna sit. 
                                Tincidunt risus feugiat massa feugiat eu odio elit. 
                                Tortor eget id lorem sit phasellus aliquet. Amet ultrices diam aenean mattis. 
                                Eget faucibus ut fermentum morbi sit vestibulum. 
                                Fermentum viverra non accumsan, sagittis. 
                                Enim eget vitae enim nisl eu scelerisque ornare molestie. 
                                Suspendisse interdum rhoncus, viverra condimentum commodo cras dui cursus. 
                                Pellentesque orci proin ut elit elementum blandit parturient turpis ornare. 
                                Viverra in phasellus elit varius nullam ut ullamcorper massa. 
                                Suspendisse et eget sollicitudin massa enim bibendum sit. 
                                Natoque in laoreet nisl laoreet eget amet, ullamcorper orci ultrices. 
                                Viverra in erat vitae integer duis tellus habitasse nisl, elementum.
                                Elit pharetra egestas malesuada placerat dui velit nec.
                            </p>
                        </div>
                        <div className="jobs-view-apply-btn">
                            <button onClick={() => setOpen(true)}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                    classNames={{
                    overlay: 'customOverlay',
                    modal: 'topJobsViewModal',
                    closeButton: 'closeIcon',
                    }}
                >
                    
                    <div className="banner2__form">
                    <h2>Send a bid for this job</h2>
                    <label className="modalLabel" htmlFor="username">
                        What makes you the right person for this job
                    </label>
                        <TopJobsViewModal />
                    </div>
                </Modal>
            </>
        </div>
    )
}

export default TopJobsView