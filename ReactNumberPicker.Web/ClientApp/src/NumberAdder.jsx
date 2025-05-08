import React from 'react';

class NumberAdder extends React.Component {

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={this.props.onAddClick} className="btn btn-success btn-lg w-100">Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberAdder;
