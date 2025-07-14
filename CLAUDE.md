# Denali Health Site Redesign - Design Specification

## Project Overview
Modern clinical research organization website redesign for Denali Health using Next.js, focusing on aesthetic design, responsive layout, and professional scientific/pharmaceutical industry branding.

**Original Site**: https://www.denali-health.com/
**Company Type**: Independent Research Organization (IRO)
**Location**: Plant City
**Content Source**: DENALI_CONTENT.md (exact text from original site)

## Design Style Guide

### Visual Identity
- **Design Philosophy**: Clinical research excellence meets cutting-edge AI and innovation
- **Style**: Professional, scientific, trustworthy with emphasis on technology and FDA compliance
- **Target Audience**: Sponsors, CROs, physicians, patients seeking clinical trials

### Color Palette
- **Primary**: Deep navy (#1E293B) - professionalism and scientific rigor
- **Secondary**: Bright blue (#3B82F6) - innovation and technology
- **Accent**: Electric green (#10B981) - progress and success
- **Clinical**: Steel blue (#64748B) - medical/pharmaceutical industry
- **Neutrals**: 
  - Pure white (#FFFFFF)
  - Light gray (#F8FAFC)
  - Medium gray (#64748B)
  - Dark slate (#0F172A)
- **Success**: Emerald (#10B981)
- **Warning**: Amber (#F59E0B)
- **FDA/Quality**: Deep blue (#1D4ED8) - compliance and trust

### Typography
- **Headings**: Inter or Sora - modern, clean, highly legible
- **Body**: Inter or Source Sans Pro - excellent readability
- **Font Scale**:
  - Hero: 4.5rem (mobile: 2.5rem)
  - H1: 3rem (mobile: 2rem)
  - H2: 2.25rem (mobile: 1.75rem)
  - H3: 1.875rem (mobile: 1.5rem)
  - Body: 1.125rem
  - Small: 0.875rem

### Design Elements
- **Spacing**: 8px grid system (8, 16, 24, 32, 48, 64, 96, 128)
- **Border Radius**: 
  - Cards: 16px
  - Buttons: 8px
  - Small elements: 4px
- **Shadows**: Multi-layered subtle shadows for depth
  - Small: 0 1px 3px rgba(0,0,0,0.1)
  - Medium: 0 4px 6px rgba(0,0,0,0.1)
  - Large: 0 20px 25px rgba(0,0,0,0.15)
- **Animations**: Smooth, professional micro-animations
  - Hover states: 200ms ease
  - Page transitions: 300ms ease-out
  - Scroll animations: Intersection Observer with subtle fade-ins

## Site Structure

### Navigation
- **Fixed Header**: 
  - Transparent on hero, white on scroll
  - Logo (animated on scroll)
  - Main nav items with hover effects
  - CTA button "Start Your Trial"
  - Mobile: Fullscreen overlay menu with staggered animations

### Page Sections (Using Exact Denali Health Content)

1. **Hero Section**
   - Tagline: "Let's Make the World a Helathier Place!" (keeping original typo)
   - Main headline: "Accelerating Therapies from Bench to Bedside"
   - Subheadline: "Denali Health is an Independent Research Organization (IRO) dedicated to clinical research excellence & accelerating therapies to market with integrity & innovation."
   - Two CTA buttons: "Connect with Denali" and "Join a Study!"
   - Scientific/molecular background animation
   - Scroll indicator with pulse animation

2. **Company Overview Section**
   - IRO specialization and clinical research focus
   - Key differentiators preview
   - Professional credentials and FDA compliance

3. **Denali's Big 5 (Exact Content)**
   - Interactive card layout with exact text:
   1. Patient Recruitment Prowess
   2. Efficient Study Start-Up  
   3. AI-Driven Solutions
   4. Quality Assurance
   5. Diversity Leaders
   - Each card expandable with full descriptions from DENALI_CONTENT.md

4. **Our Therapeutic Excellence**
   - Section heading: "Our Therapeutic Excellence"
   - Subheading: "Denali Health Plant City is Equipped to Support the following Indications with Utmost Excellence"
   - Grid of 10 therapeutic areas: Neurology, Cardiology, Vaccines, Infectious Disease, Endocrinology & Metabolism, Dermatology, Psychiatry, Rheumatology, Women's Health, Respiratory

5. **Integrity & Innovation Section**
   - Full content: "At Denali, we believe that integrity and innovation are the pillars of our success. We strive to maintain the highest ethical standards in all our patient care and data collection while continuously pushing the boundaries of what's possible. Our values are what sets us apart and drives us forward."

6. **Accelerating Therapies Section**
   - Mission statement with exact text from DENALI_CONTENT.md
   - Focus on bench to market acceleration

7. **Contact Section**
   - Contact form with fields: First Name, Last Name, Email, Phone, Message
   - Submit button: "Partner with Us"
   - Phone: 813-796-6716
   - CTAs: "Connect with Denali", "Join a Study!"

8. **Footer**
   - Navigation links
   - Contact information
   - Plant City location
   - Professional/clinical research focused links

## Interactive Features

1. **Scroll-triggered Animations**
   - Fade-in with slight upward movement
   - Staggered animations for lists
   - Progress bars that fill on scroll
   - Number counters

2. **Hover Effects**
   - Cards: Lift with shadow enhancement
   - Buttons: Color transitions with icons sliding in
   - Images: Subtle zoom with overlay

3. **Loading States**
   - Skeleton screens for content
   - Smooth transitions

4. **Micro-interactions**
   - Button click feedback
   - Form field focus states
   - Success/error animations

## Responsive Design Approach

### Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px - 1440px
- Large: 1441px+

### Mobile-First Features
- Touch-friendly tap targets (min 44px)
- Swipeable carousels
- Collapsible sections
- Bottom navigation for key actions
- Optimized images with lazy loading

## Technical Implementation

### Next.js Structure
```
/components
  /ui (buttons, cards, etc.)
  /sections (hero, features, etc.)
  /layout (header, footer)
/pages
  index.js
  /api
/styles
  globals.css
  /modules
/public
  /images
  /icons
/lib
  /utils
  /animations
```

### Key Libraries to Include
- Framer Motion (animations)
- React Intersection Observer (scroll triggers)
- Tailwind CSS (styling)
- React Hook Form (contact forms)
- Next/Image (optimized images)
- Headless UI (accessible components)

### Performance Optimizations
- Static generation for main pages
- Image optimization with Next/Image
- Font optimization with next/font
- Code splitting
- Lazy loading for below-fold content

### Accessibility Features
- ARIA labels
- Keyboard navigation
- Focus indicators
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance

## Content Strategy

### Headlines
- Dynamic and benefit-focused
- Clear value propositions
- Action-oriented language

### Body Copy
- Shorter paragraphs for scannability
- Bullet points for key information
- Professional healthcare tone

### CTAs
- Action-oriented with urgency
- Clear next steps
- Multiple contact options

### Social Proof
- Add testimonials
- Case studies
- Partner logos
- Success metrics

### Data Visualization
- Interactive charts for success metrics
- Progress indicators
- Statistical highlights

## Development Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Type Check**: `npm run type-check`

## Content Sections Data (From DENALI_CONTENT.md)

### Denali's Big 5 Differentiators (Exact Text)
1. **Patient Recruitment Prowess** - "Our Patient Recruitment system is the cutting-edge solution for maximizing recruitment speed and efficiency. With advanced technology and targeted outreach strategies, we guarantee unparalleled velocity in filling trial quotas."

2. **Efficient Study Start-Up** - "Efficiency is at the core of our study start-up process. Our dedicated personnel, combined with our ability to run start-up activities in parallel and implement technology-enabled solutions, allow us to complete all study start-up activities in less than a few weeks, given the sponsor's support."

3. **AI-Driven Solutions** - "Our AI-driven dynamic solutions are tailored to the unique parameters of each study, empowering our employees to think critically and solve problems creatively. This innovative approach ensures that we can confidently address the specific challenges of each trial with agility and precision."

4. **Quality Assurance** - "At Denali Health, quality is non-negotiable. We maintain a rigorous Quality Assurance program that ensures we are always FDA audit-ready. Through meticulous internal quality audits done routinely, we uphold the highest standards of compliance and excellence."

5. **Diversity Leaders** - "We are proud to be diversity leaders in clinical research. Our commitment to inclusivity ensures that our trials reflect the diverse populations they aim to serve. By prioritizing diversity, we enhance the generalizability of our study results and contribute to more equitable healthcare solutions."

### Therapeutic Excellence Areas (Exact List)
- Neurology
- Cardiology  
- Vaccines
- Infectious Disease
- Endocrinology & Metabolism
- Dermatology
- Psychiatry
- Rheumatology
- Women's Health
- Respiratory

### Company Values & Mission (Exact Text)
- **Integrity & Innovation**: "At Denali, we believe that integrity and innovation are the pillars of our success. We strive to maintain the highest ethical standards in all our patient care and data collection while continuously pushing the boundaries of what's possible. Our values are what sets us apart and drives us forward."

- **Accelerating Therapies**: "At Denali, we are dedicated to accelerating therapies from bench to market and bringing treatments to patients as quickly and efficiently as possible. By working together, we believe we can make a significant impact on the lives of those who need it most."

### Contact Information
- Phone: 813-796-6716
- Location: Plant City
- CTAs: "Connect with Denali", "Join a Study!", "Partner with Us"