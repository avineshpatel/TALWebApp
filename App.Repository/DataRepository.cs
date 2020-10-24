using App.Data;
using App.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace App.Repository
{
    public class DataRepository : IDataRespository
    {
        public OccupationRating GetOccupationRating(string rating)
        {
            return GetOccupationRatings().Where(r => r.Rating == rating).FirstOrDefault();
        }

        public List<OccupationRating> GetOccupationRatings()
        {
            return new List<OccupationRating>()
            {
                new OccupationRating () { Rating = "Professional", Factor = 1.0M },
                new OccupationRating () { Rating = "White Collar", Factor = 1.25M },
                new OccupationRating () { Rating = "Light Manual", Factor = 1.50M },
                new OccupationRating () { Rating = "Heavy Manual", Factor = 1.75M }
            };
        }

        public List<Occupation> GetOccupations()
        {
            return new List<Occupation>()
            {
                new Occupation() { Name = "Cleaner", Rating = "Light Manual" },
                new Occupation() { Name = "Doctor", Rating = "Professional" },
                new Occupation() { Name = "Author", Rating = "White Collar" },
                new Occupation() { Name = "Farmer", Rating = "Heavy Manual" },
                new Occupation() { Name = "Mechanic", Rating = "Heavy Manual" },
                new Occupation() { Name = "Florist", Rating = "Light Manual" }
            };
        }
 
    }
}
