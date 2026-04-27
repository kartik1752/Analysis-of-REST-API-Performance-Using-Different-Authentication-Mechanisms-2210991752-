# 🔐 Analysis of REST API Performance Using Different Authentication Mechanisms

# 👤 Student Details
Name: Kartik
Roll Number: 2210991752
Project Type: Research Paper
Project Mode: Individual (Solo Project)

# 📌 Submission Status
✅ GitHub Repository Created
✅ Source Code Uploaded
✅ JMeter Test Plans Added
✅ Results & Graphs Included
✅ Research Paper Completed
✅ Final Report & PPT Prepared

# 📌 Project Overview

This project evaluates the performance of three authentication mechanisms:

API Key Authentication
JWT (JSON Web Token) Authentication
OAuth 2.0 Authentication

The testing is performed using Apache JMeter to compare:

->Response Time
->Latency
->Throughput
->CPU Usage
->Memory Usage

# ⚙️ Tech Stack
Node.js (Express.js)
Apache JMeter
Postman

# 📁 Project Structure

auth/
┣ Source-Code/
┃ ┣ middleware/
┃ ┃ ┣ apiKeyAuth.js
┃ ┃ ┣ jwtAuth.js
┃ ┃ ┗ oauthAuth.js
┃ ┣ routes/
┃ ┃ ┗ testRoute.js
┃ ┣ jmeter/
┃ ┃ ┣ api-key-test.jmx
┃ ┃ ┣ jwtAuth.jmx
┃ ┃ ┗ oauth.jmx
┃ ┣ results/
┃ ┃ ┣ summary-report.png
┃ ┃ ┣ results-table.png
┃ ┃ ┣ cpu_usage.png
┃ ┃ ┣ memory_usage.png
┃ ┃ ┣ response_time.png
┃ ┃ ┣ latency.png
┃ ┃ ┗ throughput.png
┃ ┣ server.js
┃ ┣ package.json
┃ ┗ README.md
┣ Report/
┃ ┣ Final-Report.pdf
┃ ┗ PPT.pptx
┣ Documents/
┃ ┣ Research-Paper.pdf
┃ ┣ PIE_CIE_Forms.pdf
┃ ┗ Submission_Screenshots/
┗ README.md

# 🚀 How to Run the Project
1️⃣ Install Dependencies
npm install

2️⃣ Start Server
node server.js

Server runs at:
http://localhost:3000

# 🔑 API Endpoints
Authentication	Endpoint
API Key   |	/api-key/data
JWT       |	/jwt/data
OAuth     |	/oauth/data


# 🧪 JMeter Testing Configuration
Threads (Users): 50
Ramp-up Period: 20 seconds
Loop Count: 10

Each authentication method has a separate .jmx test file.


# 📈 Observations
🔹 API Key Authentication
Fastest response time
Lowest latency
Highest throughput
Least CPU and memory usage
🔹 JWT Authentication
Moderate performance
Additional overhead due to token verification
🔹 OAuth 2.0 Authentication
Highest response time and latency
Lowest throughput
Highest resource consumption
📷 Test Results

All screenshots and graphs are available in the /results folder:

Summary Report
Results Table
CPU Usage Graph
Memory Usage Graph
Response Time Graph
Latency Graph
Throughput Graph

# ✅ Conclusion
API Key authentication provides the best performance.
JWT offers a balance between security and performance.
OAuth 2.0 provides strong security but at the cost of higher latency and resource usage.

# 👩‍🏫 Supervisor
Name: Dr. Shikha
Email: shikha.1290@chitkara.edu.in