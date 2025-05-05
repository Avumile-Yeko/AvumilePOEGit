# AvumilePOEGit
Avumile Yeko 
Student Number ST10482422 


 ZeroFive10-Technologies website git repo
 # ZeroFive-Ten Technologies

Welcome to the official website repository of **ZeroFive-Ten Technologies**, a forward-thinking tech company delivering cutting-edge products, tailored IT services, and intelligent automation solutions.

## 🌐 Website Structure

The website consists of multiple pages including:

- **Home** - Introduction to our brand and mission.
- **About Us** - Learn more about ZeroFive-Ten and our values.
- **Products & Services** - Explore our high-end PCs, custom laptops, AI rendering solutions, cybersecurity offerings, and more.
- **Contact Us** - Get in touch with us via phone, email, or visit one of our locations.
- **Enquiries** - Send us specific questions or custom service requests.
- **FAQ** - Commonly asked questions answered for your convenience.

## 🚀 Key Features

### 🖥️ Products
- High-End PCs
- Custom-Built PCs
- Laptops
- Accessories (Keyboards, Mice, Monitors, etc.)

### 🛠️ Services
- Home Office Setup
- IT Support
- AI Rendering & Simulations
- Software Development
- Smart Home Automation
- Cybersecurity
- Enterprise IT Solutions

### 📬 Contact Information
- **Phone:** 011 015 9723  
- **Email:** Info@ZeroFive10.co.za  
- **Locations:**  
  - 21 Oxford Street, East London, 5201  
  - 7 Cape Road, Port Elizabeth, 6001  

### 📱 Social Media
- **Instagram:** [@ZeroFive10](https://instagram.com/ZeroFive10)  
- **X (Twitter):** [@ZeroFive10_Tech](https://twitter.com/ZeroFive10_Tech)  
- **Facebook:** [ZeroFive10_Tech](https://facebook.com/ZeroFive10_Tech)

## 🧩 Technologies Used
- HTML5
- CSS3
- Custom images and styling
- Responsive design elements
- Server-side form handling (e.g., `submit_enquiry.php`)

## 📄 License
&copy; 2025 ZeroFive-Ten Technologies. All rights reserved.

---

For development contributions or inquiries, please reach out via our [Contact Page](ZeroFive-Ten%20Contact.html).

**DATE:** May 2, 2025
## Brief overview of work done in part 2

For PART  2 
I added CSS styling to the website. 
I added an external style sheet which helped with consistency with the layout of the website. 
I linked the external stylesheet to the 6 pages, Home, About, Products & services, Contact Us, Enquiries and FAQ pages. 
I styled the navigation bar in such a way that the buttons are positioned more to the top right corner and the logo of the company on the top left corner
I added more comments to the code as was instructed in the feedback of Part 1. 
I also added a header and a footer to the pages to make them seem more professional and aesthetically pleasing 

# Responsive Design Update – Breakpoint Implementation

**Date:** May 4, 2025

## Overview

To improve the scalability and responsiveness of the website across different devices, I analyzed the existing CSS (`Stylesheet.css`) to identify key breakpoints—screen 
widths where the layout or usability begins to degrade. Based on this, media queries were added to ensure a better user experience on phones (including a 6.74" device) 
and tablets (8–10" screens).

---

## 📐 How I Found the Breakpoints

I used the following process:

1. **Manual testing in Chrome DevTools:**  
   From a quick google search it told me that I needed to simulate screen sizes from desktop down to smaller phones in Chrome DevTools 
   
2. **Layout stress points:**  
   I observed where content like navigation bars, grid cards, and padding began to overflow, collapse, or appear poorly spaced.

3. **Device targets:**  
   Based on typical screen sizes, I focused on:
   - ≤ 768px (tablet)
   - ≤ 480px (mobile)

---

## 📋 Media Query Implementation

I added CSS media queries targeting:

### **Tablet Devices (≤ 768px):**
- Adjusted `.navbar` and `.nav-links` to stack vertically.
- Reduced padding on `.content`.
- `.card` components set to take more horizontal space individually.

### **Mobile Devices (≤ 480px):**
- Scaled down font sizes and button padding.
- Converted navbar and nav items to single-column layouts.
- Further reduced top padding to improve vertical fit.

---

## ✅ Results

The website now adapts correctly to:
- Mobile phones (~6.74") with smaller screen widths
- Tablets (8–10") with medium screen widths
- Desktop and larger screens

This ensures an optimized experience across devices, improves readability, and maintains the structure and design integrity of the website.

---


