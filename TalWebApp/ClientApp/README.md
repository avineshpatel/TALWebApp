# TalWebApp

Notes on assumptions and noted behaviour:

1) Date of birth can only be picked via the datepicker. Future date isn't selectable.
2) Sum insured can only have whole numbers greater than 0
3) For the premium calculation have used this formula (sumInsured * ratingFactor * age) / (1000 * 12) instead of the one given (sumInsured * ratingFactor * age) / 1000 * 12 as both yield different results and the former giving more realistic premium value.
3) As per the requirement the premium is calculated when the occupation dropdown is changed. So in the case where we already have all the fields populated and a premium amount displayed and subsequently if the date of birth or the sum insured changes than the occupation will need to be changed inorder to correctly reflect the premium amount.

Running instructions:

The project can be run via opening the solution in visual studio 2019 and doing a build and running it (The solution is set as MultiStart (App.Web.Api and App.Web)). 
In case multistart isn't retained both the App.Web.Api and the App.Web projects will need to be started.


Things that could be have been added to this to make it more complete:

1) Since this requirement was simple with only 2 entities the repository layer is not connecting to any database. Ideally would have created a generic respository to connect to the database.
2) Authentication and Authorization of calls to the Web.API with token injected with each call from client.
3) The unit test provided is very simple and the coverage isn't as much. Would have added more tests with mocking of the dependencies. 



