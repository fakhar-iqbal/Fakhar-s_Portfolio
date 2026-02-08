import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

interface Job {
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
}

const jobs: Job[] = [
    {
        company: 'Orixity Solutions, Islamabad',
        role: 'Junior AI/ML Engineer',
        period: 'Jan 2024 — Jan 2026',
        description: 'Engaged in end-to-end ML projects, from data collection to model deployment. Implemented MLOps practices for continuous integration and delivery of machine learning models. Built predictive models to estimate maintenance schedules and equipment lifespans.',
        tags: ['MLOps', 'CI/CD', 'Predictive Modeling', 'Data Collection'],
    },
    {
        company: 'FirstExist Solutions, Botswana (Remote)',
        role: 'AI Solutions Expert',
        period: 'Feb 2023 — Jan 2024',
        description: 'Developed machine learning solutions for mining machinery and industrial data. Built predictive models to estimate maintenance schedules and equipment lifespans.',
        tags: ['Machine Learning', 'Industrial Data', 'Remote', 'Predictive Analytics'],
    },
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-32 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <SectionHeading number="01" title="Professional Experience" />

                <div className="space-y-12">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="group grid md:grid-cols-12 gap-8 p-8 bg-white border border-slate-200 hover:border-blue-500 transition-all duration-500 hover:shadow-xl rounded-sm transform hover:-translate-x-1"
                        >
                            <div className="md:col-span-3">
                                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1 group-hover:text-blue-500 transition-colors">
                                    {job.period}
                                </span>
                                <h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
                                    {job.company}
                                </h3>
                            </div>
                            <div className="md:col-span-9">
                                <h4 className="text-xl font-light text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                                    {job.role}
                                </h4>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light group-hover:text-slate-700 transition-colors">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-mono rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
