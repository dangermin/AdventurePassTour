Built an iOS and Android compatible mobile application usinng the Ionic Framework. Adventure Pass is the members only club that makes it easier to rent sports equipment around the world. Nicholas Woodhams, CEO and Founder of Adventure Pass, is also the founder of Kitshare.org, recently acquired by Advntur.com.

Communication: [Trello, Agile/SCRUM]
My co-developer and I held daily standup meetings to discuss the progress of our current sprint. We maintained communication with Mr. Woodhams via phone, email and a backlog on our Trello board. 

Backend technologies: [Node.js, Parse Server, Express.js, MongoDB, Android SDK]
Utilizing Node.js and the Parse SDK, I configured an instance of Parse Server and hosted it on Heroku.com. Parse Server is an open source platform that inherently uses Express.js and MongoDB. It allows token-based log in authentication, preventing users from tampering with the database. Mongo formats data in JSON arrays, which made parsing through the data fast and consistent. I also integrated the SendGrid API to send a welcome email when users sign up.

Frontend technologies: [Ionic, AngularJS, UI Router, Bootstrap, Google API's]
Utilizing the Ionic Framework, AngularJS and UI Routing I created a lightweight platform for users to log-in, find a rental shop near them, submit a rental request, view a history of pending and completed requests, navigate to a selected shop, and edit their public profile. I used Angular factories to handle database queries and maintain separation of concerns. The styling was a combination of built in Ionic directives and a custom CSS file. 

Version control: [git, Heroku]
Utilized GitHub repositories and branches for version control and code collaboration with my partner.
Heroku automatic build and deploy when backend changes are pushed to GitHub master branch.
