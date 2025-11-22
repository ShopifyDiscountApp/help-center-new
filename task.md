I need you to build a complete, production-ready articles/help center website for my product called "Optionify". Here are the requirements:

## Project Overview
- Website URL: help.optionify.co
- Purpose: Help center and articles website for Optionify (a SaaS product)
- Tech Stack: Next.js 14 (App Router) + MDX + Tailwind CSS
- Hosting: Vercel (free tier)
- Requirements: Must be 100% free, SEO-optimized, and fast

## What Optionify Does
Optionify is a [SİZİN APP-INIZIN NƏ ETDİYİNİ BURA YAZIN - məsələn: "task management tool" və ya "AI-powered analytics platform" və s.]

## Your Tasks

### 1. Create Complete Project Structure
Build a fully functional Next.js 14 project with:
- Modern, clean UI using Tailwind CSS
- Responsive design (mobile-first)
- Dark mode support
- Fast loading times
- SEO optimized

### 2. Write 10 High-Quality Articles
Create 10 comprehensive articles about Optionify covering:
- Getting Started Guide
- How to create an account
- Key features overview
- Advanced tips and tricks
- Common troubleshooting issues
- Best practices
- Integration guides
- FAQ
- Pricing and plans explanation
- Use cases and examples

Each article should:
- Be 800-1500 words
- Include proper headings (H2, H3)
- Have code examples where relevant
- Include a table of contents
- Be written in clear, professional English
- Be SEO-optimized with proper meta descriptions

### 3. Implement Key Features
- Homepage with article categories
- Article listing page with search
- Individual article pages with:
  - Table of contents (auto-generated)
  - Reading time estimate
  - Last updated date
  - Related articles section
  - Breadcrumb navigation
- Fully responsive navigation
- 404 page
- Sitemap.xml (auto-generated)
- robots.txt

### 4. SEO Optimization
Implement:
- Proper meta tags (title, description, OG tags)
- Structured data (JSON-LD for articles)
- Fast Core Web Vitals scores
- Semantic HTML
- Image optimization
- Sitemap generation

### 5. Create Deployment Documentation
Write comprehensive documentation covering:
- How to run locally (step by step)
- How to deploy to Vercel (detailed guide)
- How to add custom domain (help.optionify.co)
- How to add new articles in the future
- How to customize styling
- Common troubleshooting

### 6. Project Structure
Organize the project like this:
help-optionify/
├── app/
│   ├── page.tsx (homepage)
│   ├── articles/
│   │   ├── page.tsx (articles list)
│   │   └── [slug]/page.tsx (article detail)
│   ├── layout.tsx
│   └── not-found.tsx
├── content/
│   └── articles/ (all MDX articles here)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── TableOfContents.tsx
│   └── SearchBar.tsx
├── lib/
│   └── articles.ts (helper functions)
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md (deployment docs)

## Deliverables

Please provide:

1. **Complete source code** - All files in artifacts, properly organized
2. **10 ready-to-publish articles** - Written in MDX format
3. **Deployment guide** - Step-by-step instructions in README.md
4. **Setup instructions** - How to run locally
5. **Customization guide** - How to modify colors, add articles, etc.

## Design Preferences
- Clean, modern, minimal design
- Color scheme: Professional blues and whites (you can suggest a palette)
- Typography: Clear and readable
- Inspiration: Similar to Vercel docs, Linear docs, or Stripe docs style

## Important Notes
- Make it production-ready, not a prototype
- Code should be clean and well-commented
- No placeholder content - write real, useful articles
- Optimize for performance (Lighthouse score 90+)
- Make it easy for me to add new articles later

## Questions to Answer First
Before you start building, please tell me:
1. What additional information do you need about Optionify to write accurate articles?
2. Do you have any suggestions to improve the structure or features?

After I provide any missing information, please build the complete website with all files and documentation.

🔧 Bunu Customize Etməlisiniz:
"What Optionify Does" bölməsində sizin app-ınızın nə etdiyini yazın. Məsələn:
Optionify is a Chrome extension that helps users find and compare products 
across different e-commerce websites. It provides price tracking, 
comparison tools, and deal alerts.
və ya
Optionify is a project management tool that uses AI to automatically 
organize tasks, predict deadlines, and optimize team workflows.

📋 Əlavə Təlimatlar (Lazım olarsa):
Əgər daha spesifik şeylər istəyirsinizsə, prompta əlavə edin:
## Additional Requirements (OPTIONAL)

- Add a newsletter subscription form
- Include analytics (Google Analytics or Plausible)
- Add a feedback widget on each article
- Create a resources/downloads section
- Add video embed support in articles
- Include a changelog page

🎯 Necə İstifadə Edəcəksiniz:

Yuxarıdakı promptu kopyalayın
"What Optionify Does" hissəsini doldurun
Claude.ai-ə yapışdırın
Claude sizə suallar verəcək - cavablandırın
Claude full proyekt yaradacaq - hər şey artifacts-də olacaq
Download edin və local-da run edin


💡 Pro Tip:
Əgər Claude ilk dəfə hər şeyi verməsə, belə yazın:
Please provide all the files one by one in separate artifacts. 
Start with the package.json and project setup files.

İstəyirsiniz indi bu promptu Claude-a verək və test edək? Və ya əvvəlcə Optionify haqqında məlumat verin, mən promptu tam doldurum? 🚀RetryEokay gel. articleler haqqinda da ona melumat verek.Assign types.
1. all products
2. tags
3. collections
4. invidual productsOption types
1. text
2. textarea
3. radio
4. switch
5. checkbox
6. dropdown
7. image
8. datepicker
9 email
10 number
11.color dropdownolaraq articlelerde daha sonradan mene image yerleshdire bilmeyim ucun yerler qoysunShow more2 / 2Əla! İndi tam prompt hazırlayaq. Optionify haqqında artıq aydındır - bu Shopify app-ıdır ki, product option-lar əlavə edir.

markdownI need you to build a complete, production-ready help center website for my Shopify app called "Optionify". Here are the requirements:

## Project Overview
- Website URL: help.optionify.co
- Purpose: Help center and documentation website for Optionify Shopify App
- Tech Stack: Next.js 14 (App Router) + MDX + Tailwind CSS
- Hosting: Vercel (free tier)
- Requirements: Must be 100% free, SEO-optimized, and fast

## What Optionify Does

Optionify is a Shopify app that allows merchants to add custom product options to their products. 

### Key Features:

**Assign Types** (Where options can be assigned):
1. All Products - Apply options globally to all products
2. Tags - Apply options to products with specific tags
3. Collections - Apply options to products in specific collections
4. Individual Products - Apply options to specific products

**Option Types** (11 different input types):
1. Text - Single line text input
2. Textarea - Multi-line text input
3. Radio - Radio button selection
4. Switch - Toggle switch (on/off)
5. Checkbox - Multiple checkboxes
6. Dropdown - Select dropdown menu
7. Image - Image upload/selection
8. Date Picker - Calendar date selection
9. Email - Email input field
10. Number - Numeric input
11. Color Dropdown - Color picker/selector

### Use Cases:
- Add custom text engraving options
- Offer gift wrapping with additional cost
- Let customers upload custom images
- Collect delivery date preferences
- Add personalization fields (names, messages)
- Create product variants without using Shopify variants
- Collect special instructions

## Your Tasks

### 1. Create Complete Project Structure
Build a fully functional Next.js 14 project with:
- Modern, clean UI using Tailwind CSS (inspired by Shopify Polaris design system)
- Responsive design (mobile-first)
- Dark mode support
- Fast loading times (Lighthouse 90+)
- SEO optimized
- Easy-to-navigate sidebar with categories

### 2. Write 12-15 Comprehensive Articles

Create detailed articles covering:

**Getting Started (3 articles):**
1. "Getting Started with Optionify" - Installation, first setup, overview
2. "Creating Your First Product Option" - Step-by-step tutorial
3. "Understanding Assign Types" - Detailed explanation of all 4 assign types

**Option Types Guide (11 articles - one for each type):**
4. "How to Use Text Options" - Use cases, examples, settings
5. "How to Use Textarea Options" - When to use, character limits, examples
6. "How to Use Radio Button Options" - Creating radio groups, pricing
7. "How to Use Switch Options" - Binary choices, styling
8. "How to Use Checkbox Options" - Multiple selections, validation
9. "How to Use Dropdown Options" - Creating dropdowns, conditional logic
10. "How to Use Image Upload Options" - File types, size limits, preview
11. "How to Use Date Picker Options" - Date ranges, blackout dates
12. "How to Use Email Options" - Validation, formatting
13. "How to Use Number Options" - Min/max values, decimals, currency
14. "How to Use Color Dropdown Options" - Color presets, hex codes

**Advanced Topics:**
15. "Advanced: Conditional Logic & Dependencies" - Show/hide options based on selections
16. "Pricing & Variants" - Adding extra costs to options
17. "Troubleshooting Common Issues" - FAQ and solutions

**Each article must:**
- Be 1000-2000 words
- Include proper H2, H3 headings
- Have **image placeholders** with descriptive alt text like:
```
  ![Screenshot of Optionify dashboard showing option types](./images/dashboard-option-types.png)
```
- Include step-by-step instructions with numbered lists
- Have code examples where relevant (liquid code, JSON settings)
- Include "💡 Pro Tips" callout boxes
- Include "⚠️ Important Notes" warning boxes
- Have a "Related Articles" section at the end
- Be written in clear, beginner-friendly English
- Be SEO-optimized with proper meta descriptions
- Include a table of contents (auto-generated)

### 3. Image Placeholder System

For each article, add **5-8 image placeholders** strategically placed:
- After major section headings
- In step-by-step tutorials (one per step)
- For UI screenshots
- For before/after examples

Use this format:
```markdown
![Descriptive alt text here](./images/article-slug/image-name.png)
*Caption: Brief description of what the image shows*
```

Create an organized image structure:
```
public/
  images/
    articles/
      getting-started/
        dashboard.png
        install-app.png
      text-options/
        text-input-example.png
        text-settings.png
```

### 4. Implement Key Features

**Homepage:**
- Hero section with search bar
- Featured articles (3-4 cards)
- All categories displayed as cards
- Quick links section

**Article Listing Page:**
- Grid/list view of all articles
- Filter by category
- Search functionality (client-side)
- Sort by: newest, popular, A-Z

**Individual Article Pages:**
- Breadcrumb navigation
- Auto-generated table of contents (sticky on desktop)
- Reading time estimate
- Last updated date
- "Was this helpful?" feedback buttons
- Related articles section (3 articles)
- Previous/Next article navigation
- Copy code button for code blocks
- Image zoom on click

**Additional Pages:**
- 404 page (helpful, with search)
- Search results page
- Category pages

**Navigation:**
- Sticky header with search
- Collapsible sidebar with categories
- Mobile-friendly hamburger menu
- Footer with links

### 5. SEO Optimization

Implement:
- Proper meta tags (title, description, OG tags, Twitter cards)
- Structured data (JSON-LD for articles, BreadcrumbList, Organization)
- Auto-generated sitemap.xml
- robots.txt
- Fast Core Web Vitals scores
- Semantic HTML5
- Image optimization (Next.js Image component)
- Internal linking between articles

### 6. Project Structure
```
help-optionify/
├── app/
│   ├── page.tsx (homepage)
│   ├── articles/
│   │   ├── page.tsx (all articles)
│   │   ├── [slug]/
│   │   │   └── page.tsx (article detail)
│   │   └── category/
│   │       └── [category]/page.tsx
│   ├── search/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── content/
│   └── articles/
│       ├── getting-started.mdx
│       ├── text-options.mdx
│       └── ... (all articles)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── article/
│   │   ├── ArticleCard.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── RelatedArticles.tsx
│   ├── ui/
│   │   ├── SearchBar.tsx
│   │   ├── CategoryCard.tsx
│   │   └── Callout.tsx (for tips/warnings)
│   └── MDXComponents.tsx
├── lib/
│   ├── articles.ts (get articles, metadata)
│   └── search.ts (search logic)
├── public/
│   └── images/
│       └── articles/
│           └── (organized by article)
├── types/
│   └── article.ts
├── next.config.mjs
├── tailwind.config.ts
├── package.json
└── README.md
```

### 7. Create Comprehensive Documentation

Write detailed README.md covering:

**Local Development:**
- Prerequisites (Node.js version)
- Installation steps
- Running locally
- Adding new articles
- Adding images to articles
- Customizing styles

**Deployment:**
- Step-by-step Vercel deployment
- Environment variables (if any)
- Custom domain setup (help.optionify.co)
- DNS configuration

**Content Management:**
- How to write new articles
- MDX syntax guide
- Image optimization tips
- SEO checklist for new articles

**Customization:**
- Changing colors/branding
- Modifying navigation
- Adding new categories

**Troubleshooting:**
- Common errors and solutions
- Build issues
- Deployment problems

## Design Requirements

**Color Scheme:**
- Primary: Shopify green (#95BF47) or modern blue
- Background: Clean white/light gray
- Dark mode: Dark gray backgrounds with high contrast
- Accent colors for callout boxes (info, warning, success)

**Typography:**
- Headings: Clear, bold sans-serif (Inter or similar)
- Body: Readable serif or sans-serif (16px base)
- Code: Monospace with syntax highlighting

**Components:**
- Callout boxes for tips (💡), warnings (⚠️), info (ℹ️)
- Code blocks with copy button and language label
- Image captions in italic
- Responsive tables
- Styled lists and quotes

**Inspiration:**
- Shopify Help Center
- Stripe Docs
- Linear Docs
- Vercel Docs

## Additional Features

1. **Search:**
   - Client-side fuzzy search
   - Search in titles, descriptions, and content
   - Keyboard shortcut (Cmd/Ctrl + K)

2. **Callout Components:**
```mdx
   <Tip>
   This is a helpful tip for users
   </Tip>
   
   <Warning>
   Important: This might cause issues
   </Warning>
```

3. **Code Blocks:**
   - Syntax highlighting
   - Copy to clipboard button
   - Language label
   - Line numbers (optional)

4. **Feedback System:**
   - "Was this helpful? Yes/No" buttons
   - Log to console (can integrate analytics later)

## Deliverables

Provide everything in artifacts:

1. **package.json** - All dependencies
2. **All configuration files** (next.config, tailwind.config, tsconfig)
3. **Complete app/ directory** - All pages and layouts
4. **All components/** - Every component file
5. **12-15 complete MDX articles** - In content/articles/
6. **lib/ files** - Helper functions
7. **README.md** - Full documentation
8. **globals.css** - All styles
9. **types/** - TypeScript types

## Important Requirements

✅ Production-ready code (no TODOs or placeholders)
✅ Real, useful article content (not lorem ipsum)
✅ Image placeholders with descriptive names
✅ Clean, commented code
✅ Mobile-first responsive design
✅ Fast performance (optimized images, lazy loading)
✅ Accessible (ARIA labels, keyboard navigation)
✅ SEO optimized (meta tags, structured data)
✅ Easy to maintain and extend

## Before You Start

Please confirm you understand:
1. The app (Optionify) - Shopify app for product options
2. The 4 assign types
3. The 11 option types
4. The need for image placeholders throughout articles
5. The requirement for detailed, beginner-friendly content

After confirmation, please build the complete website with all files, articles, and documentation. Organize artifacts logically (group related files together).