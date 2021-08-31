import React, {useState} from "react";
import "./TopJobs.css";
import SearchBox from "../../core-ui/SearchInput/SearchBox";
import ReactPaginate from "react-paginate";
import TopJobsHeader from "./TopJobsHeader";
import SideCheckBoxes from "../../core-ui/SideCheckBoxes/SideCheckBoxes";
import apple from "../../../assets/images/profile/apple.png";

const TopJobsData = [
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
    {
        name: "User Experience Design",
        address: "2972 Westminister Rd, Santa Ana",
        descrip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium amet habitasse. Viverra vel enim magna nibh neque curabitur egestas. ",
        time: 'Full Time',
        level: 'Expert',
        price: '$1200',
        img: apple,
    },
];

const TopJobs = (props) => {
  const [jobs] = useState(TopJobsData.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 4;
  const pagesVisited = pageNumber * jobsPerPage;

  const displayjobs = jobs
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => {
      return (
        <div key={job.id}>
            <div className="TopJobsContent__BOX">
                <div className="TopJobsContent__BOX-TOP">
                    <div className="TopJobs-pic">
                        <img src={job.img} alt="" />
                    </div>
                    <div className="TopJobs-info">
                        <h1 className="job-_-_name">{job.name}</h1>
                        <p className="job-_-_address">{job.address}</p>
                        <p className="job-_-_descrip">{job.descrip}</p>
                    </div>
                    <div className="love-icon">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#4F4F4F" fill-opacity="0.5"/>
                        </svg>
                    </div>
                </div>
                <div className="TopJobsContent__BOX-BOTTOM">
                    <div className="TopJobsContent__BOX-BOTTOM_button">
                        <button>{job.time}</button>
                        <button>{job.level}</button>
                        <button>{job.price}</button>
                    </div>
                    <div className='align-self-center'>
                        <span className='text-16px top-jobs_NEW-TEXT me-4' style={{ color: "#083EB1", fontWeight: "bold" }}>New</span>
                        <span className='text-16px top-jobs_NEW-TEXT me-4' style={{ fontWeight: "bold" }}>4d</span>
                    </div>
                </div>
            </div>
          </div>
      );
    });

  const pageCount = Math.ceil(jobs.length / jobsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="top-freelancer">
      <TopJobsHeader />
      <div className="container">
        <p className="top__jobs__freelancers">Vangold > Browse Jobs</p>
        <SearchBox />
        <div className="inn-top-freelancer">
          <div className="">
              <SideCheckBoxes />
          </div>
          <div className="freelancers-list__freelancer">
            {displayjobs}
            <div className="paginationContainer">
                <ReactPaginate
                    previousLabel={
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 1.23266e-07L0.000155878 6L6.00016 12Z"
                        fill="#333333"
                        />
                    </svg>
                    }
                    nextLabel={
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z"
                        fill="#333333"
                        />
                    </svg>
                    }
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    breakLabel={"..."}
                    className="paginated"
                />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopJobs;
