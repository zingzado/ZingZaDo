var NavBar = React.createClass({
	render: function(){
		return(
		<div className="container">
		<ul className="nav navbar-nav">
			<li>
				<a href="#">
				<span className="hidden-xs">Alerts </span> 
				<span className="badge">4</span> 
				</a>
			</li>
			<li>
				<a href="#about"><span className="hidden-xs">Help </span> <i className="fa fa-question-circle fa-lg"></i></a>
			</li>
			<li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
			  	<span className="hidden-xs">Add </span> <i className="fa fa-plus-circle add fa-lg"></i><span className="caret"></span>
			  </a>
              <ul className="dropdown-menu">
                <li><a><i className="fa fa-plus-circle add"></i> Zing</a></li>
                <li><a><i className="fa fa-plus-circle add"></i> Collection</a></li>
                
              </ul>
            </li>
			<li>
				<a href="#contact"><span className="hidden-xs">Zings</span> <i className="fa icon-zzd icon-lg zing"></i></a>
			</li>
			<li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="hidden-xs">Heather</span> <i className="fa fa-user fa-lg user"></i>  <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Recently Viewed</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Sign Out</a></li>
              </ul>
            </li>
		</ul>
		</div>
	  );
	}
	});


ReactDOM.render(
  <NavBar />,
  document.getElementById('navbar')
);