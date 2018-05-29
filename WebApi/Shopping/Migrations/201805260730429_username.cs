namespace Shopping.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class username : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "UserName", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "UserName", c => c.Int(nullable: false));
        }
    }
}
