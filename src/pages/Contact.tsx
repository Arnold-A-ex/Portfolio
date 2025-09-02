import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [color, setColor] = useState("");
    const page: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        },
        exit: { opacity: 0, y: 20, transition: { duration: 0.25 } }
    };

    const item: Variants = {
        hidden: {opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };

    const fadeInRight: Variants = {
        hidden: {opacity: 0, x: -15 },
        show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeIn" } }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("https://formspree.io/f/mpwjqona", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (response.ok) {
            setColor("accent");
            setStatus("Message Sent Successfully");
            setFormData({name: "", email: "", message: ""});
        } else {
            setColor("danger");
            setStatus("Oops something went wrong!");
        }
    };

    useEffect(() => {
            scrollTo(0, 0);
        }, [])

    return (
        <motion.section
            variants={ page }
            initial="hidden"
            animate="show"
            exit="exit"
            className="py-16 px-4"
        >
            <motion.div variants={ page } className="container mx-auto max-w-2xl">
                <motion.h2 variants={ fadeInRight } className="text-4xl font-bold text-center text-primary mb-8">Get In Touch</motion.h2>
                <motion.p variants={ fadeInRight } className="text-center text-secondary mb-8">
                    I'm always open to new opportunities and collaborations. Feel free to send me a message!
                </motion.p>
                <motion.form variants={ page } onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <motion.div variants={ page } className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-secondary font-semibold">Name</label>
                        <motion.input
                            variants={ fadeInRight }
                            type="text"
                            id="name"
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }
                            className="p-3 rounded-md bg-card_bg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Name"
                            required
                        />
                    </motion.div>
                    <motion.div variants={ page } className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-secondary font-semibold">Email</label>
                        <motion.input
                            variants={ fadeInRight }
                            type="email"
                            id="email"
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange }
                            className="p-3 rounded-md bg-card_bg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="your.email@example.com"
                            required
                        />
                    </motion.div>
                    <motion.div variants={ page } className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-secondary font-semibold">Message</label>
                        <motion.textarea
                            variants={ fadeInRight }
                            id="message"
                            name="message"
                            value={ formData.message }
                            onChange={ handleChange }
                            rows={6}
                            className="p-3 rounded-md bg-card_bg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your message here..."
                            required
                        />
                    </motion.div>
                    { status && <motion.p variants={ fadeInRight } className={`text-center text-${color}`}>
                        Message sent successfully
                    </motion.p>}
                    <motion.button
                        variants={ item }
                        type="submit"
                        className="bg-accent text-background font-bold py-3 px-6 rounded-md hover:bg-secondary transition-colors duration-300"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </motion.section>
    );
};

export default Contact;