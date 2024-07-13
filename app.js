const $submitBtn = $(".submit");
const $searchBar = $(".searchBar");
const $imgDiv = $(".imgDiv");
const $deleteBtn = $(".delete");
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
$deleteBtn.on('click', () => {
    $imgDiv.html('');
});
$submitBtn.on('click', async function (e) {
    e.preventDefault();
    let searchVal = $searchBar.val();
    $searchBar.val('');
    let response = await axios.get('http://api.giphy.com/v1/gifs/search',{params: {q : searchVal, api_key : apiKey}});
    let newGif = $('<img/>');
    newGif.attr('src',response.data.data[0].images.original.url);
    $imgDiv.append(newGif);
});
