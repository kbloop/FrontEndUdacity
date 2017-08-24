
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // Api's
    var gStr = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=";
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    var nytKey = "245f7d83d71c49d59a24564d8ef9b343";

    var wikiURL = "https://en.wikipedia.org/w/api.php";

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var Str = gStr + street + ", " + city;

    nytURL += "?"+ $.param({
        "api-key" : nytKey,
        "q" : city
    });

    wikiURL += "?" + $.param({
        "action": "opensearch",
        "search": city,
        "format": "json"
    });

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // YOUR CODE GOES HERE!
    $body.append("<img class='bgimg' src='"+Str+"'/>");

    // NYT Times ajax request
    $.ajax({
        url : nytURL,
        method: 'GET',
        dataType: 'json',
    }).done(function(result){
        $nytHeaderElem.text("Articles from the nyt about "+ city);
        var items = [];
        $.each(result.response.docs, function(key, val) {
            items.push("<li id='"+key+"'>"+val.headline.main+"</li>");
        });

    // Wiki ajax request
    var wikiRequestTimeOut = setTimeout(function(){
        $.wikiElem.text("failed to get wikipedia information");
    }, 8000);
    $.ajax({
        url: wikiURL,
        dataType: 'jsonp',
        success: function(data){
            for(var i=0; i<data[1].length; i++){
                $wikiElem.append("<li id='wikilink-"+i+"'><a href='"+data[3][i]+"'>"+data[1][i]+"</a></li>");
            }
            clearTimeout(wikiRequestTimeOut);
        }
    });

        $("#nytimes-articles").append(items);


    }).fail(function(err){
        throw(err);
    });
    return false;
};

$('#form-container').submit(loadData);