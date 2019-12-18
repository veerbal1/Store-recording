import React, { Component } from 'react'

export class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center display-4 text-uppercase pt-5">
                        <div className="display-3">404</div>
                        <h1 className="display-4">error</h1>
                        <h1 className="display-4">page not found</h1>
        <h3 className='lead'>the requested URL<span className="text-danger">{this.props.location.pathname}</span> was not found</h3>

                    </div>
                </div>

            </div>
        )
    }
}

export default Default
