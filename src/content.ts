const content = [
  {
    title: "Get all products",
    method: "get",
    url: "/api/products",
    output: 
    `
        [
          {
            id: "1",
            title: "Razer Huntsman Mini Optical Red Linear Switch Gaming Keyboard",
            category: "keyboard",
            description: "Dominate on a different scale with the Razer Huntsman 
              Mini a 60% gaming keyboard with cutting-edge Razer Optical Switches. 
              Highly portable and ideal for streamlined setups, it is time to 
              experience lightning-fast actuation in our most compact form factor 
              yet.",
            price: 69.99,
            image: "https://i.ibb.co/jhFW04D/product-1.webp"
            },
            /* ... */
          {
            id: "30",
            title: "Blue Yeti condenser blackout",
            category: "microphone",
            description: "Create unparalleled recordings with your computer 
              using Blue's best-selling family of Yeti USB microphones. Now with
              Blue VOICE software, you can craft the perfect broadcast vocal 
              sound and entertain your stream audience with enhanced effects, 
              advanced voice modulation and HD audio samples. Four different 
              pickup patterns offer incredible flexibility so you can record 
              vocals for music, podcasts, Twitch streaming, YouTube videos, or 
              even cryptozoology lectures in ways that would normally require 
              multiple microphones. Whether you're recording at home, on the road,
              or in the Himalayas, Yeti helps you produce studio-quality recordings 
              every time.",
            price: 79.99,
            image: "https://i.ibb.co/Xxj9PS6/product-30.webp"
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
      title: "Razer Huntsman Mini Optical Red Linear Switch Gaming Keyboard",
      category: "keyboard",
      description: "Dominate on a different scale with the Razer Huntsman 
        Mini a 60% gaming keyboard with cutting-edge Razer Optical Switches. 
        Highly portable and ideal for streamlined setups, it is time to 
        experience lightning-fast actuation in our most compact form factor 
        yet.",
      price: 69.99,
      image: "https://i.ibb.co/jhFW04D/product-1.webp"
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