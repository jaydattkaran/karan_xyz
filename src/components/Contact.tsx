import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
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
            <section className='flex flex-row justify-around bg-[#050816] text-stone-200 overflow-x-hidden px-4 py-20'>
                <div>
                    <div>
                        <h2
                            className="2xl:text-7xl font-bold leading-none text-red-50"
                        >Have an awesome idea? <br />Let's bring it to life.</h2>
                        <p className='mt-4 2xl:text-3xl font-semibold leading-none'>I'm available for freelance work. I'm accepting new projects.</p>
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
                        <div className='flex flex-row gap-10'>
                            <div>
                                <input
                                    type='text'
                                    id='name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className='border-b-2 focus:outline-none text-4xl font-mono px-4'
                                    placeholder='Your name'
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    id='email'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className='border-b-2 focus:outline-none text-4xl font-mono px-4'
                                    placeholder='Your email'
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type='text'
                                id='message'
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className='border-b-2 focus:outline-none text-4xl font-mono px-4'
                                placeholder='Your message'
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <button 
                            className='mt-4 border-none bg-gray-800 px-6 py-2 rounded-md text-xl font-bold cursor-pointer'
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
                <div>Details</div>
            </section>
        </>
    )
}

export default Contact