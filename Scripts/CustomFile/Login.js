// Implement Input Validations as per requirements on username Textbox
var input = jQuery("#txtUserName");
jQuery(input).keydown(function (e) {
    if (e.keyCode == 188 || e.keyCode == 190 || e.keyCode == 191 || e.keyCode == 220) {
        e.preventDefault();
    }
})

// Implement Input Validations as per requirements on Password Textbox
var input = jQuery("#txtPassword");
jQuery(input).keydown(function (e) {
    if (e.keyCode == 188 || e.keyCode == 190 || e.keyCode == 191 || e.keyCode == 220) {
        e.preventDefault();
    }
})


$("#btnLogin").click(function () {
    ValidateUser();
});

function ValidateUser() {

    if (ValidateFormControls() == true) {
        BlockUI();
        var Username = $('#txtUserName').val();
        var Password = $('#txtPassword').val();
        var ApiUrl = $('#hdnApiUrl').val();
        var JSONData = { 'userName': Username, 'password': Password, };

        $.ajax({
            type: "Get",
            dataType: 'json',
            contentType: "application/json",
            data: JSONData,
            url: ApiUrl + "/api/Login/ValidateUser",
            success: ValidateUserSuccess,
            error: ValidateUserFailed
        });
    }
    return false;
}

function ValidateUserSuccess(response) {
    UnBlockUI();
    var res = response.errorInfo.success;
    if (res == "true") {
        window.location.href = "/Home";
    }
    else {
        var msg = JSON.stringify(response.errorInfo);
        toastr.error(msg, "");
    }
}
function ValidateUserFailed() {

}

function ClearValidationErrorClass() {
    $('#txtUserName').removeClass('md-input md-input-danger').addClass('md-input');
    $('#txtPassword').removeClass('md-input md-input-danger').addClass('md-input');
}

function ValidateFormControls() {
    ClearValidationErrorClass();
    var isValidated = true;

    if ($('#txtUserName').val() == '') {
        isValidated = false;
        $('#txtUserName').removeClass('md-input').addClass('md-input md-input-danger');
    }


    if ($('#txtPassword').val() == '') {
        isValidated = false;
        $('#txtPassword').removeClass('md-input').addClass('md-input md-input-danger');
    }

    return isValidated;
}