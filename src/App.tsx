import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import WithReactQuery from "./components/WithReactQuery";
import WithSWR from "./components/WithSWR";
import WithUseEffectFetch from "./components/WithUseEffectFetch";
import WithUseEffectFetchAxios from "./components/WithUseEffectFetchAxios";
import WithUseFetch from "./components/WithUseFetch";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Five Ways to Fetch Data in React</h1>
      <div className="container">
        <WithUseEffectFetch />
        <WithUseEffectFetchAxios />
        <WithUseFetch />
        <WithReactQuery />
        <WithSWR />
      </div>
    </QueryClientProvider>
  );
}

export default App;
