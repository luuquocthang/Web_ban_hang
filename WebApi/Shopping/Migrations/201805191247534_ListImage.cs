namespace Shopping.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ListImage : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Accounts", "ImgUrl");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Accounts", "ImgUrl", c => c.String());
        }
    }
}
