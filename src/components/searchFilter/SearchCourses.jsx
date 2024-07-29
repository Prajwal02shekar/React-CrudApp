import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchCourses = ({handleSeach}) => {
	return (
    <div className='searchBlock'>
      <span>
        <input type="text" placeholder='search courses...' onInput={e=>handleSeach(e.target.value)} />
      </span>
      <span className="searchIcon">
        <IoSearch />
      </span>
  </div>
	)
}
<i className='fa fa-search" aria-hidden="true'></i>
export default SearchCourses
