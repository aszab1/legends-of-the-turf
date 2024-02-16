
![image 91](https://github.com/aszab1/legends-of-the-turf/assets/145586216/86c458b0-766f-4f19-ad3e-ab6ee2474a49)

# ReadMe - Legends of the Turf

**Description**

Legends of the Turf is a full-stack web application, inspired by the Premier League Fantasy Football platform. It allows users to create/ edit / delete a fantasy football team and pick players. 

**Deployment link**

The project was deployed in Heroku, link can be found below: 

[Legends of the Turf](https://legendsofhteturf-ee3b38ecb79b.herokuapp.com/)

**Getting Started/Code Installation**



* Clone or download the repo [here](https://github.com/aszab1/legends-of-the-turf)
* Install dependencies by running npm i in Terminal
* Start the server by npm run server
* Go to frontend folder using cd frontend terminal command
* Run the frontend using npm run start

**Timeframe & Working Team**

This application was built collaboratively in a team of three over the course of 9 days. My teammates were [Ata Abatay](https://github.com/ataabatay) and [Jerrell Boyer](https://github.com/Jerrellbb)

**Technologies Used**

Front-end



* React
* React Router
* JavaScript
* Sass/SCSS
* Bootstrap

Back-end



* Node.js
* Express
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt password hashing

**Brief**

**Technical Requirements: **



* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** 
* **Be deployed online** so it's publicly accessible.

**Necessary Deliverables:**



* A **working app** hosted on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the very beginning of the project

**Planning**

After receiving the brief, we started out by brainstorming different ideas on what we wanted to do for our project. We soon came to realise that football was a common interest, so we decided to replicate the core Fantasy Premier League functionality.

The first phase involved creating a Figma wireframe to visualise the UI flow. This enabled discussions on key features before writing any code.


![HT7SvUBWmkXJLmrwWxgKPRZjwqO26I7PruKaylfp82Ny_tpZWOYh-SeYeIfxt2R5TLo_0rMvEw75IaPWgdIf-Ed4_k3J5NxUa1jKD819KqK5se_arnJR03VwNdebfCwJ4dKSCot5tDT0QU8F9XyP4QQ](https://github.com/aszab1/legends-of-the-turf/assets/145586216/32f60310-9fc6-470f-b348-3e7ef0f5afb2)




![QX38giB13jRtFKdX9OHzqQIR_HWz3fqM0ulw7fS69mfBuXNAh7xUaFfKaHVidAF8VvxiJTzDRprrr6TkAr5mVATBMvjgj35Q0WdN4s-kjhJ1XB90pA1MoUFuHmT017c8QZNApdSbh07dw5I-4ZCV-28](https://github.com/aszab1/legends-of-the-turf/assets/145586216/1ca2813f-77e4-4fa7-8e2b-9a24440ee82b)



We did not use a project management tool, we decided to have stand-ups every morning to align on blockers, prioritise features, and clarify roles and responsibilities. We stayed in constant contact via Zoom, providing real-time updates when pushing code, reviewing merging conflicts, or needing collaborative troubleshooting. Overlapping skill sets allowed for pair programming when beneficial.

**Build/Code Process**

As this was a full-stack application, the team agreed to take a “backend-first” approach led by Node.js and Express.

To initialise, I created the repository and development branch for us to work in, as well as the core file structure. I got the backend server up and running (as per below screenshot), and connected it to the front-end, including installing all the dependencies. 



![oF4NuqMTsGmTYZPBLh2uR1U1yobET0c8qyH0dTvpepRFuPHF9q2u4IZFTUFVidtgObDC69fyYJFZKy03xA9fxpBCJYcCYFoi8CUuHaKxfcgmEHBui6IOdRCRFWXldq2Or1j1adFkz8-wH-7nqelEmWo](https://github.com/aszab1/legends-of-the-turf/assets/145586216/2d8069b8-3136-415a-bdbb-b54be0e7e772)


Endpoints were tested via Insomnia during development to validate functionality before introducing the frontend.

I was in charge of the User Schema, creating the controller for the users, and secureRouter.js.



![Cap-F_0YLqhXxfghjCOC8MX-brvVMpCu3wTWX0uS7HnU4R-x7cFST2_lIUschdtYJXPn02CNnVcwQqdsTaafIjRW92lcybBMi7ITXl6JohUCNB1q-m1SPcmx5dEC42ZSOSxhFuQp29YwN8q204EupK0](https://github.com/aszab1/legends-of-the-turf/assets/145586216/2e9f3326-5531-458f-9c1e-7451f2f688ce)



With a functioning backend in place after 3 days, the frontend work began.

I have created the loading page including the Login and Register functionality and their authentication, the Navigation,  as well as the ‘Typewriter’ for the name of the App. 


![b9ORcR7emzJiuS2qepaUBLxoj2Q08sdF1mCj0cuCq9Yf3xu0ecTOGlb3EWHd9C9_VQH2dBDPBC7dbds7miPH9ShMbDLBqt4ROz2rKZ3dn_9f7PsCWlRnJQHobGZrEyGV2xI7GOwydy-YacIShVv1UWE](https://github.com/aszab1/legends-of-the-turf/assets/145586216/c6b8f08f-67b7-4bc7-aab5-c0d704c7562a)




The App component manages the rendering of different sections based on the current page using React Router. If the user is on the landing page ('/'), it displays a welcome message with login and registration options. Otherwise, it renders the navigation bar, main content, and a loading indicator during navigation transitions. 

 



![rmCtX4nsTOL4R6PRaaqiPIiMOzN4ne1940DrrqharkHrA1EeiazzF2meNIUYe2EChDcXKPC2lWQCpsSruCcMZHT0Q7F7pQ5Qb-6rY9xtXAIpEPcu0mraTMcMDZXIPHHg9UpW52hkf2mOaKidi-bhJys](https://github.com/aszab1/legends-of-the-turf/assets/145586216/3feb86c9-6843-4030-9e84-3f6ad15e704a)

The authentication functionalities for registerUser, loginUser and signoutUser are implemented using Axios to make API request to the back-end: 


![YUUWqruxp3uACtrH8MXzRrMsfWjaIzzRpQb9eNLMXE4Wau-vShbDfOxvZW7VIcOm5tDb6FlFTsB1hYBBChH4lYh21-8BuxSL2R0aoh9zBIz7fDJZAtFYRimm5hGz1XquGsTFWmNhkK9P_mO1DzsnTqU](https://github.com/aszab1/legends-of-the-turf/assets/145586216/ec369b62-7c36-4818-8d85-5b6f42643aed)




Once the user logged in, they navigated the Home page. 



![fr_KQ8CrmO4b1k9XOyk7m97g6DvcNaOC33iHvRsgp-YfJt4GWiNvEBPijQf5vC6QUPsRXMXvLzGkIXQw8tBowy6YA6VI0aCuX3cbmqPtLl24OaYVPdLe9Gz_GCvWXGxQzSsux920WV-BIWa_V-NnYu4](https://github.com/aszab1/legends-of-the-turf/assets/145586216/4a399c69-75e9-4c90-8d8a-fa1b2a8d3e37)


I was in charge of the Homepage too, it includes a navbar, links to different components, sign out functionality, and utilises two live APIs for fixtures and league table information. The Fixtures use the Fantasy Premier League API, while the leagueTable retrieves data from Chelsea Football Club's website.

In helpers / common.js I had to replace the APIs to /rest and /plt as per below screenshot. To avoid CORS issues in production, the API response is also proxied: 



![alFYFDOUJk2aOU7Vttbz8RCk4TibCYCYNuDrO8uZ7mAZmUWVTwEarRVLjJalsVSfuZ8RGVTgYwCRbS931Gtj4zaP29UtxrMGFH0ZU2goAJVud6ix96SrORy3lu3NBo9ixTSFD-2A9CJ2Om4zCjXFbvY](https://github.com/aszab1/legends-of-the-turf/assets/145586216/80c31e7d-7a5c-47d2-b771-8fd3230fc527)



And added it in helpers / loader.js using Axios: 


![P-oQfeFC-D9sohfcDPCdqiohqw9TYv9BHfijaB4r091-AyvWsRBO8SVppvERCE5eUtDbPj8Mv6MBt5x6Yx0hygJCtN6rLhN8CJLzFxZauU-zw5QM_y31wNeqKpHdd_OGGLD6I5iSLm3nzfg_iJvf8SY](https://github.com/aszab1/legends-of-the-turf/assets/145586216/72db839b-e381-487c-a84e-215d6826fe16)




I got inspiration from Google’s fixture and table page to determine the information and layout for the Fixture and LeagueTable components displayed on the Homepage, using Bootstrap to structure the Containers.





![l6Z5nJPjlMckiKOJ6Hn6zGEysN1CUY0_lNaO_axYkI718IdjP9LkwJl_YIVIFkl0d3HEi3g3p2Y0sy1Ymi0-8HjuS2Q1bjE5YgA_XGcssWInkc6F5KW1BKIcbOrNiDtOH-Z374iUd3KqIK037lDFQW4](https://github.com/aszab1/legends-of-the-turf/assets/145586216/9462e470-14c3-4694-ae85-7fadc56a0f6a)





![GIXrjoUzC7M_sIi3AA7tfAy_cSiXifE1uacdpQ8XzgWkAKQQO_V-vq3SA5IZXaTFAqM4lmvq_Tk_nzUG5gPPDsbS-m_RYNQycmww6MW_mGa6bq0CRIYGPza6Cjw-tcXyjjcFylSfC3oQT0p6ECBk4JA](https://github.com/aszab1/legends-of-the-turf/assets/145586216/6db725df-a0c5-4cdd-a71f-69141251a185)

I have also created the ImageUploadfield component which facilitates image uploads for user profiles. It uses Cloudinary to handle image storage and retrieval, allowing users to upload and display images for their team logos.



![dMcVTEdrpD_neyb3knCpL1m8qgCpEfpSjNrc23WgYlD_UN6rVH-PtPNvNSRK1NkKj6e_IUi80kFIimkZ0zlYeOl14QGJzgV--76Z6I8RfZmWYYrJB2T4IICmXrIGzYIaD8zuX84Am4kVQ2ToX2jlJt0](https://github.com/aszab1/legends-of-the-turf/assets/145586216/e72ac1aa-4738-422b-b06a-faca7e46d3aa)


![PvF5C9qJ-SjK3KBOkxbw_WNAUzBoUsxyFZJDOi4qws_60Agp7ghxf2hLPWeEfEmd9Nu6hcuePpZTdui6KSM5mgDpgzlmlMFjzECKKYC7h2VuFYqmTNUCbq-crQQj2T1lS3y-Emj8WTGxAbd38FbScXc](https://github.com/aszab1/legends-of-the-turf/assets/145586216/9d41dff3-c0c3-4abf-89a9-827bdce3ee62)

**Challenges**

One of the main challenges was to get the external APIs working, besides CORS issues, I originally used a /api based URL for both of them, which proved problematic for production builds. Refactoring the requests to route through distinct endpoints enabled the appropriate proxy middleware and request to succeed. 

Another challenge was to get the ImageUploadField to display the image as a team logo, as it originally sent the photo to Cloudinary as a URL but it returned an 'image.png' to MongoDB  so couldn't  use the image to display. Adjusting the form data flow to pass both URL and filename for display solved the issue.


**Wins**

Gaining exposure to building an entire web application - from database modelling though component rendering - was extremely useful and educational. 

I found working as part of the team beneficial, and have learnt a lot from my teammates. 

I am happy with what we’ve achieved in 9 days.

**Future Improvements**



* Implementing user prompts indicating the permissible number of players per position during team selection.
* Creating additional team formation templates, beyond the default 1-4-4-2
* Allowing editing individual players after initial lineup selection 
* Adding point scored management 
* Creating individual player and stats page 
* Making the whole app responsive design

**Bugs**

No obvious bugs
