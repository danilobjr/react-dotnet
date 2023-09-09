using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Services;

namespace SecurityUpdatesWebApi.Controllers
{
    [Route("updates")]
    [ApiController]
    public class SecurityUpdatesController : ControllerBase
    {
        public readonly DatabaseService _databaseService;

        public SecurityUpdatesController(DatabaseService databaseService)
        {
            _databaseService = databaseService;
        }

        [HttpGet]
        public async Task<List<SecurityUpdate>> Get() =>
            await _databaseService.GetAllAsync();
    }
}
