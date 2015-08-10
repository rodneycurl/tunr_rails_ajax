// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  // ajax get
  $(".test_ajax_get").on("click", function(){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/artists"
    }).done(function(response) {
      console.log(response)
    }).fail(function(response){
      console.log("ajax get request failed")
    })
  })

  // ajax post
  $(".test_ajax_post").on("click", function(){
    var name = $(".name").val()
    var photoUrl = $(".photo_url").val()
    var nationality = $(".nationality").val()
    $.ajax({
      type: 'POST',
      data: {artist: {photo_url: photoUrl, name: name, nationality: nationality}},
      dataType: 'json',
      url: "http://localhost:3000/artists"
    }).done(function(response) {
      console.log(response)
      $("ul.articles").append("<li><a href='/artists/" + response.id + "'>" + response.name + "</a></li>")
    }).fail(function(response){
      console.log("ajax post request failed")
    })
  })

  // ajax put
  $(".test_ajax_put").on("click", function(){
    $.ajax({
      type: 'PUT',
      {artist: {photo_url: photoUrl, name: name, nationality: nationality}},
      dataType: 'json',
      url: "http://localhost:3000/artists/6"
    }).done(function(response){
      console.log(response)
    }).fail(function(){
      console.log("failed to update")
    })
  })

  // ajax delete
  $(".test_ajax_delete").on("click", function(){
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: "http://localhost:3000/artists/9"
    }).done(function(response){
      console.log("DELETED")
      console.log(response)
    }).fail(function(){
      console.log("failed to delete")
    })
  })
})
