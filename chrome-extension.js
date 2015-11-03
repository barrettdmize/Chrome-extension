

    $.ajax({
      url: 'https://www.reddit.com/r/worldnews.json',
      method: 'GET',
      success: function (data) {
        var topNews = data.data.children
        _.each(topNews,function (el,index) {

          $('.topNews').append(topNews[index].data.title + '<br> <br>');

})
}
        });
