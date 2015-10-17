'use strict';

var Todo = React.createClass({
	displayName: 'Todo',

	getInitialState: function getInitialState() {
		return { items: [] };
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		//this.props.onFormSubmit(this.state.item);
		var allItems = this.state.items.concat([this.state.item]);
		this.setState({ items: allItems });
		this.setState({ item: '' });
		React.findDOMNode(this.refs.item).focus();
		return;
	},
	updateItems: function updateItems(newItem) {
		var allItems = this.state.items.concat([newItem]);
		this.setState({ items: allItems });
	},
	removeItem: function removeItem(item, index) {
		return (function (e) {
			//e.preventDefault();
			this.state.items.splice(index, 1);
			this.setState({ items: this.state.items });
			console.log(item);
		}).bind(this);
	},

	onChange: function onChange(e) {
		this.setState({
			item: e.target.value
		});
	},
	deleteTask: function deleteTask(e) {
		var taskIndex = parseInt(e.target.value, 10);
		console.log('remove task: %d', taskIndex);
	},

	render: function render() {

		var createItem = function createItem(item, index) {

			return React.createElement(
				'li',
				null,
				item,
				React.createElement(
					'button',
					{ onClick: console.log(index) },
					'x'
				)
			);
		};
		return React.createElement(
			'div',
			null,
			React.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				React.createElement('input', { type: 'text', ref: 'item', onChange: this.onChange, value: this.state.item }),
				React.createElement('input', { type: 'submit', value: 'Add' })
			),
			React.createElement(
				'h1',
				null,
				'List'
			),
			React.createElement(
				'h1',
				null,
				this.state.item
			),
			React.createElement(
				'ul',
				null,
				this.state.items.map((function (item, index) {

					return React.createElement(
						'li',
						null,
						item,
						React.createElement(
							'button',
							{ onClick: this.removeItem(item, index) },
							'x'
						)
					);
				}).bind(this))
			)
		);
	} });

React.render(React.createElement(Todo, null), document.body);
