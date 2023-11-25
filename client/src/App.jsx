// Importing necessary components from the "./components" directory
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

// Functional component named App
const App = () => (
  // The main container div with a minimum height of the screen
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <div className="gradient-bg-services">
      <Services />
    </div>
    <div className="gradient-bg-transactions">
      <Transactions />
    </div>
    <Footer />
  </div>
);

// Exporting the App component as the default export
export default App;
