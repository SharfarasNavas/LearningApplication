using LearningAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class PlayerDetailsController : ControllerBase
{
    private readonly AppDbContext _context;

    public PlayerDetailsController(AppDbContext context)
    {
        _context = context;
    }

    // Get all players
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PlayerDetails>>> GetAllPlayers()
    {
        return await _context.PlayerDetails.ToListAsync();
    }

    // Get a single player by ID
    [HttpGet("{id}")]
    public async Task<ActionResult<PlayerDetails>> GetPlayer(int id)
    {
        var player = await _context.PlayerDetails.FindAsync(id);

        if (player == null)
        {
            return NotFound();
        }

        return player;
    }

    // Create a new player
    [HttpPost]
    public async Task<ActionResult<PlayerDetails>> CreatePlayer(PlayerDetails player)
    {
        try
        {
            _context.PlayerDetails.Add(player);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPlayer), new { id = player.PlayerId }, player);
        }
        catch
        {
            throw;
        }
        
    }

    // Update an existing player
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePlayer(int id, PlayerDetails player)
    {
        if (id != player.PlayerId)
        {
            return BadRequest();
        }

        _context.Entry(player).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PlayerExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // Delete a player
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePlayer(int id)
    {
        var player = await _context.PlayerDetails.FindAsync(id);
        if (player == null)
        {
            return NotFound();
        }

        _context.PlayerDetails.Remove(player);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool PlayerExists(int id)
    {
        return _context.PlayerDetails.Any(e => e.PlayerId == id);
    }
}
