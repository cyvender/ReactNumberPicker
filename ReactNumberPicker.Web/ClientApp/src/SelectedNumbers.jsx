import React from 'react';

class SelectedNumbers extends React.Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 offset-md-2">
                            <h1>Selected Numbers</h1>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Lock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.selectedNumbers.map(sn =>
                                        <tr>
                                            <td>{sn.number}</td>
                                            <td>
                                                <button
                                                    onClick={() => this.props.onLockClick(sn)}
                                                    className="btn btn-primary">
                                                    {!sn.isLocked ? "Lock" : "Unlock"}
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SelectedNumbers;