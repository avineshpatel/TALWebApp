using System.ComponentModel.DataAnnotations;

namespace App.Web.Api.Models
{
    public class GetPremiumRequest
    {
        public int SumInsured { set; get; }
        [Required(ErrorMessage= "OccupationRating is required")]
        public string OccupationRating { set; get; }
        public  int Age { set; get; }
    }
}
