import React, { Component } from 'react'

export class MovieBox extends Component {
  render() {
    let style = {
      width: "20em"
    }
    return (
      <div className="card shadow mb-5 bg-white rounded text-center" style={style}>
        <div className="img-poster">
          <img className="card-img-top " src={this.props.img} alt={this.props.title} />
        </div>
        <div>
          <h3 className="card-title">{this.props.title}</h3>
          <p className="card-text">{this.props.overview}</p>
          <button type="button" onClick={this.props.clicked} className="btn btn-primary mb-4" data-toggle="modal" data-target="#exampleModal">
            View more
            </button>
        </div>
      </div>
    )
  }
}

