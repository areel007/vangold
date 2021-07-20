import "./top-jobs.css"
import ImagelessBanner from "../../core-ui/banner/imageless-banner/imageless-banner";
import SelectInputComponent from "../../core-ui/inputs/select/select-input-component";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import Star from "../../core-ui/star/star";
import MockData from "../../../mock-data.json"
import SearchInputComponent from "../../core-ui/inputs/search/search-input-component";
import Location from "../../core-ui/inputs/location/location";

const TopJobs = props => {


    const stars = Array(5).fill(0)
    const [selectOptions] = useState([
        "Select Category"
    ]);

    const [currentValue] = useState(3)

    const [jobs, setJobs] = useState(MockData.slice(0, 30))
    const [pageNumber, setPageNumber] = useState(0)
    const jobsPerPage = 5
    const pagesVisited = pageNumber * jobsPerPage

    const displayJobs = jobs.slice(pagesVisited, pagesVisited + jobsPerPage).map(job => {
        return (
            <div
                className="jobs-list__job"
                key={job.id}
            >
                <div className="jobs-list__job-job-title-and-amount">
                    <h1>
                        <span>{ job.jobTitle }</span>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path d="M22 11L19.56 8.21L19.9 4.52L16.29 3.7L14.4 0.5L11 1.96L7.6
                                        0.5L5.71 3.69L2.1 4.5L2.44 8.2L0 11L2.44 13.79L2.1 17.49L5.71 18.31L7.6
                                        21.5L11 20.03L14.4 21.49L16.29 18.3L19.9 17.48L19.56 13.79L22 11ZM9.09
                                        15.72L5.29 11.91L6.77 10.43L9.09 12.76L14.94 6.89L16.42 8.37L9.09
                                        15.72Z" fill="#0038FF"/>
                        </svg>

                    </h1>
                    <span>{ job.jobAmount }</span>
                </div>
                <div className="jobs-list__job-category-star-and-bid-button">
                    <h2>UI/UX Design</h2>
                    <div className="jobs-list__job-stars">
                        <div className="jobs-list__job-star-number">{ job.starNumber }</div>
                        <Star
                            stars={stars}
                            currentValue={currentValue}
                        />
                    </div>
                    <button className="jobs-list__job-bid-button">Send Bid</button>
                </div>
                <p className="posted-on">Posted 20 minutes ago</p>
                <p className="job-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus semper
                    ipsum est ut blandit fringilla. Tincidunt diam, accumsan, diam pretium
                    amet habitasse. Viverra vel enim magna nibh neque curabitur egestas.
                    Proin magna pellentesque nunc egestas. Mauris semper a, odio eget pharetra
                    convallis. Porttitor turpis fames purus pretium sit scelerisque.
                </p>
                <div className="job-related__category">
                    <div className="category__job">Web Design</div>
                    <div className="category__job">Graphics Design</div>
                    <div className="category__job">Mockup</div>
                </div>
                <p className="job-duration">Duration: <span>4 Weeks</span></p>
            </div>
        )
    })

    const pageCount = Math.ceil(jobs.length / jobsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    return (
        <div className="top-jobs">
            <ImagelessBanner bannerText="Top Jobs" />
            <div className="container">
                <div className="top-jobs__inner">
                    <p className="page-nav">Vangold > Browse Jobs</p>
                    <div className="search-component">
                        <SelectInputComponent selectOptions={selectOptions} />
                        <SearchInputComponent />
                        <Location />
                        <button>Search</button>
                    </div>
                    <div className="jobs-list">
                        <p className="total-freelance">
                            We have 1,027 freelance jobs online. Send a Bid to get hired.
                        </p>
                        { displayJobs }
                    </div>
                    <ReactPaginate
                        previousLabel={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 1.23266e-07L0.000155878 6L6.00016 12Z" fill="#333333"/>
                        </svg>
                        }
                        nextLabel={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                        </svg>
                        }
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        breakLabel={'...'}
                        className="paginated"
                    />

                </div>
            </div>
        </div>
    )
}

export default TopJobs