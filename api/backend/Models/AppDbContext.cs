using FavoriteMonstersModel;
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext() { }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public virtual DbSet<FavoriteMonsters> FavoriteMonsters { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
