import { useGlobalContext } from "../context"

const FilterBox = () => {

    const { filterData } = useGlobalContext()


    return (

        <>
            {filterData.length > 0 && <div>Filter box

                {filterData.map((e, filterDataIndex) => {

                    return <div key={filterDataIndex}>{e}</div>
                })}

                <button>clear</button>
            </div>}
        </>
    )
}


export default FilterBox