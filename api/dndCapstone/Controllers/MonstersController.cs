using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Monsters.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MonstersController : ControllerBase
    {
        [HttpGet("{monsterName}")]
        public async Task<IActionResult> Get([FromRoute] string monsterName)
        {
            var monster = await MonsterApiConnection.MonsterCall.GetMonstersAsync(monsterName);
            return new OkObjectResult(monster);
        }
    }
}