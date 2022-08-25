# Restaurant-project

![README](https://user-images.githubusercontent.com/85176043/183534348-26dbba59-01b1-425f-879a-6e014f59921e.png)



#Restaurant Part 1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Your team is bidding to build some internal software for a trendy new restaurant. In order to get the bid, your team must quickly build a prototype that demonstrates how the orders will look on the restaurant's internal webpage.

Each member of the staff has their own unique style and wants that to be reflected in the orders that they take. As a team, you decide to create a dashboard that shows the tables & orders for each waitstaff. Strangely, the restaurant's waitstaff has the same number of people as your team, so you decide that each developer will research and build the JavaScript for a wait staffer and add a section to the index.html file to display that staff's tables and orders.

1. Plan your application
- Decide on a theme and plan for the application
- Complete a wireframe of the application
- Create a project board with defined tasks
- One member should create the repository and give permission to the rest of the group. Create a single index.html
1. Each member of the group should create their own JavaScript file for the waite staff member they are representing.
2. Each member of the group should add a section to the index.html file to display a list of that staffers’ tables and orders.
    
    Note: expect merge conflicts when you are all working on the index.html and make a plan on how you will resolve them.
    

## Challenges:

Finish your MVP before starting any challenges.

1. Add the concept of orders being complete vs in progress. Keep in mind that the same table can be assigned to two different guests, but only one guest can be the current
2. Add a tip value to each complete order.
- Display the tips on the DOM.
- Display the total of tips on the DOM

 #Restaurant Part 2
 https://dbdiagram.io/d/63010952f1a9b01b0facbfd3
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Congratulations!  The restaurant owners liked your initial site and want to move forward.  They had their “tech friend” look at the code and they have given some suggestions to make the code better.  Also, they are asking that you add some functionality.  

Since they are very excited about this project, they want a way to keep track of how your progress is coming.  The restaurant owners need your team to create a project board with user stories.  Then track your progress and who is completing which task as you complete the work.  The project board should have swim lanes (columns) for Defined, In Progress, In Review and Complete.   The definition of each of these:

Defined: User Stories that are ready to work on and have not been started

In Progress: User Stories that are being worked on, assigned to the person doing the work

In Review: User Stories in which the work is finished and a PR is made, but is not yet merged into the main branch

Complete: Tasks that have been merged into the main branch

The restaurant owners (aka instructors) will be keeping an eye on your project board, so make sure you keep it updated as you finish tasks and start new ones.

### Refactoring:

After looking at your code, the restaurant owners are asking that you make a couple of changes to the code base. 

1. Move all the table/server data to a single file with export function(s).  
2. Create a separate data structure for the servers and link them via an ID.    
3. Each team member should update their server’s page to reflect the new data structure.  This could include using array methods to map, find, filter, etc. data to only display the specific servers tables. 
4. Encapsulate all the logic on each page into functions.  Make sure to remove any global variables.  

### New Features:

If you finish the refactoring and still have time, the owners have requested some additional features.  Please complete these features in order.  Remember, you must make user stories and add them to the defined section on your project board before you begin the coding work.

1. Create a list of all orders/groups a server has served through the evening.  The list should include: the table number, the number of guests, the order, the total bill, and the tip.  Display completed orders on a different page.
2. Create a page to display each server’s stats.  This should include the number of tables each server took care of that shift, the total amount of all bills and the total amount of tips for that server.
3. Add a page for the menu.  The menu should display the item name, description and price.  There should be an id for each menu item, but it is not required to display this on the screen.
4. Refactor the data structure to include the menu item id in the orders data structure and remove the menu item descriptions.  
    1. Carefully plan your data relationships before beginning
    2. Carefully plan how you will update each team mates JavaScript file.  HINT: first include the menuId and update all the JavaScript before removing the menu items from the order data structure.

### Getting started with some user stories.

You need just 1 User Story for these:

1. Move the data structure to it’s own file.  Acceptance Criteria:
    1. The data for all the orders should be in a single file that all team members pull from
    2. There is at least one export method that returns data.
    3. There is a consensus on the data structure returned from this file.
2. Create a separate data structure for the servers 
    1. The data for the servers should be separate from the files (logic) where the functions are
    2. The data structure should contain all information needed about the server and an id property used to link to tables
    3. There is at least one export method to return data about the server
    4. There is a consensus amongst the team about the data structure used.

There should be one of these for each team member:

1. Encapsulate all logic into functions.  Acceptance Criteria:
    1. All logic is encapsulated inside a function (there could be multiple functions)
    2. There are no global variables
    3. The page still loads and works the same as before.
2. Import data from the shared JavaScript file.  Acceptance Criteria:
    1. There is no data structure defined in the JavaScript file which executes the code
    2. The data is returned from the same data object as the other members of your group
    3. The page still loads and works the same as before.
