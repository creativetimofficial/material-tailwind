import React from 'react';

export default function LandingContactSection({ children }) {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                {children}
            </div>
        </section>
    );
}
