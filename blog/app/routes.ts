import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx",
     [index("routes/home.tsx"),
      route("blog", "routes/blog/home.tsx"),
      route("about", "routes/about.tsx"),
      route("contact", "routes/contact.tsx"),
      route("categories", "routes/categories.tsx"),
      route("search", "routes/search.tsx")]),
] satisfies RouteConfig;
