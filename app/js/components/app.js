var ZingCollectionRow = React.createClass({
  render: function() {
    return (<h4>{this.props.collection}</h4>)
    }
});

var ZingRow = React.createClass({
    render: function(){
        return (
                <div className="col-md-12">
					<a className="thumbnail" href={this.props.zing.url}>
						<div className="caption">
						<h4>{this.props.zing.title}</h4>  
						<p>{this.props.zing.description}</p>
						</div>
					</a>
				</div>            
        );
    }
});

var ZingTable = React.createClass({
    render: function(){
        var rows = [];
        var lastCollection = null;
        this.props.zings.forEach(function(zing){
            if (zing.collection != lastCollection){
                rows.push(<ZingCollectionRow collection={zing.collection} key={zing.collection} />);
            }
            rows.push(<ZingRow zing={zing} key={zing.title} />);
            lastCollection = zing.collection;
        });
        return(
        <div>
        {rows}
      	</div>
        );
    }
});

var FilterableZingTable = React.createClass({
  render: function() {
    return (
      <div>
        <ZingTable zings={this.props.zings} />
      </div>
	  
    );
  }
});

var ZINGS = [
    {"collection":"Collection 1","title":"Umstead","url":"Umstead.html", "public": true, "description":"some long description"},
    {"collection":"Collection 2","title":"Otherstead","url":"Umstead.html", "public": true, "description":"some long description"},
    {"collection":"Collection 2","title":"OtherOtherstead","url":"Umstead.html", "public": true, "description":"some long description"},
	{"collection":"Collection 2","title":"OtherOtherstead2","url":"Umstead.html", "public": true, "description":"some long description"},
	{"collection":"Collection 2","title":"OtherOtherstead3","url":"Umstead.html", "public": true, "description":"some long description"},
	{"collection":"Collection 2","title":"OtherOtherstead4","url":"Umstead.html", "public": true, "description":"some long description"},
	{"collection":"Collection 2","title":"OtherOtherstead5","url":"Umstead.html", "public": true, "description":"some long description"}
];

ReactDOM.render(
  <FilterableZingTable zings={ZINGS} />,
  document.getElementById('content')
);