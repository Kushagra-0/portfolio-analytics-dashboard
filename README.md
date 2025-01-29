# Portfolio Analytics Dashboard
This project is a Portfolio Analytics Dashboard designed for a fintech platform, similar to Moneyy.ai, where users can monitor their investment strategies and analyze market data. The dashboard includes dynamic charts to display investment performance, key metrics in a card-based layout, and advanced features like ROI, CAGR, and drawdown percentages. It also supports filtering and sorting for users to customize their data view.

## Key Features
* **Dynamic Charts**: Displays investment performance over time, allocation by asset class, and profit/loss per strategy.
* **Key Metrics**: Total portfolio value, daily P&L, win rate, and other financial data displayed in a table or card-based view.
* **Fintech-Specific Features**: ROI, CAGR, drawdown percentages, and recent trade updates.
* **Responsive UI**: The dashboard is responsive and optimized for both desktop and mobile views.
* **Market Updates**: A section to show simulated market updates or recent trades.

## Optional Features
* **Strategy Comparison**: Users can compare the performance of two or more strategies side by side.

## Technologies Used
* **Frontend**: React.js, Vite, TailwindCSS, Recharts for charting
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (for storing simulated financial data)

## Installation and Setup
### Frontend
1. Clone the repository:<br/>
  * `git clone https://github.com/yourusername/portfolio-analytics-dashboard.git`
  * `cd frontend`
2. Install dependencies:
  * `npm install`
3. Run the development server:
  * `npm run dev`
<br/>
The frontend will be available at http://localhost:3000.

### Backend
1. Navigate to the backend folder:
 * `cd backend`
2. Install dependencies:
 * `npm install`
3. Configure environment variables by creating a .env file with the necessary configurations for MongoDB and other services.
4. To start the backend server:
  * `npm run dev`
<br/>
The backend will be available at http://localhost:8080.

### Seeding Database (Dummy Data)
If you want to populate the database with some dummy data for testing:
<br/>
* `npm run seed`
<br/>
This will populate the database with sample investment strategies, portfolio data, and trade records.

### Usage
Once both the frontend and backend servers are running, navigate to http://localhost:3000 to view the dashboard.

* Charts: View investment performance over time.
* Key Metrics: Check the performance of your portfolio (e.g., ROI, CAGR, drawdown).
* Filters: Use the filters to sort and view data based on different criteria (e.g., date range).
* Market Updates: See recent trades or market updates.

## Design Explanation
### Frontend
The frontend is built using React and Vite for fast development and bundling. I chose Recharts for the interactive charts because of its ease of use and integration with React. TailwindCSS was used for styling to quickly build responsive and modern UI components.

**Key UI Components:**
* Charts: Display portfolio performance, asset allocation, and profit/loss using line charts, pie charts, and bar charts.
* Cards: Display key metrics like total portfolio value, daily P&L, and win rate in a visually appealing card format.
* Filters: Enable users to filter the data based on date ranges or sorting by performance metrics.
### Backend
The backend is built using Node.js with Express to handle API requests and MongoDB to store the financial data. I used Mongoose to interact with the MongoDB database and provide a simple interface for CRUD operations on the financial data.

## Fintech Concepts Demonstrated
* ROI (Return on Investment): Calculated the ROI based on portfolio performance.
* CAGR (Compound Annual Growth Rate): Used to calculate the average annual growth rate of the portfolio over a period.
* Drawdown: Displayed the drawdown percentage, which is the reduction in value from the portfolio's peak.
* Future Improvements
* Authentication: Implement user authentication so users can save and track their portfolio data.
* Strategy Comparison: Allow users to compare the performance of multiple strategies side by side.
* Real-Time Data: Integrate real-time market data using APIs from financial data providers.

## Conclusion
This project showcases my ability to build scalable web applications while understanding key fintech concepts. I focused on making the dashboard both functional and visually appealing, ensuring it provides real-time data insights in an intuitive way.
