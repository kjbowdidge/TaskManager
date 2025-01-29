using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using TaskEntity = server.Models.Task;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class TasksController : ControllerBase
{
    private readonly TaskManagerDbContext _context;

    public TasksController(TaskManagerDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetTasks()
    {
        return Ok(_context.Tasks.ToList());
    }

    [HttpPost]
    public IActionResult CreateTask([FromBody] TaskEntity task) 
    {
        _context.Tasks.Add(task);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public IActionResult MarkAsCompleted(int id)
    {
        var task = _context.Tasks.Find(id);
        if (task == null) return NotFound();

        task.IsCompleted = true;
        _context.SaveChanges();
        return Ok(task);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTask(int id)
    {
        var task = _context.Tasks.Find(id);
        if (task == null) return NotFound();

        _context.Tasks.Remove(task);
        _context.SaveChanges();
        return NoContent();
    }
}


