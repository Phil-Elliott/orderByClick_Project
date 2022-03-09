import React, { useState, useEffect } from "react"
import "./App.css"
import Grid from "./Components/Grid/Grid"
import Table from "./Components/Table/Table"
import objectData from "./Interfaces"

function App() {
  const [orderedImages, setOrderedImages] = useState<Array<objectData>>([
    {
      image: "./images/img0.png",
      key: 0,
    },
    {
      image: "./images/img1.png",
      key: 1,
    },
    {
      image: "./images/img2.png",
      key: 2,
    },
    {
      image: "./images/img3.png",
      key: 3,
    },
    {
      image: "./images/img4.png",
      key: 4,
    },
    {
      image: "./images/img5.png",
      key: 5,
    },
    {
      image: "./images/img6.png",
      key: 6,
    },
    {
      image: "./images/img7.png",
      key: 7,
    },
  ])
  const [images, setImages] = useState<Array<objectData>>([
    {
      image: "Image 0",
      clicks: 0,
      key: 0,
    },
    {
      image: "Image 1",
      clicks: 0,
      key: 1,
    },
    {
      image: "Image 2",
      clicks: 0,
      key: 2,
    },
    {
      image: "Image 3",
      clicks: 0,
      key: 3,
    },
    {
      image: "Image 4",
      clicks: 0,
      key: 4,
    },
    {
      image: "Image 5",
      clicks: 0,
      key: 5,
    },
    {
      image: "Image 6",
      clicks: 0,
      key: 6,
    },
    {
      image: "Image 7",
      clicks: 0,
      key: 7,
    },
  ])

  const handleClick = (key: number) => {
    // updates the number of clicks
    setImages(
      images.map((item, i) => {
        return item.key === key ? { ...item, clicks: (item.clicks += 1) } : item
      })
    )

    // changes the order of the images
    const changeOrder = () => {
      const clickedItem = orderedImages.find((image) => {
        if (image.key === key) {
          return image
        }
      })
      const arr = orderedImages.filter((image) => image.key !== key)
      arr.unshift(clickedItem as objectData)
      setOrderedImages(arr)
      // saves the orderedImages array to local storage
      localStorage.setItem("orderedImages", JSON.stringify(arr))
    }

    // sorts images by number of clicks
    const changeImageOrder = () => {
      setImages(
        images.sort((a, b) => {
          return b.clicks - a.clicks
        })
      )
    }
    changeOrder()
    changeImageOrder()
  }

  // Pulls previous ordered data from local storage
  useEffect(() => {
    let orderedArr = JSON.parse(localStorage.getItem("orderedImages") || "[]")

    if (orderedArr[0]) {
      setOrderedImages(orderedArr)
    }
  }, [])

  return (
    <div className="App">
      <Grid orderedImages={orderedImages} handleClick={handleClick} />
      <Table images={images} />
    </div>
  )
}

export default App
