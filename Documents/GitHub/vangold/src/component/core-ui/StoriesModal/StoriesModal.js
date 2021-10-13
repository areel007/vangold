import { Modal } from "react-bootstrap";
import Cross from "../../../assets/img/cross.png";
import ArrowLeft from "../../../assets/img/arrow-left.png";
import ArrowRight from "../../../assets/img/arrow-right.png";
import MainImg from "../../../assets/img/main-img.png";
import Img1 from "../../../assets/img/img-1.png";
import Img2 from "../../../assets/img/img-2.png";
import Img3 from "../../../assets/img/img-3.png";
import Img4 from "../../../assets/img/img-4.png";
import UserImg from "../../../assets/img/userimg.png";
import Send from "../../../assets/img/send.png";

import "./StoriesModal.css";

const StoriesModal = (props) => {
  return (
      <div className="hhfh">
        <div className="Story__">
            <div className="story-wrapper">
                <div className="story-head">
                <h4>Vangold</h4>
                <img alt="cross" className="cross1" src={Cross} />
                </div>

                <div className="carousal-wrapper">
                <div id="videos">
                    <div class="inner">
                    <div class="video-carousel-root">
                        <div class="video-carousel-viewport">
                        <div
                            class="video-carousel-slider clearfix"
                            // style={{ left: "0" }}
                        >
                            <div
                            id="video_desktop_8_GL"
                            class="level1"
                            data-vimeo-id="181712424"
                            >
                            <div class="panel">
                                <div class="poster">
                                <div className="top-bar">
                                    <div className="buffer"></div>
                                </div>
                                <div className="user-info">
                                    <img
                                    className="back-arrow"
                                    alt="user-img"
                                    src={ArrowLeft}
                                    />
                                    <img
                                    className="user-imggg"
                                    alt="user-img"
                                    src={UserImg}
                                    />
                                    <div className="info-wrap">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                    </div>
                                </div>
                                {/* <div className="reply-input-wrap">
                                    <p className="p--1">Status Text</p>
                                    <div className="reply-box">
                                    <img
                                        alt="arrow-up"
                                        className="arrow-up"
                                        src={ArrowLeft}
                                    />
                                    <span>Reply</span>
                                    </div>
                                </div> */}
                                <label for="reply" className="reply-input-wrap">
                                    <input
                                    type="text"
                                    id="reply"
                                    name="reply"
                                    placeholder="Reply Kali"
                                    />
                                    <img alt="reply-img" src={Send} />
                                </label>
                                <div className="poster-head">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                </div>
                                <img
                                    className="main-img"
                                    src={Img1}
                                    alt="video poster 8"
                                />
                                <figure className="fig">
                                    <img alt="user-img" src={UserImg} />
                                </figure>
                                </div>
                            </div>
                            </div>

                            <div
                            id="video_desktop_8_GL"
                            class="level1"
                            data-vimeo-id="181712424"
                            >
                            <div class="panel">
                                <div class="poster">
                                <div className="top-bar">
                                    <div className="buffer"></div>
                                </div>
                                <div className="user-info">
                                    <img
                                    className="back-arrow"
                                    alt="user-img"
                                    src={ArrowLeft}
                                    />
                                    <img
                                    className="user-imggg"
                                    alt="user-img"
                                    src={UserImg}
                                    />

                                    <div className="info-wrap">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                    </div>
                                </div>
                                {/* <div className="reply-input-wrap">
                                    <p className="p--1">Status Text</p>
                                    <div className="reply-box">
                                    <img
                                        alt="arrow-up"
                                        className="arrow-up"
                                        src={ArrowLeft}
                                    />
                                    <span>Reply</span>
                                    </div>
                                </div> */}
                                <label for="reply" className="reply-input-wrap">
                                    <input
                                    type="text"
                                    id="reply"
                                    name="reply"
                                    placeholder="Reply Kali"
                                    />
                                    <img alt="reply-img" src={Send} />
                                </label>
                                <div className="poster-head">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                </div>
                                <img
                                    className="main-img"
                                    src={Img2}
                                    alt="video poster 8"
                                />
                                <figure className="fig">
                                    <img alt="user-img" src={UserImg} />
                                </figure>
                                </div>
                            </div>
                            </div>

                            <div
                            id="video_desktop_8_GL"
                            class="level1"
                            data-vimeo-id="181712424"
                            >
                            <div class="panel">
                                <div class="poster">
                                <div className="top-bar">
                                    <div className="buffer"></div>
                                </div>
                                <div className="user-info">
                                    <img
                                    className="back-arrow"
                                    alt="user-img"
                                    src={ArrowLeft}
                                    />
                                    <img
                                    className="user-imggg"
                                    alt="user-img"
                                    src={UserImg}
                                    />

                                    <div className="info-wrap">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                    </div>
                                </div>
                                {/* <div className="reply-input-wrap">
                                    <p className="p--1">Status Text</p>
                                    <div className="reply-box">
                                    <img
                                        alt="arrow-up"
                                        className="arrow-up"
                                        src={ArrowLeft}
                                    />
                                    <span>Reply</span>
                                    </div>
                                </div> */}
                                <label for="reply" className="reply-input-wrap">
                                    <input
                                    type="text"
                                    id="reply"
                                    name="reply"
                                    placeholder="Reply Kali"
                                    />
                                    <img alt="reply-img" src={Send} />
                                </label>
                                <div className="poster-head">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                </div>
                                <img
                                    className="main-img"
                                    src={MainImg}
                                    alt="video poster 8"
                                />
                                <figure className="fig">
                                    <img alt="user-img" src={UserImg} />
                                </figure>
                                </div>
                            </div>
                            </div>

                            <div
                            id="video_desktop_8_GL"
                            class="level1"
                            data-vimeo-id="181712424"
                            >
                            <div class="panel">
                                <div class="poster">
                                <div className="top-bar">
                                    <div className="buffer"></div>
                                </div>
                                <div className="user-info">
                                    <img
                                    className="back-arrow"
                                    alt="user-img"
                                    src={ArrowLeft}
                                    />
                                    <img
                                    className="user-imggg"
                                    alt="user-img"
                                    src={UserImg}
                                    />

                                    <div className="info-wrap">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                    </div>
                                </div>
                                {/* <div className="reply-input-wrap">
                                    <p className="p--1">Status Text</p>
                                    <div className="reply-box">
                                    <img
                                        alt="arrow-up"
                                        className="arrow-up"
                                        src={ArrowLeft}
                                    />
                                    <span>Reply</span>
                                    </div>
                                </div> */}
                                <label for="reply" className="reply-input-wrap">
                                    <input
                                    type="text"
                                    id="reply"
                                    name="reply"
                                    placeholder="Reply Kali"
                                    />
                                    <img alt="reply-img" src={Send} />
                                </label>
                                <div className="poster-head">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                </div>
                                <img
                                    className="main-img"
                                    src={Img3}
                                    alt="video poster 8"
                                />
                                <figure className="fig">
                                    <img alt="user-img" src={UserImg} />
                                </figure>
                                </div>
                            </div>
                            </div>

                            <div
                            id="video_desktop_8_GL"
                            class="level1"
                            data-vimeo-id="181712424"
                            >
                            <div class="panel">
                                <div class="poster">
                                <div className="top-bar">
                                    <div className="buffer"></div>
                                </div>
                                <div className="user-info">
                                    <img
                                    className="back-arrow"
                                    alt="user-img"
                                    src={ArrowLeft}
                                    />

                                    <img
                                    className="user-imggg"
                                    alt="user-img"
                                    src={UserImg}
                                    />

                                    <div className="info-wrap">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                    </div>
                                </div>
                                {/* <div className="reply-input-wrap">
                                    <p className="p--1">Status Text</p>
                                    <div className="reply-box">
                                    <img
                                        alt="arrow-up"
                                        className="arrow-up"
                                        src={ArrowLeft}
                                    />
                                    <span>Reply</span>
                                    </div>
                                </div> */}
                                <label for="reply" className="reply-input-wrap">
                                    <input
                                    type="text"
                                    id="reply"
                                    name="reply"
                                    placeholder="Reply Kali"
                                    />
                                    <img alt="reply-img" src={Send} />
                                </label>
                                <div className="poster-head">
                                    <span className="span1">Kali Jay</span>
                                    <span className="span2">3h</span>
                                </div>
                                <img
                                    className="main-img"
                                    src={Img4}
                                    alt="video poster 8"
                                />
                                <figure className="fig">
                                    <img alt="user-img" src={UserImg} />
                                </figure>
                                </div>
                            </div>
                            </div>
                        </div>
                        <img
                            class="video-carousel-button-left"
                            src={ArrowLeft}
                            alt="video carousel navigate left"
                        />
                        <img
                            class="video-carousel-button-right"
                            src={ArrowRight}
                            alt="video carousel navigate right"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
   
  );
};

export default StoriesModal;
