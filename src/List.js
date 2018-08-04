import React, { Component } from 'react';

class List extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'in componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('in shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('in componentWillUnmount');
  }

  renderList() {
    let curr = 'A';
    let result = [];
    for (let i = 0; i < this.props.number; ++i) {
      result.push((
        <li key={i}>{curr}</li>
        ));
      curr = String.fromCharCode(curr.charCodeAt(0) + 1);
    }
    return result;
  }

  render() {
    console.log('in liost render');
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }

}

export default List;
