using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Data;
using App.Service;
using App.Web.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace App.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PremiumController : ControllerBase
    {      
        private readonly ILogger<PremiumController> _logger;
        private readonly IPremiumService _premiumService;
        private readonly IOccupationService _occupationService;

        public PremiumController(ILogger<PremiumController> logger, IPremiumService premiumService, IOccupationService occupationService)
        {
            _premiumService = premiumService;
            _occupationService = occupationService;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult GetPremium([FromBody] GetPremiumRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            decimal premium = 0;
            OccupationRating rating = _occupationService.GetOccupationRating(request.OccupationRating);
            
            if (rating != null)
            {
                premium = _premiumService.GetPremium(request.SumInsured, rating.Factor, request.Age);
            }
 
            return Ok(premium);
        }
 
    }
}
