# Nile University Navigation System

<img width="1024" height="1024" alt="logo" src="https://github.com/user-attachments/assets/ea30c515-a1a7-48f0-8cd2-0325031de874" />


A web-based solution for seamless indoor navigation, designed for Nile University students, staff, and visitors. The system solves navigation challenges in a multi-floor environment with features like real-time route calculation, offline functionality, and an accessible user interface.

---

## 🌟 Key Features
1. **Real-time Navigation:**
   - Plan and view optimal routes across campus floors.
   - Includes options for elevators and stairs in multi-floor navigation.

2. **Offline Functionality:**
   - Powered by Service Workers for offline map data and route calculations.

3. **Interactive Map:**
   - Dynamic map rendering with room markers.
   - Animate routes and support for zooming, panning, and floor changes.

4. **Room Search:**
   - Autocomplete search for rooms by name or number.
   - Provides detailed room information including floor, category, and description.

5. **Dark/Light Mode:**
   - Toggle between themes to suit user preferences.

---

## 🚀 Getting Started

### **Use the Website:**
Access the application directly here:  
➡️ [Nile University Navigation System](https://sa3id-jr.github.io/Nile-university-navigation-system/)

### **For Developers:**
To clone and run locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/Sa3id-jr/Nile-university-navigation-system.git
   cd Nile-university-navigation-system
   ```
2. Open the `index.html` file in your browser.

---

## 🌍 Technologies Used

| **Technology**       | **Purpose**                        |
|-----------------------|------------------------------------|
| **HTML5/CSS3**        | Structure and styling             |
| **JavaScript**        | Core functionality and routing    |
| **Leaflet.js**        | Interactive map rendering         |
| **Dijkstra's Algorithm** | Shortest-path route calculation |
| **Service Workers**   | Offline support and caching       |
| **GitHub Pages**      | Hosting the live application      |

---

## 📋 Functional Requirements

1. Real-time search and autocomplete for rooms.
2. Optimal route calculation with support for multi-floor navigation.
3. Visual map rendering with room markers.
4. Theme management with dark/light modes.
5. Offline support for navigation and cached data.

---

## 📊 Non-Functional Requirements

1. **Performance:**
   - Route calculation within 2 seconds.
   - Page load under 3 seconds.
2. **Accessibility:**
   - WCAG 2.1 compliance with support for screen readers and keyboard navigation.
3. **Compatibility:**
   - Works across modern browsers (Chrome, Firefox, Edge, Safari).
   - Supports both desktop and mobile devices.
4. **Scalability:**
   - Easily expandable room and floor data for future campus updates.

---

## 🛠️ System Architecture

The system is structured into three layers:

1. **Presentation Layer (Frontend)**:
   - Built with HTML, CSS, JavaScript, and Leaflet.js for map rendering.
2. **Logic Layer (Business)**:
   - Implements Dijkstra's algorithm and custom pathfinding logic.
3. **Data Layer (Storage)**:
   - Stores room and corridor data locally using Service Workers and LocalStorage.

---

## 🌍 Browser Compatibility
This system works seamlessly on all modern browsers:
- **Google Chrome**
- **Microsoft Edge**
- **Mozilla Firefox**
- **Safari**

Please ensure your browser supports Service Workers for offline functionality.

---

## 📈 Future Enhancements

Support for newly added rooms and buildings.

---

## 🤝 Contribution

We welcome contributions to enhance the Nile University Navigation System!  
- Open an [issue](https://github.com/Sa3id-jr/Nile-university-navigation-system/issues) with your suggestion or bug report.
- Fork this repository, make changes, and submit a pull request.

---

## 📝 License

This project is licensed under a **custom license**. Modifications or changes to the system are restricted to the developers only. For permission inquiries, contact the author.

---

## 👨‍💻 Author

Developed by [Sa3id-jr](https://github.com/Sa3id-jr), [Rodina Ahmed](https://github.com/Rodina-ahmed1), [Nardy](https://github.com/nardy05), [Tasneem Elsharkawy](https://github.com/tasneemelsharkawy) in collaboration with Nile University.
---
