# WEB103 Project 3 - *Community*

Submitted by: **Enes Akyuz**

About this web app: **A web application to display, and categorize events according to their locations, with an added countdown feature.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [X] **The web app uses React to display data from the API**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [X] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [X] **The web app displays the title of the app**
- [X] **A visual interface allows the user to select a Location they would like to view**
- [X] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [X] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [X] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [X] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

The following **additional** features are implemented:

- [X] seed.js and testConnection.js is implemented for testing purposes on the backend to healthily test and populate the Railway database.
- [X] Custom styling on the events display so that different picture sizes give dynamic display sizes and the event page looks more natural and responsive.

## Video Walkthrough

Here's a walkthrough of implemented required features:



https://github.com/user-attachments/assets/30c0c866-3178-43c1-a577-fff798cf9406



Recorded with Cap.

## Images from Railway Database
![image](https://github.com/user-attachments/assets/eb6b53f8-ebfa-4f47-b85c-25af4e3d1eaf)
![image](https://github.com/user-attachments/assets/c176c6d6-5b8f-4287-a9e4-cc89895ec83e)
![image](https://github.com/user-attachments/assets/daa5cd89-5ffd-4efa-b9b5-734b6f01e4d0)


## Notes

The main challenge was the locations display because I realized that with the two table structure I had, considering the locations and events table, I needed to write a 3rd call that joined events table with the location table on the location id. Other than this, I needed some time to understand the existing site structure, especially the svg-click routing system confused me a little bit since I have never built an image-click interface before.

## License

Copyright 2024, Enes Akyuz

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
