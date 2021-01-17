using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DigitalApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public JsonResult Logout()
        {
            //Session Abandon for application
            Session.Abandon();
            return Json("Logout", JsonRequestBehavior.AllowGet);

        }
    }
}