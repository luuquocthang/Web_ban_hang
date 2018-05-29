using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shopping.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string EmailId { get; set; }
        public string PassWord { get; set; }
        public int PhoneNumber { get; set; }
        public string NickName { get; set; }
        public string Url { get; set; }
        public string CreatedAt { get; set; }
        public string Status { get; set; }
        public string DisplayName { get; set; }
        public int Money { get; set; }
        public Rule Rule { get; set; }
    }
}