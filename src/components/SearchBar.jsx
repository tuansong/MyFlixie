import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SearchBar extends Component {

  render() {
    return (
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Or search for any name..." onChange={this.props.onChange}/><span><FontAwesomeIcon icon="search"/></span>
          {/* <input type="text" onChange={this.props.onChange} /> */}
        </div>
        )
      }
    }
    
export default SearchBar