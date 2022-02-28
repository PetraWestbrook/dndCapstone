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
        [HttpGet]
        public async Task<IActionResult> GetMonster()
        {
            var monster = await MonsterApiConnection.MonstersCall.GetMonsterListAsync();
            return new OkObjectResult(monster);
        }
        [HttpGet("{monsterName}")]
        public async Task<IActionResult> GetByMonsterName([FromRoute] string monsterName)
        {
            var monster = await MonsterApiConnection.MonsterCall.GetByMonsterNameAsync(monsterName);
            return new OkObjectResult(monster);
        }
    }
}