# Olympics
Problem: Who won gold medals in the Olympics? Silver? Bronze? Who won the most medals? Which winter events did athletes compete? Olympics Medal Tracker answers these questions. We asked ourselves how can a user quickly discover the medal winners? Well, now there's an app for that! We wanted a "birds-eye-view" of the Olympics on a country level so we decided a map would give us the best overview of the results. Most existing online medal tracking tools are not as straightforward as a map. We found existing medal trackers quite cumbersome. You really have to dig deep into a table, or a graph. Furthermore many simply aren't user friendly, and they don't provide as much information as quickly as OMT. 

Solution: We obtained the medal count from sportsradar api and imported the JSON for our medal data.  We used Google maps and Materialize for UI/display and wrote Javascript logic for the medal-count markers. On clicking a country, a modal opens showing countries data: country, medal count, and event of the medal. We divided the maps by medal and put markers on the countries so one can see at a glance by country the gold, silver, and bronze medal awards.

Improvements: We would eventually like to get more data to display in the modal, perhaps athlete name, pictures, video of event, etc. We also would like to broaden the scope to cover more sporting events. This would make OMT the goto site for sports events statistics. There is much repetition in the source code and we would like to refactor the code to be more streamlined. 

Summary: This was an extremely fun project to code. It enabled us to deploy much of the knowledge gained thus far, and showed us where we need improvement. Programming OMT also provided us with a great experience in collaborative programming on Github.

Built Using: HTML, CSS, Javascript, Materialize, Node.JS, MySQL, Sequelize, & Heroku

# Screen Shots

![title](https://user-images.githubusercontent.com/27470842/36926025-7e0dffc4-1e2a-11e8-98c2-f09ddbcac661.PNG)
![gold1](https://user-images.githubusercontent.com/27470842/36926039-8ff005de-1e2a-11e8-9254-206debe6731c.PNG)
![silver](https://user-images.githubusercontent.com/27470842/36926051-9897124a-1e2a-11e8-9be1-f098276bc8a2.PNG)
![modal](https://user-images.githubusercontent.com/27470842/36926153-1ae33c10-1e2b-11e8-9d84-7ff318e4859a.PNG)
