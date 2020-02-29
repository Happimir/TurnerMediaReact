# React Title Search

- Update the MongoConnectionString in the appsettings.json file to be the correct connection string
- Then do `dotnet build` 
- After that is done, in the terminal hit `dotnet run`
- - If the browswer window doesn't appear right off the bat, go to http://localhost:5000/ I decided with the http route as cloning it on my other machine
    results in socket exceptions due to access permissions, so this should be less prone to error. 
--  If https is desired, then just update the following line to Properties/launchSettings.json to be 
    `"applicationUrl": "https://localhost:5001;http://localhost:5000""

# How To Use The App

- The search bar will dynamically update the left pane with movies whose title name matches the search criteria. In this case match being that it contains that substring
- `View Details` button will bring up the details for the movie on the right pane, details such as awards, other names in different markets, etc.
- The `View Participants` button will bring up a table of participants on the right hand side, if details are open it will hide them and vice versa. The table has pagination support on the bottom, so just scroll down and go through them. In case where the next pagination would return no more elements, it will just return the whole array starting from index 0