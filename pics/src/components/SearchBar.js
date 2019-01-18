import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  onChange = event => {
    this.setState({ term: event.target.value})
  }

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
         <div className="field">
         <label>Image Search</label>
          <input type="text" value={term} onChange={this.onChange}/>
         </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;