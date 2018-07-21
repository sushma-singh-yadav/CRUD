//$(document).ready(function(){

var name = document.getElementById("name");
var List= document.getElementById("nameList");

function addName(){
	
	var inputdata= document.getElementById("name").value;
	alert(inputdata);
	console.log(inputdata);

	var counter=0;

	var html = '<div class="row" id="name'+counter+'" style="margin-bottom:15px;">'+
      	'<div class="col-md-6">'+
      		'<input type="text" name="nametext" class="form-control" value='+inputdata+' disabled>'+
      	'</div>'+
      	'<div class="col-md-2 col-sm-4 col-xs-4">'+
      		'<button class="btn btn-success" type="button" id="edit'+counter+'" onclick="edit(this.id)">Edit</button>'+
      	'</div>'+
      	'<div class="col-md-2">'+
      		'<button class="btn btn-success" type="button" id="update'+counter+'" onclick="update(this.id)">Update</button>'+
      	'</div>'+
      	'<div class="col-md-2">'+
      		'<button class="btn btn-danger" type="button" id="delete'+counter+'" onclick="deleted(this.id)">Delete</button>'+
      	'</div>'+
      '</div>';

      document.getElementById('nameList').insertAdjacentHTML('beforeend', html);
      counter++;
}

function edit(editID){
	var edit = document.getElementById(editID).parentNode.parentNode;
	var child = edit.firstChild.firstChild;

	child.removeAttribute("disabled");
	console.log(child);
}

function update(updateID){
	var update= document.getElementById(updateID).parentNode.parentNode;
	var child = update.firstChild.firstChild;

	child.setAttribute("disabled",'disabled');
	console.log(child);
}

function deleted(deleteID){
	var deleted = document.getElementById(deleteID).parentNode.parentNode;
	deleted.remove();
	console.log(deleted);
}
//});