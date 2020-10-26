using System;
using System.Collections.Generic;
using System.Text;

namespace App.Service
{
    public class PremiumService : IPremiumService
    {
        public PremiumService() {}
        public decimal GetPremium(int sumInsured, decimal ratingFactor, int age)
        {
            if (sumInsured <= 0) throw new ArgumentException("Sum insured has to be greater than 0");
            if (age < 0) throw new ArgumentException("Age has to be greater than equal to 0");

            return (sumInsured * ratingFactor * age) / (1000 * 12);
        }

       
    }
}
