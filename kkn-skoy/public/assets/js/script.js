$(document).ready(() => {
    $('form').on('submit', () => {
        var item = $('form input');
        var inputData = {student: item.val()};

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


    $('.btn-danger').on('click', () => {
        // handle delete
    });
})