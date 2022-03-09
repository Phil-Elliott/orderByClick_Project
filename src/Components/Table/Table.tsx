import React from "react"
import "./Table.css"
import objectData from "./../../Interfaces"

const Table = ({ images }: { images: Array<objectData> }) => {
  return (
    <div className="clicks-container">
      <div className="clicks-table">
        <div className="clicks-table-header">
          <p>Image</p>
          <p className="clicks">Clicks</p>
        </div>
        {images.map((image, i) => {
          return (
            <div key={image.key} className="clicks-table-content">
              <p>{image.image}</p>
              <p className="clicks">{image.clicks}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Table
