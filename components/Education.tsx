import React from 'react';

export const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-light text-slate-900 mb-4">Education & Certifications</h2>
                    <div className="w-12 h-1 bg-engineer-blue"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-medium text-slate-900 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-8 border-l border-slate-200 ml-1 pl-8">
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-300 bg-white"></div>
                                <h4 className="text-lg font-medium text-slate-900">Bachelors in Computer Science</h4>
                                <p className="text-slate-600 font-light mb-1">COMSATS University Islamabad</p>
                                <p className="text-sm font-mono text-slate-400">2021 — 2025</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-300 bg-white"></div>
                                <h4 className="text-lg font-medium text-slate-900">Intermediate</h4>
                                <p className="text-slate-600 font-light mb-1">Pakistan Air Force College Sargodha</p>
                                <p className="text-sm font-mono text-slate-400">2018 — 2020</p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-xl font-medium text-slate-900 mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 bg-engineer-blue rounded-full"></span>
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            <div className="p-6 bg-slate-50 border border-slate-200">
                                <h4 className="text-base font-medium text-slate-900 mb-1">Machine Learning Specialization</h4>
                                <p className="text-sm text-slate-500 font-mono">DeepLearning.AI, Stanford University</p>
                            </div>
                            <div className="p-6 bg-slate-50 border border-slate-200">
                                <h4 className="text-base font-medium text-slate-900 mb-1">Advanced Learning Algorithms</h4>
                                <p className="text-sm text-slate-500 font-mono">DeepLearning.AI, Stanford University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
