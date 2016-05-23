var TodoItem = React.createClass({
    render : function(){
        return (<li key={this.props.key}>{this.props.text} #{this.props.counter}</li>);
    }
});

var TodoList = React.createClass({
    componentDidMount : function () {
      console.log(this.props.items);  
    },
    render : function(){
        var mapItem = function(item){
            return <TodoItem key={item.counter} counter={item.counter} text={item.text}/>
        };
        return (<ul>{this.props.items.map(mapItem)}</ul>);
    }
});

var Todo = React.createClass({
    getInitialState: function() {
        return {
            items: [{counter : 1, text : 'Batman'},
                    {counter : 2, text : 'Superman'},
                    {counter : 3, text : 'Spiderman'}],
            text : ''
        };
    },
    addItem : function (e) {
        e.preventDefault();
        var item = {key : Date.now(), text : this.state.text, counter : this.state.items.length + 1}
        var allItens = this.state.items.concat(item);
        this.setState({items : allItens, text : ''});
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    render : function(){
        return (
            <div>
            <h2>TODO</h2>
            <form onSubmit={this.addItem}>
                <input onChange={this.onChange} value={this.state.text} />   
                <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
            <hr />
            <TodoList items={this.state.items}/>
            </div>            
         );
    }
});

ReactDOM.render(<Todo/>, document.getElementById('content'));