import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams();
 

  return (
    <main>
      <div className="component">ProductDetail - {params.id}</div>
    </main>
  )
}

export default ProductDetail
