# Personal Blog

A modern, production-ready blog built with React Router, PostgreSQL, Drizzle ORM, and MDX.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📝 MDX for rich blog content
- 🗄️ PostgreSQL with Drizzle ORM
- 📖 [React Router docs](https://reactrouter.com/)

## Production Readiness TODO

### 🗄️ Database & ORM Setup

#### PostgreSQL + Drizzle Integration
- [ ] Install PostgreSQL dependencies (`drizzle-orm`, `postgres`, `drizzle-kit`)
- [ ] Set up database connection configuration
- [ ] Create database schema for:
  - [ ] Users table (id, email, name, avatar, bio, created_at, updated_at)
  - [ ] Posts table (id, title, slug, excerpt, content, author_id, status, published_at, created_at, updated_at)
  - [ ] Categories table (id, name, slug, description, created_at)
  - [ ] PostCategories table (post_id, category_id)
  - [ ] Tags table (id, name, slug, created_at)
  - [ ] PostTags table (post_id, tag_id)
  - [ ] Comments table (id, post_id, author_name, author_email, content, status, created_at)
- [ ] Set up Drizzle migrations
- [ ] Create database seed data
- [ ] Add environment variables for database connection
- [ ] Implement database connection pooling
- [ ] Add database health checks

#### MDX Integration
- [ ] Install MDX dependencies (`@mdx-js/react`, `@mdx-js/loader`)
- [ ] Configure Vite for MDX processing
- [ ] Create MDX components for:
  - [ ] Code blocks with syntax highlighting
  - [ ] Custom headings with anchor links
  - [ ] Image components with optimization
  - [ ] Callout/admonition blocks
  - [ ] Table of contents
- [ ] Set up MDX frontmatter parsing
- [ ] Create MDX content directory structure
- [ ] Add MDX content validation

### 🏠 Home Page (`/`)
- [ ] Replace placeholder content with real blog introduction
- [ ] Add featured posts section
- [ ] Add recent posts preview
- [ ] Add newsletter signup form
- [ ] Add social media links
- [ ] Add blog statistics (post count, categories, etc.)
- [ ] Implement SEO meta tags
- [ ] Add loading states
- [ ] Add error boundaries

### 📝 Blog Page (`/blog`)
- [ ] Connect to database for real posts
- [ ] Implement pagination
- [ ] Add post filtering by category/tag
- [ ] Add post sorting (date, title, popularity)
- [ ] Add search functionality
- [ ] Add post preview cards with:
  - [ ] Featured images
  - [ ] Reading time estimates
  - [ ] Category/tag badges
  - [ ] Author information
- [ ] Implement infinite scroll or "load more" button
- [ ] Add RSS feed generation
- [ ] Add social sharing buttons
- [ ] Implement SEO meta tags

### 📂 Categories Page (`/categories`)
- [ ] Connect to database for real categories
- [ ] Add category post counts
- [ ] Add category descriptions
- [ ] Implement category filtering
- [ ] Add category icons/images
- [ ] Add category-specific RSS feeds
- [ ] Implement SEO meta tags
- [ ] Add category management (admin only)

### 🔍 Search Page (`/search`)
- [ ] Implement real search functionality
- [ ] Add search indexing (consider Algolia or similar)
- [ ] Add search filters (date, category, author)
- [ ] Add search suggestions/autocomplete
- [ ] Add search result highlighting
- [ ] Implement search analytics
- [ ] Add search result pagination
- [ ] Add "no results" suggestions

### 👤 About Page (`/about`)
- [ ] Add real author information
- [ ] Add author photo
- [ ] Add professional bio
- [ ] Add skills/expertise section
- [ ] Add work experience timeline
- [ ] Add education background
- [ ] Add social media links
- [ ] Add contact information
- [ ] Add author's favorite posts section
- [ ] Implement SEO meta tags

### 📧 Contact Page (`/contact`)
- [ ] Implement real contact form functionality
- [ ] Add form validation
- [ ] Add CAPTCHA protection
- [ ] Add email sending (Nodemailer or similar)
- [ ] Add contact form analytics
- [ ] Add auto-response emails
- [ ] Add contact form rate limiting
- [ ] Add spam protection
- [ ] Add contact form success/error states

### 🧭 Navigation & Layout
- [ ] Implement real search functionality in navbar
- [ ] Add newsletter signup modal/form
- [ ] Implement dark mode toggle functionality
- [ ] Add RSS feed link functionality
- [ ] Add social media sharing
- [ ] Add breadcrumb navigation
- [ ] Add mobile menu improvements
- [ ] Add navigation analytics

### 🔐 Authentication & Admin
- [ ] Set up authentication system (NextAuth.js or similar)
- [ ] Create admin dashboard
- [ ] Add post management (CRUD operations)
- [ ] Add category/tag management
- [ ] Add comment moderation
- [ ] Add user management
- [ ] Add analytics dashboard
- [ ] Add backup/restore functionality

### 📊 Analytics & SEO
- [ ] Add Google Analytics
- [ ] Add search console integration
- [ ] Implement structured data (JSON-LD)
- [ ] Add sitemap generation
- [ ] Add robots.txt
- [ ] Add Open Graph meta tags
- [ ] Add Twitter Card meta tags
- [ ] Add canonical URLs
- [ ] Add meta descriptions for all pages

### 🎨 UI/UX Improvements
- [ ] Add loading skeletons
- [ ] Add error boundaries for all pages
- [ ] Add toast notifications
- [ ] Add keyboard navigation
- [ ] Add accessibility improvements (ARIA labels, focus management)
- [ ] Add responsive image optimization
- [ ] Add lazy loading for images
- [ ] Add smooth page transitions
- [ ] Add scroll to top button

### 🚀 Performance & Optimization
- [ ] Implement image optimization (next/image or similar)
- [ ] Add code splitting
- [ ] Add service worker for caching
- [ ] Add compression middleware
- [ ] Add CDN integration
- [ ] Add caching strategies
- [ ] Add performance monitoring
- [ ] Add bundle analysis

### 🔒 Security
- [ ] Add CSRF protection
- [ ] Add rate limiting
- [ ] Add input sanitization
- [ ] Add security headers
- [ ] Add HTTPS enforcement
- [ ] Add content security policy
- [ ] Add SQL injection protection
- [ ] Add XSS protection

### 🧪 Testing
- [ ] Add unit tests for components
- [ ] Add integration tests for API routes
- [ ] Add end-to-end tests
- [ ] Add accessibility tests
- [ ] Add performance tests
- [ ] Add security tests

### 📦 Deployment & DevOps
- [ ] Set up CI/CD pipeline
- [ ] Add environment-specific configurations
- [ ] Add database migrations in deployment
- [ ] Add health check endpoints
- [ ] Add monitoring and alerting
- [ ] Add backup strategies
- [ ] Add rollback procedures
- [ ] Add staging environment

### 📱 Content Management
- [ ] Create content creation workflow
- [ ] Add draft/preview functionality
- [ ] Add content scheduling
- [ ] Add content versioning
- [ ] Add content import/export
- [ ] Add media management
- [ ] Add content templates

### 📈 Growth & Engagement
- [ ] Add comment system
- [ ] Add social sharing buttons
- [ ] Add related posts
- [ ] Add "like" functionality
- [ ] Add reading time estimates
- [ ] Add progress bars for long posts
- [ ] Add newsletter integration
- [ ] Add social media integration

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
