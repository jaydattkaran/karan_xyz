import React, { useState, useEffect } from 'react';
import { Twitter, Linkedin, Github, Activity } from 'lucide-react'

const Contact = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
        type: null,
        message: ''
    });

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (status.type) {
            timeoutId = setTimeout(() => {
                setStatus({ type: null, message: '' });
            }, 5000);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [status]);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        })
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully!'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Failed to send message.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className='flex flex-col 2xl:flex-row justify-around bg-[#050816] text-stone-200 overflow-x-hidden px-4 py-10'>
                <div>
                    <div>
                        <h2
                            className="2xl:text-7xl text-2xl font-bold leading-none text-red-50"
                        >Have an awesome idea? <br />Let's bring it to life.</h2>
                        <p className='mt-4 2xl:text-3xl text-xl font-semibold leading-none'>I'm available for freelance work. I'm accepting new projects.</p>
                    </div>
                    {status.type && (
                        <div className={`
                            mt-4 p-3 rounded w-[20rem]
                            ${status.type === 'success' ? 'bg-red-50 text-green-600 font-bold' : 'bg-red-600'}
                        `}>
                            {status.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className='py-20 flex flex-col justify-center items-start gap-10' >
                        <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 w-full'>
                            <div className='relative z-0'>
                                <input
                                    type='text'
                                    id='name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className='peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0'
                                    placeholder=''
                                    required
                                    disabled={isLoading}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                                >
                                    Your name
                                </label>
                            </div>
                            <div className='relative z-0'>
                                <input
                                    type='email'
                                    id='email'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className='peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0'
                                    placeholder=''
                                    required
                                    disabled={isLoading}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                                >
                                    Your email
                                </label>
                            </div>
                        </div>
                        <div className='relative z-0 sm:col-span-2 w-full'>
                            <textarea
                                id='message-textarea'
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className='peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 mt-4 focus:outline-none focus:ring-0'
                                placeholder=''
                                required
                                disabled={isLoading}
                            />
                            <input
                                type='text'
                                id='message'
                                name='message'
                                value={formData.message}
                                readOnly
                                style={{ display: 'none'}}
                            />
                            <label
                                htmlFor="message-textarea"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                            >
                                Your message
                            </label>
                        </div>
                        <button
                            className='mt-4 border-none bg-gray-800 hover:bg-red-50 text-red-50 hover:text-gray-800 duration-200 px-6 py-3 rounded-full text-xl font-bold cursor-pointer'
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className='flex items-center justify-center'>
                                    <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'>
                                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                    </svg>
                                    Sending...
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
                <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
                    <div className="space-y-3 ">
                        <h4 className="text-body-1 2xl:text-4xl font-semibold">Contact Details</h4>
                        <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
                            <a
                                href="mailto:karanjaydatt03@gmail.com"
                                className="group relative w-fit cursor-pointer"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>karanjaydatt03@gmail.com</span>
                                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                            </a>

                        </div>
                    </div>
                    <div className="space-y-3 ">
                        <h4 className="text-body-1 2xl:text-4xl font-semibold">My Digital Spaces</h4>
                        <div className="space-y-3 text-body-2 2xl:text-3xl">
                            <a
                                href="https://bento.me/jaydatt"
                                className="group flex items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Activity color="#666" />
                                <div className="relative">
                                    <span>Bento</span>
                                    <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                            <a
                                href="https://github.com/jaydattkaran"
                                className="group flex items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github color="#666" />
                                <div className="relative">
                                    <span>Github</span>
                                    <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jaydattkaran/"
                                className="group group flex w-fit items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin color="#666" />
                                <div className="relative">
                                    <span>LinkedIn</span>
                                    <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                            <a
                                href="https://x.com/jaydattkaran"
                                className="group flex items-center space-x-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Twitter color="#666" />
                                <div className="relative">
                                    <span>Twitter</span>
                                    <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-3 ">
                        <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
                        <div className="space-y-2 text-body-2 2xl:text-3xl">
                            <p>
                                Bhopal, India <br></br>
                                {time}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact