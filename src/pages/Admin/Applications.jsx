import React from 'react';
import { Plus, Search, Filter, AppWindow, Settings2, Trash2, Edit } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminApplications = () => {
    const apps = [
        { id: 1, name: 'Figma', category: 'Design', type: 'SAML', users: 124, status: 'Active' },
        { id: 2, name: 'GitHub', category: 'Dev', type: 'OAuth 2.0', users: 85, status: 'Active' },
        { id: 3, name: 'Slack', category: 'Comm', type: 'SAML', users: 432, status: 'Active' },
        { id: 4, name: 'Google Workspace', category: 'Productivité', type: 'Google', users: 1284, status: 'Active' },
        { id: 5, name: 'Zoom', category: 'Comm', type: 'Basic', users: 310, status: 'Inactive' },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>Gestion des Applications</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Configurez et surveillez l'accès aux applications d'entreprise.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> Nouvelle Application</button>
            </header>

            <section className="card" style={{ padding: 0 }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="text" placeholder="Rechercher une app..." style={{ width: '100%', padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem' }} />
                    </div>
                    <button className="btn btn-secondary"><Filter size={16} /> Filtres</button>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left', backgroundColor: 'var(--bg-main)' }}>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Application</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Type</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Utilisateurs</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Statut</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apps.map((app) => (
                            <tr key={app.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--bg-main)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <AppWindow size={18} color="var(--primary)" />
                                        </div>
                                        <span style={{ fontWeight: '500' }}>{app.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem' }}>{app.type}</td>
                                <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem' }}>{app.users}</td>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <span style={{
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        backgroundColor: app.status === 'Active' ? '#DCFCE7' : '#FEE2E2',
                                        color: app.status === 'Active' ? '#166534' : '#991B1B'
                                    }}>
                                        {app.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                        <button className="btn btn-ghost" style={{ padding: '0.4rem' }}><Edit size={16} /></button>
                                        <button className="btn btn-ghost" style={{ padding: '0.4rem' }}><Settings2 size={16} /></button>
                                        <button className="btn btn-ghost" style={{ padding: '0.4rem', color: '#EF4444' }}><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </motion.div>
    );
};

export default AdminApplications;
