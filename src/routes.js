import {configureRoutes} from "react-pwa/src/utils/bundler";
// routes
import * as Home from "./pages/home";
import * as Search from "./pages/search";
export default configureRoutes([
  Home,
  Search
]);