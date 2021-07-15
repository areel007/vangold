import "./pagination.css"
import {useState} from "react";
import ReactPaginate from "react-paginate"

const Pagination = () => {
    const [jobs, setJobs] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const jobsPerPage = 10
    const pagesVisited = pageNumber * jobsPerPage

    const displayJobs = jobs.slice(pagesVisited, pagesVisited + jobsPerPage).map(job => {
        return
    })

    return (
        <div className="pagination"></div>
    )
}

export default Pagination