import { useLocation,  } from "react-router-dom"


const ProductList = () => {
    // const [searchParams] = useSearchParams()
    const location =useLocation()
    console.log(location)
    // console.log(searchParams.get("keyword"))
    return(
        <main>
            <div className="component">ProductList</div>
        </main>
    )
}

export default ProductList


//http://localhost:3000/products 