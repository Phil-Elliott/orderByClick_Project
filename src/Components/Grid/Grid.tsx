import React from "react"
import "./Grid.css"
import objectData from "./../../Interfaces"

const Grid = ({
  orderedImages,
  handleClick,
}: {
  orderedImages: objectData[]
  handleClick: any
}) => {
  return (
    <div className="content-container">
      <div className="grid-container">
        {orderedImages.map((image, i) => {
          return (
            <div key={image.key} className="image-container">
              <img
                onClick={() => handleClick(image.key)}
                src={image.image}
                alt="img"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Grid
