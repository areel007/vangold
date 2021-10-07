import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import { Col } from "react-bootstrap";
import Calendar from "../../../../assets/images/ManageSchedule/calendar.png";
import Clock from "../../../../assets/images/ManageSchedule/clock.png";
import Member1 from "../../../../assets/images/ManageSchedule/user-1.png";
import Member2 from "../../../../assets/images/ManageSchedule/user-2.png";
import Member3 from "../../../../assets/images/ManageSchedule/user-3.png";
import "./ManageSchedule.css";

function ManageSchedule({ showSideMenu, setShowSideMenu }) {

  return (
    <div className="Manage__Schedule__container">
      <Col xs={12} lg={2} className={`mx-auto mt-lg-4 ${!showSideMenu ? "d-none d-lg-block" : "mb-5"}`}>
          <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      </Col>
      <div className="Manage__Schedule">
      <div className="cal-header">
        <div className="left-box">
          <img alt="calender" src={Calendar} />
          <p className="p1">September 13th - September 17th, 2020</p>
        </div>
        <div className="right-arrows">
          <button>
          <svg
            className="arrow-left"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
              fill="#333333"
            />
          </svg>
          </button>
          <button>
          <svg
            className="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M2.00003 0L0.590027 1.41L5.17003 6L0.590027 10.59L2.00003 12L8.00003 6L2.00003 0Z"
              fill="white"
            />
          </svg>
          </button>
        </div>
      </div>

      <div className="cal-body">
        <div className="cal-wrap">
          <div className="row">
            <div className="time eight">08:00</div>
            <div className="time eight-3">08:30</div>
            <div className="time nine">09:00</div>
            <div className="time nine-3">09:30</div>
            <div className="time ten">10:00</div>
            <div className="time ten-3">10:30</div>
            <div className="time eleven">11:00</div>
            <div className="time eleven-3">11:30</div>
            <div className="time twelve">12:00</div>
            <div className="time twelve-3">12:30</div>
            <div className="time one">01:00</div>
            <div className="time one-3">01:30</div>
            <div className="time two">02:00</div>
            <div className="time two-3">02:30</div>
            <div className="time three">03:00</div>
            <div className="time three-3">03:30</div>
            <div className="time four">04:00</div>
            <div className="time four-3">04:30</div>
            <div className="time five">05:00</div>

            <div className="col1">
              <div className="day-date">
                <div className="day-noMeetings">
                  <span className="l-sp">Monday</span>
                  <span className="r-sp">2</span>
                </div>
                <span className="date">September 13th</span>
              </div>
              <div className="events-wrap">
                <div className="event event1">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>

                <div className="event event3">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col2">
              <div className="day-date">
                <div className="day-noMeetings">
                  <span className="l-sp">Tuesday</span>
                  <span></span>
                </div>
                <span className="date">September 14th</span>
              </div>
              <div className="events-wrap"></div>
            </div>
            <div className="col3">
              <div className="day-date">
                <div className="day-noMeetings">
                  <span className="l-sp">Webnesday</span>
                  <span className="r-sp">3</span>
                </div>
                <span className="date">September 15th</span>
              </div>
              <div className="events-wrap">
                <div className="event">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>

                <div className="event event1">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>

                <div className="event event2">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col4">
              <div className="day-date">
                <div className="day-noMeetings">
                  <span className="l-sp">Thursday</span>
                  <span></span>
                </div>
                <span className="date">September 16th</span>
              </div>
              <div className="events-wrap"></div>
            </div>
            <div className="col5">
              <div className="day-date">
                <div className="day-noMeetings">
                  <span className="l-sp">Friday</span>
                  <span className="r-sp">2</span>
                </div>
                <span className="date">September 17th</span>
              </div>
              <div className="events-wrap">
                <div className="event event4">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>

                <div className="event event3">
                  <p className="e-name">Vangold Daily Standup Meeting</p>
                  <div className="e-time">
                    <img alt="clock" src={Clock} />
                    <span>02:00 - 03:03</span>
                  </div>
                  <div className="e-members">
                    <img alt="member" src={Member1} />
                    <img alt="member" src={Member2} />
                    <img alt="member" src={Member3} />
                    <div className="extra-members">
                      <span>+4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ManageSchedule;
