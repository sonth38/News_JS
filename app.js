// Tạo trang tin headline
$(document).ready(function(){
    $("#loading").show()
    fetch('https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=7445ada2cdff1257de943545c330394a')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var news = "";
        for (let i = 0; i < data.articles.length; i++) {
            news +=  "<div class = \"row\"><div class = \"col-md-4\">";
            news += "<img style=\"width:100%;\" src =" + data.articles[i].image + ">";
            news += "</div>";
            news += "<div class = \"col-md-8\">" 
            + "<a class = \"item-title\" href =" + data.articles[i].source.url + " target=\"_blank\">" + data.articles[i].title + "</a>";
            news += "<li><i class = \"item-publish\">"+ data.articles[i].publishedAt + "</i></li>";
            news += "<li>"+ data.articles[i].description + "</li>" + "</div></div>" + "<br>";
        };
        document.getElementById("news").innerHTML = news;
        $("#loading").hide()
    });


});

// Tạo Box khi ấn search
$(document).ready(function(){
    $('.search-btn').click(function(){
        $('.lighbox').css('display', 'block');
        $('.background-lighbox').css('opacity', '0.2');
    });

    $('.close-box').click(function(){
        closeBox ();
    });

    // $('.background-lighbox').click(function(){
    //     closeBox ();
    // });

    $('.searchBox').click(function(){
        closeBox ();
    });

    function closeBox() {
        $('.lighbox').css('display', 'none');
        $('.background-lighbox').css('opacity', '1');
    };
});

// Tạo chức năng search
$('.searchBox').click(function(){
    $('.modal').css("display", "block");
        
    var keyWords = $('.lighbox-search input').val();
    var keyWordLink = "https://gnews.io/api/v4/search?q=" + keyWords + "&lang=en&token=7445ada2cdff1257de943545c330394a";
    
    
    fetch(keyWordLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var output = "";
        for (let i = 0; i < data.articles.length; i++) {
            output +=  "<div class = \"row\"><div class = \"col-md-4\">";
            output += "<img style=\"width:100%;\" src =" + data.articles[i].image + ">";
            output += "</div>";
            output += "<div class = \"col-md-8\">" 
            + "<a class = \"item-title\" href =" + data.articles[i].source.url + " target=\"_blank\">" + data.articles[i].title + "</a>";
            output += "<li><i class = \"item-publish\">"+ data.articles[i].publishedAt + "</i></li>";
            output += "<li>"+ data.articles[i].description + "</li>" + "</div></div>" + "<br>";
        };
        document.getElementById("news").innerHTML = output;
        
        $('.modal').css("display", "none");

    });



});


