import React, { Component } from 'react'

export class MovieModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="w-100 text-center">
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w342/${this.props.link}`} alt={this.props.title} />
                                </div>
                                <p>Release date: {this.props.date}</p>
                                <i>Point: {this.props.point}/{this.props.vote} votes</i>
                                <div>
                                    <strong>Description: </strong>{this.props.body}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

