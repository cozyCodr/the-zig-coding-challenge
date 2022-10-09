import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="d-flex justify-content-center align-content-center py-2 rounded-3">
        <form className="w-100 d-flex justify-content-center">
            <label className="d-flex justify-content-center w-100">
                <input id="search-box" className="mx-5 p-1 pl-2 pr-3 w-75 bg-black" type="text" placeholder='Search title'/>
            </label>
        </form>
    </div>
  )
}

export default Search