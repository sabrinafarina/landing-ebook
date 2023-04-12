var settings = {
    "url": "https://www.googleapis.com/books/v1/volumes/FVYtAAAAYAAJ",
    "method": "GET"
}

$.ajax(settings).done(function(reponse){
    console.log(reponse);

    $("#title").text(reponse.volumeInfo.title);
    $("#author").text(reponse.volumeInfo.authors[0]);
});

$("#assinar").submit(function(e){
    e.preventDefault();
    $("#resposta").text("Requisição recebida. Boa sorte!");
});