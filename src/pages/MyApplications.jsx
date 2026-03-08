import React, { useState } from 'react';
import { Search, Filter, AppWindow, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MyApplications = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Design', 'Développement', 'Communication', 'Gestion', 'Documentation'];

    const apps = [
        { id: 1, name: 'Figma', icon: '🎨', category: 'Design', desc: 'Outil de design collaboratif' },
        { id: 2, name: 'GitHub', icon: '💻', category: 'Développement', desc: 'Hébergement de code source' },
        { id: 3, name: 'Slack', icon: '💬', category: 'Communication', desc: 'Messagerie d\'équipe' },
        { id: 4, name: 'Jira', icon: '✅', category: 'Gestion', desc: 'Gestion de projet agile' },
        { id: 5, name: 'Notion', icon: '📝', category: 'Documentation', desc: 'Espace de travail tout-en-un' },
        { id: 6, name: 'Miro', icon: '🖼️', category: 'Design', desc: 'Tableau blanc collaboratif' },
        { id: 7, name: 'Linear', icon: '📊', category: 'Gestion', desc: 'Suivi de tickets moderne' },
        { id: 8, name: 'Vercel', icon: '▲', category: 'Développement', desc: 'Plateforme de déploiement cloud' },
    ];

    const filteredApps = apps.filter(app => {
        const matchesFilter = filter === 'All' || app.category === filter;
        const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header className="page-header">
                <div>
                    <h1 className="page-title">Mes Applications</h1>
                    <p className="page-subtitle">Accédez à tous vos outils en un seul clic.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Rechercher..."
                            style={{ paddingLeft: '2.5rem' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-secondary"><Filter size={16} /> Filtres</button>
                </div>
            </header>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`btn ${filter === cat ? 'btn-primary' : 'btn-ghost'}`}
                        style={{
                            padding: '0.4rem 1rem',
                            fontSize: '0.85rem',
                            border: filter === cat ? 'none' : '1px solid var(--border)'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {filteredApps.map(app => (
                    <motion.div
                        key={app.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="card"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}
                        onClick={() => navigate(`/app/${app.id}`)}
                        whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'var(--bg-main)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.75rem',
                                borderRadius: '15px'
                            }}>
                                {app.icon}
                            </div>
                            <button className="btn btn-ghost" style={{ padding: '0.5rem' }} onClick={(e) => { e.stopPropagation(); alert('Lancement SSO en cours...'); }}><ExternalLink size={18} /></button>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{app.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{app.desc}</p>
                        </div>
                        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-main)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{app.category}</span>
                            <button className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Détails</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MyApplications;
