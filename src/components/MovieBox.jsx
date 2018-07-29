import React, { Component } from 'react'

export class MovieBox extends Component {
  render() {
    let style = {
      width: "20em"
    }
    return (
      // <div class="card mb-4 box-shadow">
      //   <div class="card-header">
      //   <img className="card-img-top" src={this.props.img} alt={this.props.title} />
      //   </div>
      //   <div class="card-body">
      //   <h3 className="card-title">{this.props.title}</h3>
      //       <p className="card-text">{this.props.overview}</p>
      //   </div>
      //   <div class="card-footer"></div>
      // </div>
      <div className="col-md-12">
        <div className="shadow mb-5 bg-white rounded" style={style}>
          <div className="img-poster">
          <img className="card-img-top " src={this.props.img} alt={this.props.title} />
          </div>
          <div>
            <h3 className="card-title">{this.props.title}</h3>
            <p className="card-text">{this.props.overview}</p>
            <button type="button" onClick={this.props.clicked} className="btn btn-primary mb-4" data-toggle="modal" data-target="#exampleModal">
              View more
            </button>
            {/* <a href="#" onClick={this.props.clicked}>View more</a> */}
          </div>
        </div>
      </div>

    )
  }
}

export default MovieBox
