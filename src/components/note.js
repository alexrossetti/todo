import React from 'react';
import './note.css';

class Note extends React.Component {

    render(){
        return (
            <div className="note" onClick={this.props.delete}>
                {this.props.text}
            </div>
        );
    }

}

export default Note;