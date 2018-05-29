namespace Shopping.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Code : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Accounts", "Code", c => c.String());
            AddColumn("dbo.Accounts", "Name", c => c.String());
            AddColumn("dbo.Accounts", "ImgUrl", c => c.String());
            AddColumn("dbo.Accounts", "Category", c => c.String());
            AddColumn("dbo.Accounts", "Price", c => c.Int(nullable: false));
            AddColumn("dbo.Accounts", "Description", c => c.String());
            AddColumn("dbo.Accounts", "Level", c => c.Int(nullable: false));
            AddColumn("dbo.Accounts", "UserName", c => c.Int(nullable: false));
            AddColumn("dbo.Accounts", "PassWord", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Accounts", "PassWord");
            DropColumn("dbo.Accounts", "UserName");
            DropColumn("dbo.Accounts", "Level");
            DropColumn("dbo.Accounts", "Description");
            DropColumn("dbo.Accounts", "Price");
            DropColumn("dbo.Accounts", "Category");
            DropColumn("dbo.Accounts", "ImgUrl");
            DropColumn("dbo.Accounts", "Name");
            DropColumn("dbo.Accounts", "Code");
        }
    }
}
