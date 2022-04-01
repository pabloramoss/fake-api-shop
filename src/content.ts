const content = [
  {
    title: "Get all products",
    method: "get",
    url: "/api/products",
    output: 
    `
        [
            {
                "id": "1",
                "title": "Apple MacBook Pro 16",
                "description": "Apple MacBook Pro 16 with Touch Bar, 9th-Gen
                    8-Core Intel i9 2.4GHz, 32GB RAM, 512GB SSD, AMD Radeon Pro
                    5300M 4GB, Space Gray, Late 2019",
                "category": "Apple",
                "image": "2969",
                "price": "laptop"
            },
            /* ... */
            {
                "id": "30",
                "title": "Logitech MK295 Wireless Mouse & Keyboard Combo",
                "description": "Logitech MK295 Wireless Mouse & Keyboard Combo 
                    with SilentTouch Technology, Full Numpad, Advanced Optical 
                    Tracking, Lag-Free Wireless, 90% Less Noise - Graphite",
                "category": "Logitech",
                "image": "26",
                "price": "accessories"
            }
        ]
    `
  },
  {
    title: "Get a single product",
    method: "get",
    url: "/api/products/1",
    output:
    `{
        id: "1",
        title: "Bobina 30 M Fleje Acero Inox 1/2 x 0,7",
        category: "Herrajes",
        description: "FLEJE ACERO INOXIDABLE 1/2 X 30mts. 1 BOBINA.",
        image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=184,h=176,fit=crop/mP4obEx6alSpp0Kz/Fleje-precincor-GECOMM-YbNxWeXVMKiNDogB.png",
        price: "30.42",
    }`
  }
]
const homeSample: string = `
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App(){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: 'http://simpleapistore.vercel.app',
            url: '/api/products',
        })
            .then(({ data }) => {
            setData(data.products)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
      <section>
        <h1>Simple store API response:</h1>
        {loading && "Loading..."}
        {!!data && data.length > 0 ? data.map((product) => {
            return(
              <article key={product.id}>
                <p>id: {product.id}</p>
                <h2>title: {product.title}</h2>
                <p>description: {product.description}</p>
                <p>category: {product.category}</p>
                <p>price: {product.price}</p>
                <img src={product.image} />
              </article>
            )   
          }):(<p>API did not provided any product, try again.</p>)
        }
      </section>
    )
}

export default App`

export { homeSample }

export default content