using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Data;
using App.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace App.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OccupationController : ControllerBase
    {     
        private readonly ILogger<OccupationController> _logger; 
        private readonly IOccupationService _occupationService;
 
        public OccupationController(ILogger<OccupationController> logger, IOccupationService occupationService)
        {
            _occupationService = occupationService;
            _logger = logger;
        }
 
        [HttpGet]
        public IActionResult GetOccupations()
        {            
            return Ok(_occupationService.GetOccupations());
        } 
    }
}
