import React, { useCallback, useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts]=useState([])
    const [url, setUrl]= useState("http://localhost:3000/products")
    
    const fetchProducts = useCallback(async ()=>{
        const response = await fetch (url);
        const data =await response.json();
        setProducts(data);
    },[url])
    
    

    useEffect(()=>{
        // fetch(url)
        // .then(response => response.json())
        // .then(data =>setProducts(data));
        
        fetchProducts();
        console.log("-")
    },[fetchProducts]);

  return (
      <section>
        <div className="filter">
            <button onClick={()=>setUrl("http://localhost:3000/products")}>All</button>
            <button onClick={()=>setUrl("http://localhost:3000/products?in_stock=true")}>In Stock Only</button>
        </div>
        {products.map((product)=>{
            return(
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>RS{product.price}</span>
                        <span className={product.in_stock ? "instock" :"unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                    </p>
                </div>
            )
        })}
    </section>
  )
}

export default ProductList


//http://localhost:3000/products