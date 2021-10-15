import React from "react";

import "./ManageScheduleMobile.css";

import linked from "../../../../assets/img/linkedin.png";
import insta from "../../../../assets/img/insta.png";
import twitter from "../../../../assets/img/twitter.png";
import youtube from "../../../../assets/img/youtube.png";
import bell from "../../../../assets/img/bell.png";
import headUser from "../../../../assets/img/user.png";
import calendar from "../../../../assets/img/calendar.png";
import arrowDown from "../../../../assets/img/arrow-down.png";
import clock from "../../../../assets/img/clock.png";
import user1 from "../../../../assets/img/user1.png";
import user2 from "../../../../assets/img/user2.png";
import user3 from "../../../../assets/img/user3.png";

export default class ManageScheduleMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    return (
      <div className="ManageScheduleMobile">
        <div className="sec1">
          <div className="selct-head">
            <img alt="asdf" src={calendar} />
            <p>September 13th</p>
          </div>

          <div className="select-wrapper">
            <div className="selct-box" onClick={this.handleMenu}>
              <img alt="asd" src={arrowDown} />
            </div>

            {this.state.menu  && (
              <div className="slct-menu">
                <span>Mon September 13th</span>
                <span>Tue September 14th</span>
                <span>Wed September 15th</span>
                <span>Thur September 16th</span>
                <span>Fri September 17th</span>
              </div>
            )}
          </div>

          {/* <select className="date-day-select">
            <option></option>
            <option>Mon September 13th</option>
            <option>Tue September 14th</option>
            <option>Wed September 15th</option>
            <option>Thur September 16th</option>
            <option>Fri September 17th</option>
          </select> */}

          <div className="meeting-item">
            <div className="time-wrap">
              <p>Vangold Daily Standup Meeting</p>
              <div className="times">
                <img alt="asdf" src={clock} />
                <div className="span-wrap">
                  <span className="span1">02:00 - 03:03</span>
                  <span className="span2">starts in 02 hours</span>
                </div>
              </div>
            </div>

            <div className="members-wrap">
              <div className="members">
                <img alt="asdf" src={user1} />
                <img alt="asdf" src={user2} />
                <img alt="asdf" src={user3} />
                <div className="img-div">+6</div>
              </div>
              <div className="btns">
                <button className="id-btn">ID</button>
                <button className="join-btn">Join</button>
              </div>
            </div>
          </div>

          <div className="meeting-item">
            <div className="time-wrap">
              <p>Vangold Daily Standup Meeting</p>
              <div className="times">
                <img alt="asdf" src={clock} />
                <div className="span-wrap">
                  <span className="span1">02:00 - 03:03</span>
                  <span className="span2">starts in 02 hours</span>
                </div>
              </div>
            </div>

            <div className="members-wrap">
              <div className="members">
                <img alt="asdf" src={user1} />
                <img alt="asdf" src={user2} />
                <img alt="asdf" src={user3} />
                <div className="img-div">+6</div>
              </div>
              <div className="btns">
                <button className="id-btn">ID</button>
                <button className="join-btn">Join</button>
              </div>
            </div>
          </div>

          <div className="meeting-item">
            <div className="time-wrap">
              <p>Vangold Daily Standup Meeting</p>
              <div className="times">
                <img alt="asdf" src={clock} />
                <div className="span-wrap">
                  <span className="span1">02:00 - 03:03</span>
                  <span className="span2">starts in 02 hours</span>
                </div>
              </div>
            </div>

            <div className="members-wrap">
              <div className="members">
                <img alt="asdf" src={user1} />
                <img alt="asdf" src={user2} />
                <img alt="asdf" src={user3} />
                <div className="img-div">+6</div>
              </div>
              <div className="btns">
                <button className="id-btn">ID</button>
                <button className="join-btn">Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
