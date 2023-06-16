/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext(null)


const DataProvider = ({ children }) => {

    const [listingData, setListingData] = useState([])
    const [filterData, setFilterData] = useState([])
    // const [d, setD] = useState([])


    const fetchData = async () => {
        try {
            const { data } = await axios.get('../data.json');

            const newData = data.map((obj) => {
                return { ...obj, FilterData: [obj.role, obj.level, ...obj.languages, ...obj.tools] }
            })
            setListingData(newData)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { fetchData() }, [])

    useEffect(() => {

        const s = filterData.map((e) => { return listingData.filter((fet) => fet.FilterData.some(filterKey => filterKey === e)) }).flat()

        const dsd = s.filter((element, index) => {

            return index === s.findIndex(obj => obj.id === element.id)
        })

        console.log(dsd)
    

    }, [filterData])





    // fetchData()
    const addToFilterBox = (a) => {
        // console.log(a)
        // console.log(listingData)
        // console.log(s)

        setFilterData((prevState) => {
            if (prevState.length >= 1) {
                return prevState.includes(a) ? prevState : [...prevState, a]
            } else {
                return [...prevState, a]
            }
        })

    }



    return < DataContext.Provider value={{ listingData, setFilterData, filterData, addToFilterBox }}>
        {children}
    </DataContext.Provider>
}


const useGlobalContext = () => { return useContext(DataContext) }



export { DataProvider, useGlobalContext }