import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'health-care', label: 'Health care' },
    { value: 'fintech', label: 'fintech' },
    { value: 'digital', label: 'Digital' }
  ]

const PortfolioFilter = () => {
    return(
        <div className="portfolio-filter">
            <Select options={options} className='select'/>
            <div className="buttons">
                <div className="grid">
                    <button>health care</button>
                    <button>fintech</button>
                    <button>digital</button>
                </div>
                <div className="cta">
                    <button>view all</button>
                </div>
            </div>
           
        </div>
    )
}

export default PortfolioFilter