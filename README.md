AIQE GitHub UI and API Automation Framework
Project Overview
This project implements a GitHub UI and API Automation Framework using Playwright and TypeScript.

The framework demonstrates:

UI Automation
API Automation
Page Object Model (POM)
BasePage Design Pattern
API Service Layer
Configuration Management
Test Data Management
Integrated UI and API Validation
Responsible AI Practices
Application Under Test
UI
https://github.com

API
https://api.github.com

Project Structure
aiqe-github-capstone
│
├── config
│   └── env.ts
│
├── src
│   ├── pages
│   │   ├── BasePage.ts
│   │   ├── GitHubHomePage.ts
│   │   ├── ProfilePage.ts
│   │   └── RepositoryPage.ts
│   │
│   ├── services
│   │   └── GitHubService.ts
│   │
│   └── utils
│       └── DataUtil.ts
│
├── testdata
│   ├── uiData.json
│   └── apiData.json
│
├── tests
│   ├── ui
│   ├── api
│   └── integrated
│
├── .env
├── .env.example
├── .gitignore
├── playwright.config.ts
└── README.md
Implemented UI Scenarios
UI Scenario 1
GitHub Home Page Validation

Validations:

Page Title
GitHub Landing Page Accessibility
UI Scenario 2
Public User Profile Validation

Validations:

Username
Profile URL
Repository Section Visibility
UI Scenario 3
Repository Validation

Validations:

Repository Name
Repository Owner
Repository URL
Code Tab Visibility
Implemented API Scenarios
API Scenario 1
Get Authenticated User

Endpoint:

GET /user
Validations:

Status Code
Login
User ID
Content Type
API Scenario 2
Get Repository Details

Endpoint:

GET /repos/{owner}/{repo}
Validations:

Repository Name
Owner
Full Name
Default Branch
Repository URL
API Scenario 3
List User Repositories

Endpoint:

GET /user/repos
Validations:

Status Code
Response Array
Repository Count
Capstone Repository Existence
Integrated UI and API Scenario
Workflow:

API: Retrieve Repository Details

↓

Capture Repository Information

↓

UI: Open Repository Page

↓

Validate Repository Name

↓

Validate Repository URL

This demonstrates API and UI correlation.

Framework Components
BasePage
Provides reusable page actions such as:

Navigation
URL Handling
Screenshot Support
Page Object Model (POM)
Separates:

Test Logic
Page Interactions
Locators
Service Layer
Centralizes API communication:

Authentication
Request Execution
Response Handling
Configuration Management
Managed through:

.env
config/env.ts
Environment Variables
Create a .env file:

GITHUB_UI_BASE_URL=https://github.com
GITHUB_API_BASE_URL=https://api.github.com
GITHUB_USER_ID=your_username
GITHUB_TOKEN=your_github_pat
GITHUB_TEST_REPO=aiqe-github-capstone
Important:

Do not commit .env
Do not expose GitHub Personal Access Tokens
Installation
Install dependencies:

npm install
Install Playwright browsers:

npx playwright install
Test Execution
Run Complete Suite:

npx playwright test
Run UI Tests:

npm run test:ui
Run API Tests:

npm run test:api
Run Integrated Tests:

npm run test:integrated
Run Specific Test:

npx playwright test tests/api/userApi.spec.ts
Generate Report:

npx playwright show-report
Reporting
Framework supports:

Playwright HTML Report
Screenshots on Failure
Trace Collection
Responsible AI
This project follows:

Generate → Review → Validate → Use

Principles:

AI-generated code reviewed before use
No secrets shared with AI
Human validation performed before implementation
Security and maintainability reviewed
Security Considerations
GitHub Token stored only in .env
.env excluded using .gitignore
No secrets committed to source control
Least-privilege access applied to GitHub PAT
Future Enhancements
Repository Creation API
Repository Cleanup API
Screenshot Utility
Custom Reporting
GitHub Actions CI/CD
Allure Reports
Multi-Environment Support
Author
Malay Saha

AIQE Final Capstone Project

Playwright + TypeScript + GitHub UI/API Automation Framework