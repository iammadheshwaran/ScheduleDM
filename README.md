# 🕒 Schedule DM — React + TypeScript + Vite  
A smooth and modern app to **schedule your direct messages** with delay and control. Built using **React + TypeScript + Vite**, it lets users set a timer before sending messages — offering flexibility to cancel, preview, or reschedule.

---

## ✨ Features

✅ Schedule DMs with a customizable delay  
✅ Cancel a scheduled message before it’s sent  
✅ Choose from preset delays: **10s / 30s / 60s**  
✅ Toast notification on message sent  
✅ Optional message preview before sending  
✅ Clean, responsive UI using **TailwindCSS + ShadCN**

---

## 🧠 What You'll Learn

- Using `setTimeout()` and `clearTimeout()` for delay logic  
- Managing message and timer state using `useState` and `useEffect`  
- Conditional rendering for **Send** vs **Cancel** states  
- Folder organization for scalability  
- Building a modern UI with **TailwindCSS** and **ShadCN**  
- Real-world use of scheduling and cancellation logic

---

## 🛠 Tech Stack

| Tech            | Purpose                                 |
|-----------------|-----------------------------------------|
| React + Vite    | Fast and modern frontend setup          |
| TypeScript      | Type-safe component and logic building  |
| Tailwind CSS    | Utility-first styling framework         |
| ShadCN UI       | Elegant, accessible UI components       |
| React Icons     | For minimal, functional icons           |

---

## 📁 Folder Structure

src/
├── components/ # InputBox, DelayControls, TimerDisplay, Toast
├── hooks/ # useScheduleDM (custom hook)
├── pages/ # Main or future route pages
├── App.tsx # App layout and rendering
└── main.tsx # Vite entry point