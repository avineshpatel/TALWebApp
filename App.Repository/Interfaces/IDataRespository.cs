using App.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace App.Repository.Interfaces
{
    public interface IDataRespository
    {
        List<Occupation> GetOccupations();
        List<OccupationRating> GetOccupationRatings();
        OccupationRating GetOccupationRating(string rating);
    }
}
