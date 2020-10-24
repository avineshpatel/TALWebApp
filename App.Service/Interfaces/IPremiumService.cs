using System;
using System.Collections.Generic;
using System.Text;

namespace App.Service
{
    public interface IPremiumService
    {
        decimal GetPremium(int sumInsured, decimal ratingFactor, int age);
    }
}
