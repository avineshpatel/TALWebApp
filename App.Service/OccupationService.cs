using App.Data;
using App.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace App.Service
{
    public class OccupationService : IOccupationService
    { 
        private readonly IDataRespository _respository;
        public OccupationService(IDataRespository repository)
        {
            _respository = repository;
        }

        public OccupationRating GetOccupationRating(string rating)
        {
            return _respository.GetOccupationRating(rating);
        }

        public List<Occupation> GetOccupations()
        {
            return _respository.GetOccupations();
        }
 
    }
}
