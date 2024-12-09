import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm py-6 ">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
                <div>
                    <h5 className="font-bold text-white mb-2 cursor-pointer ">AbeBooks</h5>
                    <p>Books, art & collectibles</p>
                </div>
                <div>
                    <h5 className="font-bold text-white mb-2 cursor-pointer ">Amazon Web Services</h5>
                    <p>Scalable Cloud Computing Services</p>
                </div>
                <div>
                    <h5 className="font-bold text-white mb-2 cursor-pointer ">Audible</h5>
                    <p>Download Audio Books</p>
                </div>
                <div>
                    <h5 className="font-bold text-white mb-2 cursor-pointer ">IMDb</h5>
                    <p>Movies, TV & Celebrities</p>
                </div>
                <div>
                    <h5 className="font-bold text-white mb-2 cursor-pointer ">Amazon Business</h5>
                    <p>Everything For Your Business</p>
                </div>
                <div>
                    <h5 className="font-bold text-white mb-2 cursor-pointer ">Amazon Prime Music</h5>
                    <p>100 million songs, ad-free</p>
                    <p>Over 15 million podcast episodes</p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                <p>
                    <a href="#" className="text-gray-400 hover:underline">
                        Conditions of Use & Sale
                    </a>{' '}
                    |{' '}
                    <a href="#" className="text-gray-400 hover:underline">
                        Privacy Notice
                    </a>{' '}
                    |{' '}
                    <a href="#" className="text-gray-400 hover:underline">
                        Interest-Based Ads
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer
