using Shopping.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Shopping.Controllers
{
    public class ProductController : ApiController
    {
        private ShoppingContext db = new ShoppingContext();
        public IEnumerable<Product> Get()
        {
            return db.Products;
        }
        public Product Get(int Id)
        {
            return db.Products.FirstOrDefault(m => m.Id.Equals(Id));
        }
    }
}
