import React from 'react'
import SpiceItem from './SpiceItem'
// TODO: import the SpiceItem component here

// class component
class SpiceList extends React.Component {

  renderSpices() {
    return this.props.spices.map(spice => <SpiceItem key={spice.id} spice={spice} />)
    // TODO: update this function to return an array of SpiceItem components
    // If you get an error message about a 'key' prop, make sure to fix it before submitting your code!
  }

  render() {
    console.log("SpiceList props:", this.props.spices)
    return (
      <section className="spice-list">
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList