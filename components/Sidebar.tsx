import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const SilverGradientText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 ${className}`}>
        {children}
    </span>
);



const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
    <li className='group'>
        <a href={href} target="_blank" rel="noreferrer" className="block text-neutral-400 transition-colors hover:text-white">
            <Icon size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        </a>
    </li>
)


const Sidebar = () => (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 p-6 pt-12">
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8 overflow-hidden rounded-full w-32 h-32 border-2 border-neutral-800 relative z-20">
                    <Image
                        src="/me.jpeg"
                        alt="Martin Tembo"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        priority
                    />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    <SilverGradientText>Martin Tembo</SilverGradientText>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-200 sm:text-xl">
                    Full Stack & AI Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-neutral-400">
                    I build scalable digital architectures and intelligent automated systems for the future web and mobile applications.
                </p>
            </motion.div>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    {['About', 'Experience', 'Projects'].map((item, i) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="group flex items-center py-3">
                                <span className="nav-indicator mr-4 h-px w-8 bg-neutral-600 transition-all group-hover:w-16 group-hover:bg-white" />
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white">
                                    {item}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex items-center gap-5 lg:mt-0"
            aria-label="Social media"
        >
            <SocialIcon href="https://github.com/martin-codegene" icon={Github} />
            <SocialIcon href="https://www.linkedin.com/in/martin-tembo-3844b3186" icon={Linkedin} />
            <SocialIcon href="mailto:martin.codegene@gmail.com" icon={Mail} />
        </motion.ul>
    </header>
);


export default Sidebar;
