import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
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

export default App;
