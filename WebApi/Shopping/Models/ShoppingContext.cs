using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Shopping.Models
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext() : base("name=ShoppingContext")
        {

        }
        public DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasKey(k => k.Id);
            modelBuilder.Entity<Product>().Property(k => k.Id)
                .HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            base.OnModelCreating(modelBuilder);
        }
    }
}