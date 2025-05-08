import React from 'react';

import SelectedNumbers from './SelectedNumbers';
import NumberAdder from './NumberAdder';
import randomInteger from 'random-int';
import { v4 as uuidv4 } from 'uuid';

class NumbersList extends React.Component {

    state = {
        numbers: []
    }

    onAddClick = () => {
        const numberItem = {
            id: uuidv4(),
            number: randomInteger(100, 999),
            isSelected: false,
            isLocked: false
        }
        this.setState(
            {
                numbers: [...this.state.numbers, numberItem]
            });
    }

    onSelectClick = (n) => {
        const copy = [...this.state.numbers];
        const selectedNumber = copy.find(c => c.id === n.id);
        selectedNumber.isSelected = !selectedNumber.isSelected;
        this.setState({numbers: copy});
    }

    onLockClick = (sn) => {
        const copy = [...this.state.numbers];
        const selectedNumber = copy.find(c => c.id === sn.id);
        selectedNumber.isLocked = !selectedNumber.isLocked;
        this.setState({numbers: copy}); 
    }

    render() {
        return (
            <>
                <NumberAdder onAddClick={this.onAddClick} />
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 offset-md-2">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Add/Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.numbers.map(n =>
                                        <tr>
                                            <td>{n.number}</td>
                                            <td>
                                                <button 
                                                onClick={() => this.onSelectClick(n)} 
                                                disabled={n.isLocked}
                                                className={`btn btn-${n.isSelected ? 'danger' : 'primary' }`}
                                                >
                                                    {n.isSelected ? "Remove" : "Add to Selected"}
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <SelectedNumbers 
                numbers={this.state.numbers} 
                onLockClick={this.onLockClick}/>
            </>
        )
    }
}

export default NumbersList;