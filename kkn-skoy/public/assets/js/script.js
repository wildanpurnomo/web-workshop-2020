// JQuery Approach
$(document).ready(() => {
    $('#form-kkn').on('submit', () => {
        var inputName = $('#input-name').val().trim();
        var inputFaculty = $('#input-faculty').val().trim();
        var inputLocation = $('#input-location').val().trim();

        var inputData = { name: inputName, faculty: inputFaculty, location: inputLocation };

        $.ajax({
            type: 'POST',
            url: '/add',
            data: inputData,
            success: (response) => {
                // do something with response

                location.reload();
            }
        });

        return false;
    });


    $('.btn-danger').on('click', function () {
        // handle delete
        var name = $(this).attr('id');

        $.ajax({
            type: 'DELETE',
            url: '/delete/' + name,
            success: (response) => {
                // do something with response

                location.reload();
            }
        });
    });
});