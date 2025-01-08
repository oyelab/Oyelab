type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Uncover the Vision",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-shake-hands-line",
        description: "We listen, understand, and dream with you. Every great project begins with a story. We start by diving deep into your goals, uncovering the essence of what you want to achieve. Through collaboration, we craft a strategy tailored to your vision and future growth.",
    },
    {
        id: 2,
        title: "Craft the Experience",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-stack-line",
        description: "With your vision in hand, our creative team transforms it into an intuitive experience. Our designers craft stunning visuals while our developers build the structure, ensuring your platform isn’t just functional, but a seamless journey for users.",
    },
    {
        id: 3,
        title: "Launch & Elevate",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-global-fill",
        description: "Now the world sees what we've built together. We don’t stop at launch. With performance monitoring and continuous optimization, we ensure your platform thrives in the real world — fast, secure, and ready to scale with your success.",
    },
]