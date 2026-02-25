# Rahul Shetty Academy - Basic Operations Test Plan

## Application Overview

Rahul Shetty Academy is a comprehensive online learning platform offering QA automation courses including Selenium, Playwright, API Testing, AI Testing and more. The platform targets 1M+ students globally. Basic operations testing covers core user interactions including navigation, course browsing, enrollment paths, FAQ interactions, and footer links.

## Test Scenarios

### 1. Homepage Navigation & UI Elements

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage loads successfully

**File:** `tests/RahulShettyAcademy/homepage.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Wait for page to fully load
  3. Verify page title contains 'Rahul Shetty Academy'
  4. Verify main heading 'An Academy to Learn & Shine in your QA/AI Career.' is visible

**Expected Results:**
  - Page loads without errors
  - Page title displays correctly
  - Main heading is visible and readable
  - All page elements render properly

#### 1.2. Verify promotional banner displays and dismisses

**File:** `tests/RahulShettyAcademy/banner.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Verify promotional banner is visible with 'Get 30% OFF' message
  3. Verify coupon code 'RAHULSHETTY21051' is displayed
  4. Verify countdown timer is visible and counting down
  5. Click 'Dismiss banner' button
  6. Verify banner is no longer visible on page

**Expected Results:**
  - Banner displays with correct promotional message
  - Coupon code is clearly visible
  - Countdown timer is active
  - Banner dismisses when button is clicked
  - Page layout adjusts after banner dismissal

#### 1.3. Verify header navigation links are functional

**File:** `tests/RahulShettyAcademy/headerNavigation.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Verify 'RAHUL SHETTY' logo is visible
  3. Click 'All-Access' navigation link
  4. Verify All-Access page loads
  5. Navigate back to homepage
  6. Click 'Learning Paths' link
  7. Verify Learning Paths page loads
  8. Navigate back and verify 'AI Learning Path' shows NEW badge
  9. Click 'Practice' link and verify page loads
  10. Click 'Meet ups' link and verify external page opens

**Expected Results:**
  - All navigation links are clickable
  - Each link navigates to correct page
  - AI Learning Path displays NEW badge
  - External links open in new context
  - Navigation is consistent across pages

#### 1.4. Verify Sign Up and Browse Courses buttons work

**File:** `tests/RahulShettyAcademy/headerButtons.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Locate header buttons section
  3. Click 'Sign Up' link
  4. Verify sign up page loads (courses.rahulshettyacademy.com)
  5. Navigate back
  6. Click 'Browse Courses' link
  7. Verify courses page loads with course listings

**Expected Results:**
  - Sign Up button is functional
  - Correct sign up page loads
  - Browse Courses button is functional
  - Courses page displays multiple courses
  - All links have valid URLs

### 2. Featured Courses & Enrollment

**Seed:** `tests/seed.spec.ts`

#### 2.1. Verify featured courses display correct information

**File:** `tests/RahulShettyAcademy/featuredCourses.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'Featured Courses' section
  3. Verify section title 'Master the latest testing technologies' is visible
  4. For each featured course (Selenium, API Testing, GenAI, Playwright, Playwright Python):
  5.   - Verify course image displays
  6.   - Verify 'Best Seller' badge is visible
  7.   - Verify course title is readable
  8.   - Verify 5-star rating and review count display
  9.   - Verify student enrollment count displays
  10.   - Verify discounted price shows ($18.99) and original price ($129.99-$199.99)
  11.   - Verify 'Enroll Now' button is visible and clickable

**Expected Results:**
  - All featured courses display with complete information
  - Pricing is clearly shown with both original and discounted rates
  - Ratings and reviews are accurate
  - Best Seller badges appear on appropriate courses
  - Enroll buttons are functional
  - Student enrollment numbers are displayed

#### 2.2. Verify course enrollment buttons are clickable

**File:** `tests/RahulShettyAcademy/courseEnrollment.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to Featured Courses section
  3. Click 'Enroll Now' button on first course (Selenium)
  4. Verify enrollment page or sign up page loads
  5. Navigate back
  6. Click 'Enroll Now' on another course (Playwright)
  7. Verify correct course enrollment page loads
  8. Click 'View More Courses' link at bottom of featured section
  9. Verify full courses catalog page loads

**Expected Results:**
  - All 'Enroll Now' buttons are functional
  - Enrollment links navigate to correct course pages
  - View More Courses link works
  - Full course catalog is accessible
  - Navigation is smooth without errors

### 3. Call-to-Action Sections

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify main CTA buttons in hero section

**File:** `tests/RahulShettyAcademy/heroSection.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Verify main heading and hero section displays
  3. Verify 'Trusted by 1 Million+ Students' text is visible
  4. Verify statistics section shows: '1Million+ Students', '195 Countries', '40+ Courses', '100% Job Ready'
  5. Click 'JOIN NOW' button in hero section
  6. Verify sign up page loads
  7. Navigate back
  8. Click 'Browse Learning Paths' button
  9. Verify Learning Paths page loads

**Expected Results:**
  - Hero section displays all key information
  - Statistics are visible and formatted correctly
  - JOIN NOW button navigates to sign up
  - Browse Learning Paths button navigates correctly
  - All CTA buttons are clickable and functional

#### 3.2. Verify instructor section and portfolio link

**File:** `tests/RahulShettyAcademy/instructorSection.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'Meet Your Instructor' section
  3. Verify 'Meet Your Instructor' heading is visible
  4. Verify instructor name 'Hi, I'm Rahul Shetty.' displays
  5. Verify instructor image is visible
  6. Verify instructor credentials '✓ Test Automation Master Level' displays
  7. Verify bio paragraphs are readable
  8. Click 'Check my Portfolio' link
  9. Verify portfolio/speaker page loads

**Expected Results:**
  - Instructor section displays all information
  - Instructor image loads properly
  - Credentials and bio are visible
  - Portfolio link is functional
  - External link opens correctly

#### 3.3. Verify Academy Access CTA section

**File:** `tests/RahulShettyAcademy/academyAccessCTA.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'JOIN OUR ACADEMY' section
  3. Verify 'Exclusive Academy Access' header displays
  4. Verify section title 'Transform your career...' is visible
  5. Verify two free courses are displayed:
  6.   - 'Learn Java Design Patterns for Test Framework'
  7.   - 'SDET/QA Automation Interview Kit + Java Logic Programs'
  8. Verify 'Limited time offer - Usually $197, now FREE!' badge displays
  9. Click 'JOIN NOW - FREE ACCESS' button
  10. Verify sign up page loads with free offer context

**Expected Results:**
  - Academy Access section displays all details
  - Free courses are clearly listed
  - Limited time offer messaging is prominent
  - Free access CTA button is functional
  - Sign up page loads with appropriate context

#### 3.4. Verify transformation CTA section

**File:** `tests/RahulShettyAcademy/transformationCTA.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'Ready to Transform Your QA Career?' section
  3. Verify section heading and description are visible
  4. Click 'All Access Membership' button
  5. Verify All-Access subscription page loads
  6. Navigate back
  7. Click 'Explore QA & AI Learning Paths' button
  8. Verify Learning Paths page loads
  9. Navigate back
  10. Click 'Explore Individual (All) Courses' button
  11. Verify full courses page loads
  12. Navigate back
  13. Click 'Join the Community' button
  14. Verify community section or anchor link works

**Expected Results:**
  - All CTA buttons in transformation section are visible
  - All buttons navigate to correct destinations
  - Membership page loads correctly
  - Learning Paths page is accessible
  - Full Courses page is accessible
  - Community link functions properly

### 4. Skills & Benefits Section

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify Skills & Benefits cards display

**File:** `tests/RahulShettyAcademy/skillsBenefits.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'Skills & Benefits' section
  3. Verify section heading 'Learn the skills companies hire for' displays
  4. Verify descriptive text about courses is visible
  5. Verify all 6 benefit cards are visible:
  6.   - 'Lifetime Access' with description
  7.   - 'Mentor-first Teaching' with description
  8.   - 'Hands-on Frameworks' with description
  9.   - 'Career-Focused' with description
  10.   - 'Multi-Stack Tools' with description
  11.   - 'AI Testing' with description
  12. Verify each card has an icon/image
  13. Verify all text is readable and properly formatted

**Expected Results:**
  - All 6 benefit cards are visible and well-organized
  - Icons display correctly for each benefit
  - Descriptions are clear and complete
  - Layout is responsive and visually appealing
  - All text is readable with proper contrast

### 5. FAQ & Support Section

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify FAQ section displays all questions

**File:** `tests/RahulShettyAcademy/faqSection.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'Frequently Asked Questions' section
  3. Verify FAQ heading and description display
  4. Verify all 8 FAQ questions are visible:
  5.   1. 'What does Rahul Shetty Academy offer?'
  6.   2. 'Who is Rahul Shetty?'
  7.   3. 'Are these courses good for beginners?'
  8.   4. 'Do I get certificates after completing courses?'
  9.   5. 'How do I enroll in a course?'
  10.   6. 'Is content available on mobile devices?'
  11.   7. 'What topics are covered?'
  12.   8. 'Is there community support?'
  13. Verify each question has expand/collapse toggle button

**Expected Results:**
  - All 8 FAQ questions are visible
  - Questions are clearly formatted as collapsible items
  - Each question has expand toggle icon
  - No questions are pre-expanded
  - Section layout is organized and easy to scan

#### 5.2. Verify FAQ expand/collapse functionality

**File:** `tests/RahulShettyAcademy/faqInteraction.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to FAQ section
  3. Click first FAQ question 'What does Rahul Shetty Academy offer?'
  4. Verify answer expands and becomes visible
  5. Verify toggle icon changes direction
  6. Click the same question again
  7. Verify answer collapses and becomes hidden
  8. Toggle icon returns to original state
  9. Click second FAQ question 'Who is Rahul Shetty?'
  10. Verify second answer expands
  11. Verify first answer remains collapsed
  12. Click third question
  13. Verify multiple FAQ items can be open simultaneously

**Expected Results:**
  - FAQ items expand to show answers when clicked
  - FAQ items collapse when clicked again
  - Toggle icons change appropriately
  - Multiple FAQ items can be open at same time
  - Answers display with proper formatting
  - Collapse/expand is smooth without lag

### 6. Success Stories Section

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify success stories display

**File:** `tests/RahulShettyAcademy/successStories.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to 'Learner success stories' section
  3. Verify section heading and description display
  4. Verify first story for 'Sarah Johnson - QA Engineer at Microsoft' displays:
  5.   - Profile image/avatar
  6.   - 5-star rating
  7.   - Success quote/testimonial
  8.   - Name and job title
  9. Verify second story for 'Michael Chen - Senior Test Automation Engineer' displays
  10. Verify third story for 'Priya Sharma - QA Manager at Amazon' displays
  11. Verify fourth story for 'David Wilson - Test Architect at Google' displays
  12. Verify fifth story for 'Lisa Rodriguez - Senior QA Consultant' displays
  13. Verify sixth story for 'Ahmed Hassan - Lead QA Engineer at Netflix' displays
  14. Verify all testimonials are readable and properly formatted

**Expected Results:**
  - All 6 success stories are visible
  - Each story displays profile, testimonial, and credentials
  - Star ratings are visible and consistent
  - Names and job titles are clearly shown
  - Testimonials are complete and readable
  - Stories showcase diverse companies (Microsoft, Google, Amazon, Netflix)

### 7. Footer & Support Links

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify footer navigation links

**File:** `tests/RahulShettyAcademy/footerNavigation.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to footer section
  3. Verify 'Navigation' section header in footer
  4. Click 'All-Access' link in footer
  5. Verify All-Access page loads
  6. Navigate back and scroll to footer
  7. Click 'Learning Paths' in footer
  8. Verify Learning Paths page loads
  9. Navigate back
  10. Click 'Mentorship' link in footer
  11. Click 'AI Learning Path' link in footer
  12. Click 'Practice' link in footer
  13. Click 'Meet ups' link in footer
  14. Click 'Blog' link in footer
  15. Verify blog page or external link opens

**Expected Results:**
  - All navigation links in footer are functional
  - Each link navigates to correct page/section
  - No broken links are present
  - All pages load without errors
  - Footer navigation mirrors header navigation

#### 7.2. Verify footer popular courses links

**File:** `tests/RahulShettyAcademy/footerCourses.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to footer
  3. Verify 'Popular Courses' section header
  4. Click 'Selenium WebDriver' course link in footer
  5. Verify course page loads
  6. Navigate back and scroll to footer
  7. Click 'Playwright Testing' link
  8. Verify course page loads
  9. Navigate back
  10. Click 'API Testing' link
  11. Click 'AI Agents' link
  12. Click 'AI Testing Tools' link
  13. Verify correct course pages load for each
  14. Navigate back and click 'Browse All Courses' in footer
  15. Verify full courses catalog page loads

**Expected Results:**
  - All course links in footer are functional
  - Each course link opens correct course page
  - Browse All Courses link works properly
  - No broken course links
  - Course pages load with course details

#### 7.3. Verify footer support links

**File:** `tests/RahulShettyAcademy/footerSupport.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to footer
  3. Verify 'Support' section header in footer
  4. Click 'Student Login' link
  5. Verify login page loads (courses.rahulshettyacademy.com/sign_in)
  6. Navigate back and scroll to footer
  7. Click 'Contact Us' link in footer
  8. Verify contact page or form loads
  9. Navigate back
  10. Verify 'Help Center' link is present
  11. Verify 'Community' link is present
  12. Verify 'Terms of Service' link is present
  13. Verify 'Privacy Policy' link is present

**Expected Results:**
  - Student Login link functions correctly
  - Contact Us page is accessible
  - All support links are present in footer
  - No broken links in support section
  - Legal links are properly linked

#### 7.4. Verify footer social media links

**File:** `tests/RahulShettyAcademy/footerSocial.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/
  2. Scroll to footer
  3. Verify 'Connect us on Socials' section in footer
  4. Verify YouTube icon/link is present
  5. Click YouTube link
  6. Verify YouTube channel page opens (youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw)
  7. Navigate back
  8. Verify LinkedIn icon/link is present
  9. Click LinkedIn link
  10. Verify LinkedIn profile opens
  11. Navigate back
  12. Verify Instagram icon/link is present
  13. Click Instagram link
  14. Verify Instagram profile opens
  15. Verify footer copyright text displays '© 2025 Rahul Shetty Academy'

**Expected Results:**
  - All social media icons are visible in footer
  - YouTube link opens correct channel
  - LinkedIn link opens correct profile
  - Instagram link opens correct profile
  - All external links open in appropriate context
  - Copyright text displays current year
