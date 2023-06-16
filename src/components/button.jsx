/* eslint-disable react/prop-types */
// import { useEffect } from "react"
import { useGlobalContext } from "../context"

const FilterBtn = ({ languages }) => {

    const { addToFilterBox } = useGlobalContext()

    // console.log(languages)


    return (
        <div>
            {
                languages.map((lan, lanIndex) => {
                    return <button key={lanIndex} onClick={() => addToFilterBox(lan)}>{lan}</button>
                })
            }
        </div>
    )
}

export default FilterBtn