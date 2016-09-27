var Brand = React.createClass({
  render: function(){
    return(
	<div>
        <h1><img src="img/zzd-logo.png"/></h1>
        <h4 className="hidden-xs hidden-sm">Find awesome things to do. Save. Share.</h4>
        <h5 className="hidden-md hidden-lg">Find awesome things to do. Save. Share.</h5>
	</div>
      );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form className="form-inline">
              <div className="form-group">
                <label className="sr-only" htmlFor="do">What do you want to do?</label>
                <div className="input-group">
                <input type="email" className="form-control" id="do" placeholder="What do you want to do?"/>
                <div className="input-group-addon hidden-md hidden-lg"><i className="fa fa-ellipsis-v"></i></div>
        </div>
              </div>
              <div className="form-group hidden-xs">
                <label className="sr-only" htmlFor="where">Where?</label>
                <input type="password" className="form-control" id="where" placeholder="Where?"/>
              </div>
              <div className="form-group hidden-xs">
                <label className="sr-only" htmlFor="when">When?</label>
                <input type="password" className="form-control" id="when" placeholder="When?"/>
              </div>
              
              <button type="submit" className="btn btn-info hidden-xs">Search</button>
        </form>
    );
  }
});

var Banner = React.createClass({
  render: function() {
    return (	
	  <div className="container">
		  <div>   
			
			<SearchBar />
		  </div>
	  </div>
    );
  }
});

ReactDOM.render(
  <Banner />,
  document.getElementById('jumbotron')
);