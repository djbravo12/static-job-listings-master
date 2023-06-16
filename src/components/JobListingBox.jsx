import { useGlobalContext } from '../context'
import FilterBtn from './button'


const Listing = () => {

    const { listingData } = useGlobalContext()

    return (
        <div>
            {
                listingData.map((companyData, companyIndex) => {
                    // console.log(companyData)

                    const { logo, company, position, postedAt, contract, location, new: nowJob, featured, FilterData } = companyData

                    return <div key={companyIndex}>
                        <img src={logo} alt="" />
                        <p>{company}</p>
                        <p>{nowJob ? "new" : ""}</p>
                        <p>{featured ? "Featured" : ""}</p>

                        <h1>{position}</h1>
                        <p>{postedAt}</p>
                        <p>{contract}</p>
                        <p>{location}</p>

                        <FilterBtn languages={FilterData}></FilterBtn>
                    </div>
                })
            }
        </div>
    )
}

export default Listing