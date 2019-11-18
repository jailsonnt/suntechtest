import React, { Component } from 'react'

export class PageableControls extends Component {
    render() {
        return (
            <div >
                <button className='btn btn-secondary' onClick={this.props.firstPage}>First</button><button className='btn btn-secondary' onClick={this.props.previousPage}>Previous</button>{' '}{this.props.pageNumber}{' '}<button className='btn btn-secondary' onClick={this.props.nextPage}>Next</button><button className='btn btn-secondary' onClick={this.props.lastPage}>Last</button>
                <p>totalPages: {this.props.totalPages} | totalElements: {this.props.totalElements} | pageElements: {this.props.numberOfElements}</p>
            </div>
        )
    }
}

export default PageableControls
