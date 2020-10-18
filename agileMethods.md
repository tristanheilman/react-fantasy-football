
### What worked
Learning azure and building the necessary services for our web application was easy. We didn't struggle to create our database or construct required tables for the data we wanted to display. 

Constructing the user interface for the application was very esay. We built the app utilizing a React-Express framework to provide a server side rendered application through Azure's App Services.

We also built a function application on the side through Azure. The function app will ping https://sportsdata.io/ APIs to get the current week number for the NFL season. After a successful request, it will ping another API to get all the Wins and Losses or Ties for every NFL team for the given week. We construct sql update statements and execute them all within the function app.

### What did not work
Initially, it took some research and many failed attempts to get a working boilerplate web app up and running on an external website. We had an issue where one of our group members ran out of their student subscription credit. Throughout the development process, there were many bugs that would appear that had to be thought out and addressed.

The first design of our database tables for player point calculation made it difficult since we utilized varchar instead of doubles. The switch made calculations seemless within a SQL query.

Later on in the development process we ran into difficulties persisting user sessions on the website. After a few different tries we found an implementation that worked.

### What improvements can be made
Throughout the development process, we have paid no attention to security. Currently, user passwords are stored in simple varchar datatypes. We could have taken the time to create hashing for passwords to allow for more secure accounts. 