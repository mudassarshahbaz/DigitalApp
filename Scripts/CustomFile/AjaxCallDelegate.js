
var AjaxCallDelegate = function () {

    //variables
    this.RequestTypeVariables = {
        Get: "GET",
        Post: "POST",
        Put:"PUT"
    };

    this.DataTypeVariables = {
        Json: "json",
        Xml: "xml",
        Html: "html",
        Script: "script",
        Jsonp: "jsonp",
        Text: "text"
    };

    //generic ajax call
    this.AjaxCall = function (RequestType, DataType, URL, paramArray, SuccessFunctionName, ErrorFunctionName) { 
        $.ajax({
            dataType: DataType,
            type: RequestType,          
            url: URL,      
            data: paramArray,
            async: false,
            contentType: "application/json",
            success: eval(SuccessFunctionName),
         
            error: function (Response) {
                debugger
                window.location.href = "/";
                //if (Response.responseText.indexOf('<body class="login">') > -1) {
                //    window.location.href = LoginPage;
                //}
                //else {
                //    //window[ErrorFunctionName](Response);
                //}
            }
        });
    }


    this.makeAjaxCallRequestHeader = function (url, dataObj, callbackFunction, httpMethod) {
    
        $.ajax({
            url: url,
            cache: false,      
            type: httpMethod,
            //dataType: 'json',
            data: dataObj,
            contentType: "application/json;charset=utf-8",
            // processData: false,
            async: true,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) { callbackFunction(data); },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                //  console.log("error :" + XMLHttpRequest.responseText + " " + textStatus.status);
                // alert('There was an error in performing this operation.');
            }
        });
    }

    this.AsynchronousAjaxCall = function (RequestType, DataType, URL, paramArray, SuccessFunctionName, ErrorFunctionName) {

        $.ajax({
            dataType: DataType,
            type: RequestType,
            url: URL,        
            data: paramArray,
            async: true,
            contentType: "application/json",
            //success: eval(SuccessFunctionName),

            //error: eval(ErrorFunctionName)
            success: eval(SuccessFunctionName),
            error: function (Response) {
                debugger
                window.location.href = "/";
                //if (Response.responseText.indexOf('<body class="login">') > -1) {
                //    window.location.href = LoginPage;
                //}
                //else {
                //    //window[ErrorFunctionName](Response);
                //}
            }
        });
    }


}


