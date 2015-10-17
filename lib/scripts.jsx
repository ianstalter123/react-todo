var Todo = React.createClass({

	getInitialState: function(){
		return {items: []};
	},
	handleSubmit: function(e){
		e.preventDefault();
		//this.props.onFormSubmit(this.state.item);
		var allItems = this.state.items.concat([this.state.item])
		this.setState({items: allItems});
		this.setState({item:''});
		React.findDOMNode(this.refs.item).focus()
		return;
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem])
		this.setState({items: allItems});
	},
	removeItem: function(item,index) {
    return function(e) {
      //e.preventDefault();
      this.state.items.splice(index,1)
      this.setState({items: this.state.items});
      console.log(item)
    }.bind(this);
  },

	onChange: function(e){
		this.setState({
			item: e.target.value
		})
	},	
		deleteTask: function(e) {
        var taskIndex = parseInt(e.target.value, 10);
        console.log('remove task: %d', taskIndex)
    },
	
	render: function () {

	var createItem = function(item,index){

	return (
		<li>{item}<button onClick={console.log(index)}>x</button></li>

			);
		};
return <div> 
			<form onSubmit={this.handleSubmit}>
			<input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
			<input type='submit' value='Add'/>
			</form>
 			<h1>
				List
 	   		</h1>
 	   		<h1>{this.state.item}</h1>
 	   		<ul>{this.state.items.map(function(item,index){

	return (
		<li>{item}<button onClick={this.removeItem(item,index)}>x</button></li>

			);
		}.bind(this)
		)}</ul>
 	   		</div>
 	}})

React.render(
<Todo/>,
document.body
	);