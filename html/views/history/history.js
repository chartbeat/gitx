// TODO: need to be refactoring
var selectCommit = function(a) {
	Controller.selectCommit_(a);
}

// TODO: need to be refactoring
var openFileMerge = function(file,sha,sha2) {
	alert(file);
	alert(sha);
	alert(sha2);
	Controller.openFileMerge_sha_sha2_(file,sha,sha2);
}

var openGitHub = function(sha) {
        alert("openGitHub(" + sha + ")");
        Controller.openGitHub_(sha);
}

var showImage = function(element, filename)
{
	element.outerHTML = '<img src="GitX://' + commit.sha + '/' + filename + '">';
	return false;
}

var showCommit = function(data){
	$("commit").innerHTML=data;
}

var showFullDiff = function() {
    Controller.showLongDiff();
    Controller.updateView();
}
