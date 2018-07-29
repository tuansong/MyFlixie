import React, { Component } from 'react'

export class SortMovie extends Component {
  render() {
    return (
      <div className="sort">
        <h5>You can sort movie by: <a href="#" onClick={this.props.sortDate}>Release date/</a><a href="#" onClick={this.props.sortRating}>Rating</a></h5>
      </div>
    )
  }
}

export default SortMovie
