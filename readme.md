# Cloud Computing Midterm Project

*Authors: Tristan Heilman, Ryan Gruss, Sean Hearne*

## Project Abstract

Fantasy Football is an extremely popular game that is played my millions of people around the world.   Fantasy football is a game where you can create your own football team and compete with other Participants such as yourself based on your teams’ statistics from week to week.   Fantasy football Participants engage in competitive leagues, accruing "fantasy points" based on the statistics of real football players. The vast majority of leagues are scored on a weekly basis, matching up teams in a head-to-head scenario in a rotating schedule.

The Fantasy football programs can be complicated.  For the mid-term group program, we will create a webpage using Azure Cloud Services. The goal is to collect the most productive players across a variety of positions.  For simplicity, the Web Application should have a login page for Participants, ask the Participants to fill out the starting roster with a quarterback, two running backs, two wide receivers and one tight end, and check where they stand in the League from week to week.  

We will also keep the scoring system simple for the mid-term. Points are based on the actual performances of the NFL player's Team win or loss in the real-world competition. If the team the NFL player wins the game, each player drafted gets 1 point.  If the Team of the NFL player drafted loses, participant does not get any points.

The relevant statistics for each player should be gathered from the publicly accessible website, e.g. [Sports Reference](http://www.sports-reference.com), and be divided into four main positions that consist of quarterbacks, running backs, wide receivers, and tight ends. The table should be sortable by columns and also contains a search function that allows users to quickly find a specific player that allows for easy access to player statistics and fantasy football point projections.

## Requirements

1. Give a cool team name to your Project team of 3 (or less) and select a lead. (Points: 1).
2. Use Agile development methodology for development effort and provide a short write-up on i. what worked, ii. what did not, iii. What improvements can be made. (No more than 300 words). Google search “Agile Retrospective” for information. (Points: 3).
3. Create a data store / database in Azure of your choice and load relevant statistics for a minimum of 10 NFL players each for each quarterback, running back, wide receiver, and tight end: (Azure SQL, PostgreSQL, MySQL, Mongo DB, Azure Storage Account etc.) See  [Sports Reference](http://www.sports-reference.com) to ger the Stats. (Points: 3).
4. Launch / configure Web server in Azure (any platform accepted but should be accessible through the internet). (Points: 2)
5. Design an interactive web page to do the following:
6. Create a Registration page for Participants and store it in an Azure data store or database: (Points: 1)
    6a. Username
    6b. Password
    6c. Email
7. Login page to for Participants to authenticate once registered.  Should ask for username and password to retrieve user information (Points: 1)
8. Ability for Participants to fill out the starting roster with a quarterback, two running backs, two wide receivers and one tight end (Points: 2)
9. Ability to see relevant Statistics for quarterbacks, running backs, wide receivers and tight ends from data collected in Question 3.  The table should be sortable by columns and also contains a search function that allows users to quickly find a specific player that allows for easy access to player statistics and fantasy football point projections.  (Points: 3)
10. A Simple scoring system check where they stand in the League from week to week. Points are based on the actual performances of the NFL player's Team performance in the real-world competition. If the team the NFL player win the game, each player drafted gets 1 point.  If the Team of the NFL player drafted loses, participant does not get any points. Please use the data from 2019/2020 season  (Last Year) to get the win/loss for each team.  (Points: 4)

## Dev Enviornment Setup

1. Download/Clone this git repository somewhere accessible by your command line
2. `cd` into the downloaded folder `/react-fantasy-football`
3. Run `npm install` to download the necessary npm modules. After they are installed you will see a new folder named `/node_modules/`

Note: If you do not have npm downloaded and installed, I suggest going to this link -> (Download NodeJS/NPM)[https://nodejs.org/en/]

4. To start up the Express server all you have to do is run `npm start`
5. Open up your browser and navigate to localhost:3000



