// JQuery Approach
$(document).ready(() => {
    $('#form-kkn').on('submit', () => {
        var inputName = $('#input-name').val();
        var inputFaculty = $('#input-faculty').val();
        var inputLocation = $('#input-location').val();

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