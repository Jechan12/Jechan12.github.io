export const personalInfo = {
    name: "Jechan Jeon",
    role: "Research Intern in Robotics",
    affiliation: "Korea Insititue of Science and Technology (KIST)",
    email: "jeonjechanl@gmail.com",
    email2: "jechan97@kist.re.kr",
    github: "https://github.com/Jechan12",
    linkedin: "https://www.linkedin.com/in/jechan-jeon-630443320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://instagram.com/i_m_jechan",
    description: "Interested in Motion Control, Whole-Body Control, and Real-Time Optimization for Legged-Robots.",
    heroImage: "/profile.jpg",
};

export const education = [
    {
        degree: "M.S. in Electrical Engineering",
        school: "Korea University",
        location: "Seoul",
        period: "Mar. 2024 – Fed. 2026",
        details: "Focus: Robotics, motion control, real-time optimization, GPU",
        thesisTitle: "Whole-Body Control of Two Wheeled-Legged Robots and GPU-Accelerated Dynamics for Articulated Robots",
    },
    {
        degree: "B.S. in Mechanical and System Design Engineering",
        school: "Hongik University",
        location: "Seoul",
        period: "Mar. 2017 – Feb. 2024",
        details: "",
    },
];

export const experience = [
    {
        role: "Intern Researcher",
        lab: "Humanoid Robotics Lab, KIST",
        location: "Seoul",
        period: "Mar. 2026 - Present",
        focus: "Robotics, Two-Wheeled Legged Robot, Whole-Body Optimization, HW Impelmentation, Sim2Real",
        link: "https://sites.google.com/view/humanoids-kist/Home?authuser=0",
    },
    {
        role: "Graduate Student Researcher",
        lab: "Humanoid Robotics Lab, KIST",
        location: "Seoul",
        period: "Mar. 2024 – Fed. 2026",
        focus: "Robotics, Two-Wheeled Legged Robot, Whole-Body Optimization, GPU Acceleration, Motion Control",
        link: "https://sites.google.com/view/humanoids-kist/Home?authuser=0",
    },
    {
        role: "Undergraduate Research Intern",
        lab: "Humanoid Robotics Lab, KIST",
        location: "Seoul",
        period: "Jul. 2023 – Dec. 2023",
        focus: "Two-Wheeled Inverted Pendulum (TWIP), LQR & MPC Controller",
        link: "https://sites.google.com/view/humanoids-kist/Home?authuser=0",
    },
    {
        role: "Undergraduate Research Intern",
        lab: "Human-System Interaction Research Lab, Hongik University",
        location: "Seoul",
        period: "2022 – 2023",
        focus: "Participated in structural design of haptic, robotic mechanisms",
        link: "https://sites.google.com/view/hsir-lab",
    },
];

export const skills = [
    { category: "Programming", items: ["C++", "CUDA", "Python", "MATLAB"] },
    { category: "Tools", items: ["MuJoCo", "qpOASES", "Git"] },
    { category: "Research Interests", items: ["Whole Body Control (WBC)", "Optimization-based control", "Model Predictive Path Integral", "Wheeled-legged robot"] },
];

export const research = [
    {
        id: "wbc",
        title: "QP-based Whole-Body Control",
        description: "Whole-Body Control for wheeled-legged humanoid systems using Quadratic Programming.",
        details: "This research focuses on developing a robust Whole-Body Control (WBC) framework for wheeled-legged robots. By utilizing Quadratic Programming (QP), we optimize the robot's motion to handle complex tasks while maintaining balance and stability. The framework decouples the control of wheels and legs, allowing for agile maneuvers and stable locomotion on uneven terrain.",
        image: "/research/QP_Overview.png", // Placeholder
        videoId: "K1Mhlr1P4Ls", // Add YouTube video ID here (e.g., "dQw4w9WgXcQ")
    },
    {
        id: "gpu-control",
        title: "GPU Based Optimization Control",
        description: "Model Predictive Path Integral, GPU Dynamics Library (private lib.)",
        details: "We are exploring the use of Graphics Processing Units (GPUs) to accelerate optimization-based control algorithms. This involves implementing Model Predictive Path Integral (MPPI) control and developing a custom GPU dynamics library to achieve real-time performance for high-dimensional robotic systems.",
        image: "/research/GPUARBML_Overview.png", // Placeholder
        videoId: "",
    },
    {
        id: "twip",
        title: "Two Wheeled Inverted Pendulum Control",
        description: "LQR, MPC, MPPI control implementations for balancing and tracking.",
        details: "This project implements Linear Quadratic Regulator (LQR) and Model Predictive Control (MPC) for a Two-Wheeled Inverted Pendulum (TWIP) system. The goal is to achieve stable balancing and accurate trajectory tracking under various disturbances.",
        image: "/research/TWIP_Overview.png", // Placeholder
        videoId: "",
    },
];

export const publications = [
    {
        title: "GPU-Based Parallel Computation of Multi-Set Dynamics for Articulated Robots",
        authors: "**Jechan Jeon**, Yusun Jang, Yonghwan Oh",
        venue: "IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) ",
        year: "2026",
        link: "",
        video: "",
    },
    {
        title: "Whole-Body Stabilization of Wheeled Bipedal Robots via Decoupled Control of Wheels and Legs",
        authors: "**Jechan Jeon**, Jaewoo An, Youngsu Cha, Yonghwan Oh",
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        year: "2025",
        link: "https://ieeexplore.ieee.org/abstract/document/11247552",
        video: "https://www.youtube.com/watch?v=K1Mhlr1P4Ls",
    },
    {
        title: "Decoupled MPC for ZMP-Based Lateral Stability in Two-Wheeled Inverted Pendulum with Roll Joint",
        authors: "Jaewoo An, **Jechan Jeon**, Taehyun Kim, Myo-Taeg Lim, Yonghwan Oh",
        venue: "Annual Conference of the IEEE Industrial Electronics Society (IECON)",
        year: "2025",
        link: "https://doi.org/10.1109/IECON58223.2025.11221125",
        video: "",
    },
    {
        title: "Simultaneous Tracking and Balancing Control of Two-Wheeled Inverted Pendulum with Roll-joint using Dynamic Variance MPPI",
        authors: "Taehyun Kim, **Jechan Jeon**, Myo-Taeg Lim, Yisoo Lee, Yonghwan Oh",
        venue: "IEEE‑RAS International Conference on Humanoid Robots (Humanoids)",
        year: "2024",
        link: "https://doi.org/10.1109/Humanoids58906.2024.10769962",
        video: "https://www.youtube.com/watch?v=-sy3e1E39BU&list=PLKkDro3QC3eEEPF8-vOzm79dhuDBQMeBF&index=4",
    },
    {
        title: "Haptic System to Provide the Realistic Sensation of Virtual Impact",
        authors: "**Jechan Jeon**, Jaeyoung Park",
        venue: "JICS",
        year: "2023",
        link: "https://koreascience.or.kr/article/JAKO202304457770199.page",
        video: "",
    },
];
