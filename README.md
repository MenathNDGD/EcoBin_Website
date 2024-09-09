# EcoBin - Smart Garbage Management System

## Project Overview
**EcoBin** is an IoT-based innovative solution aimed at revolutionizing waste management practices. The system provides real-time monitoring of garbage bin fill levels, optimizing waste collection routes, reducing operational costs, and minimizing environmental impact. With real-time data, EcoBin helps municipalities and businesses efficiently manage waste disposal and implement smart garbage collection.

## Project Repositories
- **Web Application (Developed by Menath Nadungoda):** [EcoBin Website Repository](https://github.com/MenathNDGD/EcoBin_Website.git)
- **Mobile Application (Developed by Praveen Dilshan Rosa & Thishmi Amaya):** [EcoBin Mobile Application Repository](https://github.com/PraveenRosa2001/EcoBin-Mobile-Application.git)
- **IoT Devices Integration (Developed by Thushara Dilruksha):** [IoT Devices Repository](https://github.com/HacktivistTD/Eco-Bin.git)

## Team Members
- **Menath Nadungoda** (Web Application Development)
- **Praveen Dilshan Rosa** (Mobile Application Development)
- **Thishmi Amaya** (Mobile Application Development)
- **Thushara Dilruksha** (IoT Devices Integration)

## Project Title
**EcoBin - Smart Garbage Management System**

## Problem Statement
We identified several problems in traditional waste management systems:
- Inefficient waste management leading to environmental damage.
- Lack of real-time data on bin fill levels for optimizing collection routes.
- High operational costs due to unnecessary pickups and inefficient routes.
- Low recycling rates and inadequate data on waste generation.
- Unreliable service with missed pickups or overflowing bins, causing pollution and sanitary issues.

## Objectives
EcoBin addresses these challenges with the following objectives:
- **Efficient Garbage Sorting**: Automates the sorting of waste based on sensor detection.
- **Optimized Collection Routes**: Real-time fill level data enables dynamic route planning.
- **Improved Service**: Timely alerts prevent overflowing bins, improving sanitation.
- **Cost Reduction**: Optimized routes reduce fuel consumption, trucks, and manpower.
- **Data-Driven Insights**: Analyze waste generation patterns to optimize waste management.
- **Environmental Impact**: Reduced greenhouse gas emissions through efficient operations.
- **User Engagement**: Notify users about nearby available garbage bins via the mobile app.
- **Reporting & Analytics**: Provide reports for administrators and users on waste disposal patterns.

## Key Features
- **Real-Time Bin Monitoring**: Sensors in the bins provide real-time data on fill levels.
- **Automated Waste Sorting**: Intelligent system sorts waste into paper, plastic, metal, etc.
- **Optimized Collection Routes**: Trucks are directed to pick up only full bins, saving fuel and reducing emissions.
- **Mobile and Web Accessibility**: Monitor bin levels, locate nearby bins, and manage waste disposal via web and mobile apps.
- **User Notifications**: Mobile notifications inform users when their bins will be emptied.
- **Reporting and Analytics**: Weekly or monthly reports are generated for users and administrators.

## Functional Requirements
- User login and logout
- Automated waste sorting
- Real-time bin fill level monitoring
- Dynamic route optimization for collection trucks
- Mobile app for locating nearby bins and receiving notifications
- Historical data access for users and admins

## Non-Functional Requirements
- High accuracy and reliability in waste sorting and monitoring
- Scalability to handle various bin sizes and types
- Power efficiency to minimize energy consumption
- Secure access control and data protection
- Usability with minimal training required
- Cost-effective and environmentally friendly design
- Accessibility features to accommodate all users

## Hardware Requirements
- Intel(R) Core™ i5 – 6200U CPU @ 2.3GHz
- 8.00 GB RAM
- Sensors, ESP 32 devices
- Internet connection and mobile devices (Android/iOS)

## Software Requirements
- Visual Studio Code
- Firebase
- React.js (Web Development)
- Flutter (Mobile Development)
- Arduino IDE (IoT Development)

## Modules
### System Admin:
- User management
- Remote bin monitoring and configuration
- Weekly/monthly report generation
- Location mapping and maintenance

### System User:
- View bin availability and nearest locations
- Historical data access
- Feedback and suggestions for improving waste management

## Proposed System Design
EcoBin implements an IoT-based system with sensor-driven waste classification and smart route planning to improve efficiency. The system:
- Collects and separates waste automatically into different bins (paper, metal, plastic, etc.)
- Provides real-time updates on bin levels for users and admins
- Sends notifications when bins are full or when nearby empty bins are available

# EcoBin - Smart Waste Management System | Web Application | Run The Project

# Project Structure
The project follows a standard React.js structure:

EcoBin_Website/
│
├── public/             # Static files
├── src/                # Application source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   └── App.js          # Main application component
│
├── .gitignore          # Files to be ignored by Git
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
└── ...                 # Other configuration files

## Getting Started

Follow the steps below to set up and run the project locally after cloning the repository.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v12 or later) installed on your machine.
- **npm** (comes with Node.js) or **yarn** installed as the package manager.
- A code editor (such as [Visual Studio Code](https://code.visualstudio.com/)).

### Installation

#### 1. Clone the Repository

To clone the EcoBin project, open your terminal and run:

```bash
git clone git@github.com:MenathNDGD/EcoBin_Website.git
```

```bash
cd EcoBin_Website
```

#### 2. Install Dependencies
To install the necessary project dependencies, run:

```bash
npm install
```

This will install all the packages listed in the package.json file.

### Running the Website

#### 1. Start the Development Server
After the installation, you can start the React development server by running:

```bash
npm start
```
This will launch the development server, and you can view the application by visiting:

```bash
http://localhost:3000
```
The website should now be running locally. If the port 3000 is already in use, you may be prompted to use another port (e.g., 3001).

#### 2. Build for Production
To create an optimized production build of the website, run:

```bash
npm run build
```
or
```bash
npm start
```
This will bundle the app into static files in the build directory, which you can then deploy to any static hosting service.

### Breakdown of Steps:

- **Clone the Repository**: The instructions guide users to clone the repository and navigate into the project directory.
- **Install Dependencies**: Users are directed to install the necessary project dependencies via `npm install`.
- **Run the Website**: The instructions detail how to start the local development server using `npm start` and view the website at `http://localhost:3000`.
- **Build for Production**: Users are shown how to generate a production build with `npm run build`.

This `README.md` should serve as a clear guide for anyone looking to run the website locally.

## Contact Us
For more information about the project, feel free to contact the development team.

---
**Developed by: Menath Nadungoda, Praveen Dilshan Rosa, Thishmi Amaya, and Thushara Dilruksha.**

---
