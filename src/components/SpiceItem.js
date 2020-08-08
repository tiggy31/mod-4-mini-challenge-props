import React from 'react'

class SpiceItem extends React.Component {

  render() {
    return (
      <div className="spice-item">
        <img src={null /* replace me with an image url */} alt={"replace me with a TITLE"} />
        <div className="details">
          <h2>{"replace me with a TITLE"}</h2>
          <p>{"replace me with a DESCRIPTION"}</p>
          <em>{"replace me with NOTES"}</em>
        </div>
      </div>
    )
  }
}

export default SpiceItem