/**Delete button event handler - delete selected item from to do list*/
jQuery(document.body).on('click', '.deleteButton', function(event) {
    $(this).parent().parent().parent().remove();
});

/**Edit button event handler - allow user to edit list items*/

jQuery(document.body).on('click', '.editButton', function(event) {
		//retrieve current information
		var listItem = $(this).parent().parent();
    var currentTitle = listItem.find("h4").text();
    var currentDetail = listItem.find("p:last-child").text();
    //empty the list item container and replace with input initialised with current info
    listItem.empty();
    listItem.append("<textArea id='editTitle'>" + currentTitle + "</textArea><br><br>"
+ "<textArea id='editDetails' rows='4'>" + currentDetail + "</textArea>"
+ "<input class='saveButton actionButton' type='submit' value='Save'>");
});

/**Save button event handler - save updates of an edited item*/

jQuery(document.body).on('click', '.saveButton', function(event){
	var newTitle = $(this).parent().find('#editTitle').val();
  var newDetails = $(this).parent().find('#editDetails').val();
	$('#title').val(newTitle);
  $('#details').val(newDetails);
  addComment();
  $(this).parent().parent().remove();
});

$("#postComment").click(function(){
	if (validateComment()){
		addComment();
  }
});

function validateComment(){
	if ($("#title").val().length < 1){
  		alert("Please add a title");
      return false;
  }
  if ($("#details").val().length < 1){
  		alert("Please enter details");
  		return false;
  }
  return true;
};

function getDate(){
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  return (day + " / " + month + " / " + year);
};

function addComment(){
  var title = $("#title").val();
  $("#title").val('');
  var details = $("#details").val();
  $("#details").val('');
  
  
  var fullDate = getDate();
  
  $("#commentList").append("<div class='commentContainer'>" 
+ "<div class='innerComment'><h4 class='titleText wrapText'>"
+ title + "</h4><div class='buttonContainer'>"
+"<button class='editButton plainButton informativeText actionButton'>edit</button>" 
+ "<button class='deleteButton plainButton informativeText actionButton'>x</button></div>" 
+ "<p class='informativeText'>Last Updated: " + fullDate + "</p><br><p class='wrapText informativeText'>" 
+ details + "</p></div></div>");
};