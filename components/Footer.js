import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">My Website</h3>
                        <p className="text-gray-300">A Simple Website ni Idol</p>
                    </div>
                    <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
            
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300">Email: your@email.com</p>
                                <p className="text-gray-300">GitHub: @yourusername</p>
                            </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">&copy; 2025 My Website. Built by Kwanggols</p>
                </div>
            </div>
        </footer>
    )
    }