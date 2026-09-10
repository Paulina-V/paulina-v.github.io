import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * GitHub Pages serves static files only, so the whole site is
   * exported to plain HTML at build time.
   *
   * This repo is a user site (paulina-v.github.io), which is served
   * from the domain root — so no basePath or assetPrefix is needed.
   * A project-site repo would need both.
   */
  output: "export",

  /**
   * The image optimizer needs a server, which Pages doesn't provide.
   * Images are served at their original size instead, so keep source
   * files small — public/portrait.jpg is 216KB for this reason.
   */
  images: {
    unoptimized: true,
  },

  /** Emit /about/index.html rather than /about.html, so paths resolve. */
  trailingSlash: true,
};

export default nextConfig;
