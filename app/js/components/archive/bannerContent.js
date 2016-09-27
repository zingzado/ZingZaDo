var Search = React.createClass({
  render: function() {
    return <input type="text" value="Hello!" className="input-form" />;
  }
});


ReactDOM.render(
  <Search />,
  document.getElementById('search')
);

