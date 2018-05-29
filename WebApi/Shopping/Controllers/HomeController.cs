using Shopping.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Shopping.Controllers
{
    public class HomeController : Controller
    {
        private ShoppingContext db = new ShoppingContext();
        public ActionResult Index()
        {
            
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
