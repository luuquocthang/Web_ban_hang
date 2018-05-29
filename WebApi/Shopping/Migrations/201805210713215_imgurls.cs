namespace Shopping.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class imgurls : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Accounts", "ImgUrls", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Accounts", "ImgUrls");
        }
    }
}
