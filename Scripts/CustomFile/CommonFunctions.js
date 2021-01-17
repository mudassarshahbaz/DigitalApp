

var CommonFunctions = function () {




    //------------------------------------------------------------------------------------------------------------
    this.LogOut = function () {
        $.ajax({
            type: "Get",
            dataType: 'json',
            contentType: "application/json",
            url: 'https://' + window.location.host + '/ManageUser/LogOut',
            data: {},
            success: LogoutSuccess,
            error: LogoutError
        });

        return false;
    }

    //------------------------------------------------------------------------------------------------------------
    //To create jquery id similar string
    this.JQID = function (Obj) {
        return '#' + Obj;
    }

    //------------------------------------------------------------------------------------------------------------
    //To create jquery id similar string
    this.JQClass = function (Obj) {
        return '.' + Obj;
    }

    //------------------------------------------------------------------------------------------------------------
    this.getUrlVars = function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }


   
    //-----------------

    this.GetParameterByName = function (name) {

        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

    }

    this.DataTableCheckBox = function (CheckBoxControlID) {
        debugger
        $('#' + CheckBoxControlID + ' input').iCheck({
            checkboxClass: 'icheckbox_square-orange',
            radioClass: 'iradio_square-orange',
            increaseArea: '20%'
        });
    }

    this.ShowHide = function () {
        $('#AddPanel').css("display", "block");
        $('#GrdPanel').css("display", "none");
    }

    this.DestroyAndClearDatatable = function () {
        var tables = $.fn.dataTable.fnTables();
        $(tables).each(function () {
            $(this).dataTable().fnClearTable();
            $(this).dataTable().fnDestroy();
        });
    }


}




$(document).ready(function () {

 
   
});