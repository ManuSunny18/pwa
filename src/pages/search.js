import Search from "../app/components/search/search";
import defaultLayout from "../app/components/layout/layout";

const routes = [
  {
    path: "/search",
    exact: true,
    component: Search,
    layout: defaultLayout,
    seo: {
        title: "Search",
        description: "Scanned Results of your business",
        keywords: "some,awesome,keywords"
    }
  }
];
export default routes;