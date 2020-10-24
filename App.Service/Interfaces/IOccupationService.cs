using App.Data;
using System;
using System.Collections.Generic;

namespace App.Service
{
    public interface IOccupationService
    {
        List<Occupation> GetOccupations();
        OccupationRating GetOccupationRating(string rating);
    }
}
