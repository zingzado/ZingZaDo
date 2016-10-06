var ZingCollectionRow = React.createClass({
  render: function() {
    return (<h4><i className="fa fa-list-ul"></i> <strong>{this.props.collection}</strong></h4>)
    }
});

var ZingCategories = React.createClass({
	render: function(){
		<div>{this.props.categories}</div>	
	}
});

var ZingRow = React.createClass({
	render: function(){	
	//var categoriesList = [];
//        var lastCategory = null;
//        this.props.zings.forEach(function(zing){
//            categoriesList.push(<ZingCategories category={categoryName} key={zing.categories.categoryName} />);
//            lastCategory = zing.categories.categoryName;
//        });	
        return (
                <div className="col-md-12">
					<a className="thumbnail">
						<div className="caption">
						<h4>{this.props.zing.title}</h4>
						<p><a href={this.props.zing.url}>{this.props.zing.url}</a></p> 
						<p><i className="fa fa-calendar"></i> {this.props.zing.startDate} - {this.props.zing.endDate}</p>
						<p><i className="fa fa-clock-o"></i> {this.props.zing.startTime} - {this.props.zing.endTime}</p>
						<p><i className="fa fa-map-marker"></i> {this.props.zing.location}</p>
						
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

var ZINGS = [{
	"collection": "When parents come to town",
	"title": "Durham Farmer's Market",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}],
	"comments": [{
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}]
}, {
	"collection": "Collection 2",
	"title": "Otherstead",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}],
	"comments": [{
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}]
}, {
	"collection": "Collection 2",
	"title": "OtherOtherstead",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}],
	"comments": [{
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}]
}, {
	"collection": "Collection 2",
	"title": "OtherOtherstead2",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}],
	"comments": [{
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}]
}, {
	"collection": "Collection 2",
	"title": "OtherOtherstead3",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}],
	"comments": [{
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}]
}, {
	"collection": "Collection 2",
	"title": "OtherOtherstead4",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}],
	"comments": [{
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}, {
		"commentBody": "some comments", "commentTime":"2016-10-31", "commentor":"Kara Love"
	}]
}, {
	"collection": "Collection 2",
	"title": "OtherOtherstead5",
	"url": "Umstead.html",
	"startDate": "2016-05-01",
	"endDate": "2016-10-31",
	"startTime": "08:00:00",
	"endTime": "12:00:00",
	"location": "501 Foster Street Durham, NC 27701",
	"public": true,
	"description": "some long description",
	"categories": [{
		"categoryName": "romantic"
	}, {
		"categoryName": "outdoor"
	}, {
		"categoryName": "food"
	}]
}];

ReactDOM.render(
  <FilterableZingTable zings={ZINGS} />,
  document.getElementById('content')
);