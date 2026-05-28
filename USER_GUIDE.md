# Website Content Editing Guide

This guide explains how to update the content of your personal website. Most of the content is centralized in a single file for easy editing.

## 📂 Main Content File
**File Path**: `src/lib/data.ts`

Almost all text and data on your website (Profile, Education, Skills, Research, Publications) are stored in this file. You can open it with any text editor (VS Code, Notepad, etc.).

---

## 1. 🖼️ Updating Images

### Profile Image
1.  **Save your image**: Save your photo as `profile.jpg` (or any name you prefer).
2.  **Place it**: Move the file into the `public/` folder of your project.
    *   *Path*: `c:\Users\c\OneDrive\바탕 화면\personal_page\public\`
3.  **Update Code**:
    *   Open `src/lib/data.ts`.
    *   Find `personalInfo`.
    *   Update `heroImage`:
        ```typescript
        export const personalInfo = {
            // ...
            heroImage: "/profile.jpg", // Change this to your filename
        };
        ```

### Research Images & Details
1.  **Place images**: Put your research images in `public/research/`.
2.  **Update Code**:
    *   Open `src/lib/data.ts`.
    *   Find the `research` array.
    *   Update the fields for each item:
        ```typescript
        {
            id: "unique-id", // Used for the URL (e.g., /research/unique-id)
            title: "Your Research Title",
            description: "Short description for the card.",
            details: "Longer description for the detail page. You can use multiple lines.",
            image: "/research/your-new-image.jpg",
            videoId: "dQw4w9WgXcQ", // Optional: YouTube Video ID (not the full URL)
        },
        ```

---

## 2. 🎓 Updating Education (Focus/Details)

To add or modify details like "Focus" or research topics in the Education section:

1.  Open `src/lib/data.ts`.
2.  Find the `education` array.
3.  Edit the `details` field of the relevant entry.

**Example:**
```typescript
export const education = [
    {
        degree: "M.S. in Electrical Engineering",
        school: "Korea University",
        // ...
        // You can edit this text directly:
        details: "Focus: Robotics, motion control, real-time optimization, GPU", 
    },
    // ...
];
```

---

## 3. 🛠️ Updating Skills & Interests

To change your skills or research interests:

1.  Open `src/lib/data.ts`.
2.  Find the `skills` array.
3.  Add, remove, or change strings in the `items` array for each category.

**Example:**
```typescript
export const skills = [
    { 
        category: "Programming", 
        // Add 'Rust' or remove 'MATLAB' here:
        items: ["C++", "CUDA", "Python", "MATLAB", "Rust"] 
    },
    { 
        category: "Research Interests", 
        // Update your interests here:
        items: ["Whole Body Control", "Model Predictive Control", "Sim2Real"] 
    },
];
```

---

## 4. 📚 Updating Publications

To add a new publication:

1.  Open `src/lib/data.ts`.
2.  Find the `publications` array.
3.  Copy an existing block `{ ... }` and paste it at the top of the list (to show it first).
4.  Update the fields.

**Example:**
```typescript
export const publications = [
    // New publication
    {
        title: "New Paper Title",
        authors: "Co-author Name, **Jechan Jeon**, Another Author", // Wrap name in ** to bold it
        venue: "ICRA",
        year: "2026",
        link: "https://link-to-paper.com",
    },
    // ... existing publications
];
```

### 📝 Bolding Author Names
To bold your name (or any other name) in the author list, simply wrap it with double asterisks `**`.
*   Example: `**Jechan Jeon**` becomes **Jechan Jeon**.


---

## 5. 🚀 Applying Changes

After saving `src/lib/data.ts`, the changes should appear immediately if you are running the local server (`npm run dev`).

If you are deploying to GitHub Pages, you will need to push your changes to GitHub to see them live.
