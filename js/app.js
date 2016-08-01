$(document).ready(function () {
    //In the form (item creation) section of the page,
    $('#js-shopping-list-form').submit(function (event) {
        //Make sure it only submits inside this page,
        //and doesn't get caught up trying to send it somewhere else
        event.preventDefault();
        if ($('#shopping-list-entry').val().length != 0) {
            //make a new list item with a bunch of stuff attached to it
            $('.shopping-list').append( //check value >0 before doing (.shopping-list).append() on line 10
                "<li>" +
                '<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span>' +
                '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
                '</button>' +
                '</div>' +
                "</li>"
            );
            //Clear the memory where the entered item is stored, after the new item has been made
            $("#shopping-list-entry").val("");

        }
    }); //exit shopping list form
    //for each <li> implement class .shopping-item__checked if "check" button is clicked
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(event.target).closest('.shopping-item-controls').prev().toggleClass('shopping-item__checked');

    })

    //for each <li> implement class .shopping-item__checked if "delete" button is clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        console.log(event);
        //delete the entire list items
        $(event.target).closest('li').remove();
    })
}); //exit ready check
