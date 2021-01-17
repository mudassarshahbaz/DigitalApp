function BlockUI() {
    //$.blockUI({
    //    //message: '<img src="../Images/loader.gif" height="40px" width ="40px" />' ,
    //    message: '<img src="../../Images/103.gif" height="20px" width ="100%" />',
    //    css: {
    //        padding: 0,
    //        margin: 0,
    //        width: '20%',
    //        border: 'none',
    //        background: 'none',
    //        left: '40%'
    //    }
    //});

    Metronic.blockUI({        
        boxed: true
    });
}

function UnBlockUI() {
    //$.unblockUI();
    Metronic.unblockUI();
}