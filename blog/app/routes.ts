import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/blog/home.tsx"),
    route("blog/:postId", "routes/blog/post.tsx"),
  ]),
] satisfies RouteConfig;
