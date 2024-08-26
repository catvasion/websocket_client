# WebSocket Client

[Live Demo](https://live-stats-catvasion.netlify.app/)

This project is a simple WebSocket client built as part of a technical test. The client connects to a WebSocket server, receives new data every minute, and displays it in the web browser. The app is created using React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Loading Screen**: When the app first loads, you'll see a loading display until the data is ready.
- **Live Data Updates**: The client connects to a WebSocket and new updates are received every minute.

- **Tabs for Regions**: The app shows tabs for different regions. When you click on a tab, it displays detailed stats for that region.

- **Error Handling**: If something goes wrong and the data can't be sent from the server, an error message will be shown instead.

- **Responsive Design**: The app works well on different devices, whether you're using a phone, tablet, or desktop.

## Tech Stack

- **React**: For building the user interface.
- **Vite**: A tool that makes development faster.
- **TypeScript**: Adds type safety to the code.
- **Tailwind CSS**: A CSS framework to quickly style the app.

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/catvasion/websocket-client.git
   cd websocket-client

   ```

2. **Install the dependencies**:

   ```
   npm install

   ```

3. **Running the App**:
   To start the app in development mode, run:
   ```
   npm run dev
   ```

Thanks for checking out this WebSocket client project!
