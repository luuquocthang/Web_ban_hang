using Shopping.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Shopping.Controllers
{
    public class UserController : ApiController
    {
        private ShoppingContext db = new ShoppingContext();
        [HttpPost]
        public User Post([FromBody]  User user)
        {
            return user;
        }
    }
}
