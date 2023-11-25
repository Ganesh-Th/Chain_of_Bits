// Functional component for displaying a loading spinner
const Loader = () => (
  // Container with flex layout, centering the loading spinner vertically and horizontally
  <div className="flex justify-center items-center py-3">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700" />
  </div>
);
// Exporting the Loader component for use in other parts of the application
export default Loader;
