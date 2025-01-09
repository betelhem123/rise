import React from 'react'

const Pagination = ({productsperPage, totalProducts, paginate, activepage}) => {
    const pageNumbers = [];
for(let i = 1; i <= Math.ceil(totalProducts / productsperPage); i++){
    pageNumbers.push(i)
}
  return (
    <div>
     <ul className='default-pagination lab-ul'>
        {
            pageNumbers.map((number) => (
                <li key={number}>
                  <button>
                    
                  </button>
                </li>
            )
            
            )
        }
     </ul>
    </div>
  )
}

export default Pagination
