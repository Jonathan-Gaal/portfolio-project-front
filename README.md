Greetings and I hope you enjoy Jon's Art Palace
**\_\_\_\_**REPOS****\_\_\_****
https://github.com/Jonathan-Gaal/portfolio-project-back

https://github.com/Jonathan-Gaal/portfolio-project-front
****\_****DEPLOY****\_\_****

https://portfolio-project-deploy-back.onrender.com

https://dashboard.render.com/d/dpg-cfj6s5da49903fi62ntg-a

https://guileless-toffee-4cc033.netlify.app/

USER STORIES

1. As a user I land on a home page and can see a navbar with 2 links, one for home (Jon's Palace of Art) and one to see the full gallery (Gallerie). I can also see a large image, a short intro about the project and a short bio about the developer and a link to navigate to their github and linkedin.

2. As a user I can click the navbar links and be routed to the respective pages: home and gallery

3. As a user when i navigate to the gallerie page, I can see a card of each artwork with a title and category of the piece of art. I can click on each card to be redirected to a show page of that piece of art.

4. As a user when I arrive on the show page of each art piece I can see more details about the piece and also see a button to comment

5. As a user when I click the comment button, a section drops down with a form to input my name and a comment and a submit button.

6. As a user, Underneath the form and submit button is a list of comments, each with a button to delete and edit that comment.

INSTALLATION

frontend installation: _Note_ installation begins with frontend since the react app uses my jonsArt_dev online postrgres database: (https://dashboard.render.com/d/dpg-cfj6s5da49903fi62ntg-a

and server: https://dashboard.render.com/web/srv-cfij531a6gdq1k0ccclg

the address it fetches to in the .env is the server link just above. If you wanted to use a local verson of the server you would need to change the address in .env to http://localhost:3010 and follow the backend installation instructions for setting up a local server below. Info on endpoints are below in said instructions.

backend installation:

1. navigate to a folder on local machine that is NOT a git repository and git clone the backend repo: https://github.com/Jonathan-Gaal/portfolio-project-back into that folder.

2. navigate into the cloned repo and run npm install

3. run command: npm run db:init to install schema

4. run command: npm run db:seed to seed data

5. run command: nodemon server.js to run the local server, and you should see a message in the console informing you that the server is listening and what port it is doing so.

6. endpoints are: "/" to see the welcome message of the server, "/gallery" to see all gallery resources, "/gallery/1" (2, 3 etc.) corresponding to an individual resource id and "/gallery/1/comments to see the comments for that resource.

7. Proceed with frontend install/use...
