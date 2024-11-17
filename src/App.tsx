import AppRoutes from "./router/routes";
import { ThemeProvider } from "./components/theme-provider";
type Props = {};

const App = (props: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
