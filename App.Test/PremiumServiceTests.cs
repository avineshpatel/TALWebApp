using App.Service;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace App.Test
{
    [TestFixture]
    public class PremiumServiceTests
    {
        private IPremiumService _premiumService;

        [SetUp]
        public void SetUp()
        {
            _premiumService = new PremiumService();
        }

        [TestCase(-1, 1.25, 40)]
        [TestCase(0, 1.25, 40)]
        [TestCase(100000, 0.25, -1)]
        public void GetPremiumArgumentExceptionTest(int sumInsured, decimal ratingFactor, int age)
        {
            Assert.That(() => _premiumService.GetPremium(sumInsured, ratingFactor, age), Throws.TypeOf<ArgumentException>());
        }

     

    }
}
