import React from 'react';
import { connect } from 'react-redux';

import FilterForm from '../components/filterform';
import List from '../components/list';

import { changeFilterText } from '../actions/actions'

class App extends React.Component {
	render() {
		const { dispatch, filterText, titles } = this.props;

		const actions = {
			changeFilterText: (newFilterText => dispatch(changeFilterText(newFilterText))),
		};

		return (
			<div>
				<h1>Kódlista</h1>
				<div id="main">
				  <div id="list-container">
				  
					<FilterForm 
						filterText={this.props.filterText} 
						handleChange={actions.changeFilterText}
					/>
					<List data={this.props.titles} />
					
				  </div>
				</div>
			</div>
		);
	}
}

function filterTitles(titles, filterText) {
	return titles.filter(title => title.indexOf(filterText) > -1);
}

function select(state) {
	return {
  		filterText: state.filterText,
  		titles: filterTitles(state.titles, state.filterText)
  	};
}

export default connect(select)(App);
