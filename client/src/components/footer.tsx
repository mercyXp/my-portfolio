import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";


function Footer(){
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
    ];

    return(
        <footer>
            <div>
                <div>
                    <span>Mercy</span>
                </div>
                <p>Building modern web experiences with passion and precision. Let`s create something amazing together.</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <nav>
                        {quickLinks.map((link) => (
                            <Link key={link.href} href={link.href} >
                                 {link.label}
                            </Link>
                        ))}
                </nav>
            </div>
            <div>
                <h3>Connect</h3>
                <div>
                    <button>
                        <Github />
                    </button>
                    <button>
                        <Linkedin />
                    </button>
                    <button>
                        <Mail />
                    </button>
                    <button>
                        <Twitter />
                    </button>
                </div>
                <p>munzenzimercy9@gmail.com</p>
            </div>
            <div>
                <p> ©{currentYear} Mercy Munzenzi. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;