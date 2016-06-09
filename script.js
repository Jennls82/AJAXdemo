$('#search').keyup(function() {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");
    $.getJSON('data.json', function(data) {
        var output = '<ul class="searchresults">';
        $.each(data, function(key, val) {
            if ((val.name.search(myExp) != -1) ||
            (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>'+ val.name +'</h2>';

                output += '<a href = "https://cloud.githubusercontent.com/assets/'+ val.shortname0 +'.jpg" data-lightbox="images" data-title="Click either side of the image to scroll"><img src="images/'+ val.shortname0 +'.jpg" alt="'+ val.name +'" /></a>';
                output += '<a href = "https://cloud.githubusercontent.com/assets/'+ val.shortname1 +'.jpg" data-lightbox="images" data-title="Click either side of the image to scroll"><img src="images/'+ val.shortname1 +'.jpg" alt="'+ val.name +'" /></a>';
                output += '<a href = "https://cloud.githubusercontent.com/assets/'+ val.shortname2 +'.jpg" data-lightbox="images" data-title="Click either side of the image to scroll"><img src="images/'+ val.shortname2 +'.jpg" alt="'+ val.name +'" /></a>';
                output += '<a href = "https://cloud.githubusercontent.com/assets/'+ val.shortname3 +'.jpg" data-lightbox="images" data-title="Click either side of the image to scroll"><img src="images/'+ val.shortname3 +'.jpg" alt="'+ val.name +'" /></a>';
                output += '<a href = "https://cloud.githubusercontent.com/assets/'+ val.shortname4 +'.jpg" data-lightbox="images" data-title="Click either side of the image to scroll"><img src="images/'+ val.shortname4 +'.jpg" alt="'+ val.name +'" /></a>';

                output += '<p>'+ val.bio +'</p>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    }); //get JSON
});
