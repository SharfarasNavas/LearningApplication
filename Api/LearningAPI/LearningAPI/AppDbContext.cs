using LearningAPI;
using Microsoft.EntityFrameworkCore;

public class AppDbContext: DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base (options)
    {
    }

    public DbSet<PlayerDetails> PlayerDetails { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PlayerDetails>()
                    .HasKey(p => p.PlayerId);  // Ensure PlayerId is the primary key
    }
}
