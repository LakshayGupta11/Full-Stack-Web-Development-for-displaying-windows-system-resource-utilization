### Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization
#Full Stack Web Development Project

#This Full Stack Webpage Development project is a comprehensive endeavor aimed at creating a dynamic and user-friendly web application. The primary objective is to develop an intuitive interface for displaying and monitoring real-time Windows system resource utilization metrics. This initiative integrates diverse technologies to collect, store, and present critical system metrics, including CPU usage, memory consumption, disk usage, and network traffic.
-The project encapsulates a multifaceted approach that encompasses both frontend and backend development paradigms. On the backend, Python's psutil library is leveraged to capture detailed system metrics at regular intervals. These metrics are then stored within a MongoDB database, preserving a historical record of the system's performance over time.
-The frontend component of the project entails the creation of an interactive and visually engaging web interface. It incorporates HTML, CSS, Bootstrap, and JavaScript to build a responsive dashboard. The dashboard allows users to specify custom date and time ranges for querying system resource data. Leveraging AJAX requests, the frontend communicates seamlessly with the backend, retrieving and displaying pertinent system metrics based on the user-defined timeframe.
-The architecture facilitates a user-friendly experience, empowering users to analyze system resource utilization efficiently. By inputting specific start and end dates along with corresponding start and end times, users gain access to a detailed tabular representation of system metrics. This includes timestamps, CPU usage percentages, memory utilization, disk usage details, network bytes sent, and received data.
-Moreover, the project aligns with industry-standard practices and principles of full-stack development. It underscores the importance of real-time data visualization and analysis, offering stakeholders valuable insights into the system's performance and aiding in decision-making processes.
-The significance of this project lies in its potential to revolutionize how system administrators and users interact with and comprehend Windows system resource utilization. The interactive dashboard serves as a powerful tool for monitoring and evaluating system performance, providing a comprehensive view of resource utilization patterns over specific time intervals.
-Through this project, the aim is to deliver a robust, user-centric web application that not only showcases technological prowess but also contributes to enhancing the understanding and management of Windows system resources in a user-friendly and accessible manner.

## Built with 🛠️
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://github.com/tomchen/stack-icons/raw/master/logos/bootstrap.svg"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpythonfix.com%2Fpkg%2Fp%2Fpsutil%2Fpsutil-banner.webp&tbnid=bBazbIW-j2HUpM&vet=12ahUKEwjz2Yjqw4iEAxX_TWwGHfTJBLIQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fpythonfix.com%2Fpkg%2Fp%2Fpsutil%2F&docid=tITgzxcEnTffeM&w=1600&h=800&q=symbol%20psutil&ved=2ahUKEwjz2Yjqw4iEAxX_TWwGHfTJBLIQMygAegQIARBP"></code>
<code><img height="30" src="https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fmongodb-logo%2F&psig=AOvVaw1DepjY6_m1ApJYbxSXMaI4&ust=1706821738287000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCND8v8zEiIQDFQAAAAAdAAAAABAE"></code>
<code><img height="30" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bairesdev.com%2Fwp-content%2Fuploads%2F2021%2F07%2FExpressjs.svg&tbnid=tpirjvQ2ntR29M&vet=12ahUKEwjStNrvxIiEAxWsamwGHZLfBWcQMygGegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.bairesdev.com%2Fblog%2Fwhat-is-express-js%2F&docid=HaUSfPxY2SAroM&w=3938&h=2475&q=logo%20express%20js&ved=2ahUKEwjStNrvxIiEAxWsamwGHZLfBWcQMygGegQIARBU"></code>
<code><img height="30" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnextbigtechnology.com%2Fwhat-is-ajax%2F&psig=AOvVaw0iwRzcSPt9zRDbPbMfvKY-&ust=1706821896830000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCChpjFiIQDFQAAAAAdAAAAABAE"></code>

##Technical Learnings
- Full-Stack Development Principles: Understanding the intricacies of both frontend and backend development and their integration into a cohesive web application.

-Working with Real-Time System Metrics: Learning to capture and process real-time system metrics (CPU usage, memory utilization, disk usage, and network traffic) using Python libraries like psutil.

-Database Management: Utilizing MongoDB for storing and managing system metrics efficiently, comprehending NoSQL database principles, and handling database operations.

-AJAX and Asynchronous Operations: Implementing AJAX requests for asynchronous data retrieval, enabling dynamic updates on the webpage without requiring complete page reloads.

-User Interface (UI) and User Experience (UX) Design: Applying HTML, CSS, and Bootstrap to create an intuitive and responsive dashboard, ensuring a seamless user experience.

-Back-End Server Development: Working with Express.js and Node.js for server-side development, routing HTTP requests, and handling data retrieval from the database.

##File Structure Overview:
1. /mongodb/public/index.ejs: The main HTML template file that renders the dashboard interface.
2. /mongodb/public/js/main.js: Contains JavaScript code responsible for handling user interactions and AJAX requests on the dashboard.
3. /mongodb/server.js: The main Node.js server file handling backend logic, database connections, and HTTP routes.
4. /mongodb/app.js: Another Node.js server file, potentially for a different purpose or iteration of the project.
5. /mongodb/system_stats.py: A Python script responsible for collecting Windows system metrics and storing them in a MongoDB database.
6. /mongodb/public/style.css: This file is used to add styles to the webpage containing fonts, tables and forms.

##Working

1.	System_stats python script is run to store the system metrics from the current time and date to the date and time 7 days ago. Metrics are stored for the interval of every 2 minutes including:
a.	CPU usage percentage
b.	Virtual memory usage (RAM)
c.	Disk Usage 
d.	Network Usage
 
![1](https://github.com/LakshayGupta11/Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization/assets/140741956/7764e5db-cfa6-40a6-8dfe-d83bfbf056cc)

2.	Data stored by python script
 
![2](https://github.com/LakshayGupta11/Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization/assets/140741956/aa95e63f-ee68-40c5-be39-a91955c8e393)


3.	Server file is run to run the port on 3000.
 
 ![3](https://github.com/LakshayGupta11/Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization/assets/140741956/adedc1d2-d682-4b8d-950a-6f2ca6224357)


4.	Port 3000 is opened as localhost in browser

![4](https://github.com/LakshayGupta11/Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization/assets/140741956/a571a722-aacf-4f5e-9afc-b1f1311bf833)


5.	Form is filled to enter the details
 
![5](https://github.com/LakshayGupta11/Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization/assets/140741956/0c5eb9e4-dc73-4c0f-8812-ebd8533cb1ba)


6.	Filtered results are displayed.

![6](https://github.com/LakshayGupta11/Full-Stack-Web-Development-for-displaying-windows-system-resource-utilization/assets/140741956/d0b74cf2-cff8-4fa2-8429-39dc03970b20)


##Advantages of this project

-Enhanced System Monitoring and Analysis:
Real-Time Insights: Provides real-time monitoring and analysis of Windows system resource utilization, enabling users to gain immediate insights into CPU usage, memory consumption, disk utilization, and network traffic.

-Granular Data Representation:
Presents detailed metrics in an organized and structured manner, facilitating a comprehensive understanding of system performance over specific time intervals.

-User-Centric Interface:
Intuitive Dashboard: Offers an intuitive and user-friendly dashboard interface, allowing users to select custom date and time ranges to view system metrics, enhancing usability and accessibility.

-Visual Representation:
Visualizes system resource data in a tabular format, making it easier for users to interpret and analyze the performance trends of their Windows systems.

-Operational Efficiency and Decision-Making:
Performance Optimization: Helps in identifying system bottlenecks, inefficiencies, or overutilization of resources, aiding in optimizing system performance and resource allocation.

-Resource Planning:
Facilitates informed decision-making regarding system maintenance schedules, upgrades, or allocation of resources based on historical data and trends.

-Technological and Skill Development:
Skill Enhancement: Provides hands-on experience in full-stack development, database management, data visualization, and backend-server communication, enhancing technical skill sets.

-Understanding System Dynamics:
Fosters a deeper understanding of system dynamics, system resource monitoring, and the significance of real-time data in decision-making processes.

-Practical Applications and Industry Relevance:
Relevance in IT Operations: Highly relevant for system administrators, IT professionals, and organizations requiring efficient system monitoring tools to ensure optimal system performance.

-Educational and Training Purposes:
Serves as an educational tool for students and professionals to understand system resource utilization concepts and practical implementation.

##Future Scopes:
- Additional System Metrics: Expand the scope by incorporating additional system metrics or performance indicators for a more comprehensive system analysis. This might include temperature monitoring, process-specific resource utilization, etc.
- Customizable Visualization: Implement graphical representations (charts, graphs) in addition to tabular formats for visualizing system resource data, providing more insightful and comparative analysis.
- User Authentication and Profiles: Integrate user authentication mechanisms and profiles to offer personalized dashboards, allowing multiple users to monitor specific system resources based on their roles or preferences.
- Alerting Mechanisms: Implement alerting functionalities to notify users or administrators when system resource thresholds are breached or specific conditions are met, enabling proactive management.
- Historical Data Analysis Tools: Develop tools for advanced historical data analysis, trend identification, and forecasting based on stored system metrics, aiding in predictive analytics for system maintenance.
