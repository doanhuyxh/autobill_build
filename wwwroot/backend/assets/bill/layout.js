
//var h = $(document).height();
//$("#left-side").height(h);

$(".draggable").on('mousedown', function () {
    $(this).css("cursor", "grabbing");
});

$(".draggable").on('mouseup', function () {
    $(this).css("cursor", "grab");
});
$('[data-toggle="collapse"]').click(function () {
    $(".collapse.show").collapse('hide');
});

var collapseId = localStorage.getItem("collapseId");
$("#" + collapseId).collapse('show');

$(".branch").click(function () {
    let company = $(this).attr("collapse-id");
    localStorage.setItem("collapseId", company);
});

//highlight active menu item
$(".menu-item-link").click(function () {
    localStorage.setItem("activeTag", $(this).attr("id"));
});
var activeTag = localStorage.getItem("activeTag");
$("#" + activeTag).css("color", "goldenrod");