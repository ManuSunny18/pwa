import Home from "../app/components/home/home";
import defaultLayout from "../app/components/layout/layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: defaultLayout,
    seo: {
        title: "About Page",
        description: "This is all of the description more than 200 characters",
        keywords: "some,awesome,keywords"
    }
  }
];
export default routes;