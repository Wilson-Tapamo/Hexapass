import React from 'react';
import { Shield, Users, AppWindow, Activity, AlertCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const stats = [
        { title: 'Utilisateurs Actifs', value: '1,284', change: '+12%', icon: Users, color: '#3B82F6' },
        { title: 'Applications Publiées', value: '42', change: '+2', icon: AppWindow, color: '#8B5CF6' },
        { title: 'Tentatives SSO (24h)', value: '8,432', change: '+5%', icon: Activity, color: '#10B981' },
        { title: 'Alertes Système', value: '3', change: '-50%', icon: AlertCircle, color: '#EF4444' },
    ];

    const recentLogs = [
        { user: 'Alice Martin', Action: 'Connexion SSO', App: 'Figma', time: 'Il y a 2 min' },
        { user: 'Bob Dupont', Action: 'Changement de mot de passe', App: 'Système', time: 'Il y a 15 min' },
        { user: 'Charlie Durand', Action: 'Accès refusé', App: 'Admin Panel', time: 'Il y a 45 min' },
        { user: 'Admin System', Action: 'Nouvelle Application', App: 'GitHub', time: 'Il y a 1h' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
            <header>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Espace Administrateur</h1>
                <p style={{ color: 'var(--text-muted)' }}>Gestion globale des accès et de la sécurité.</p>
            </header>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {stats.map((stat, idx) => (
                    <div key={idx} className="card" style={{ position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ backgroundColor: `${stat.color}15`, color: stat.color, padding: '0.5rem', borderRadius: '10px' }}>
                                <stat.icon size={24} />
                            </div>
                            <span style={{ fontSize: '0.75rem', color: stat.change.startsWith('+') ? '#10B981' : '#EF4444', fontWeight: '600', backgroundColor: stat.change.startsWith('+') ? '#DCFCE7' : '#FEE2E2', padding: '0.2rem 0.5rem', borderRadius: '10px' }}>
                                {stat.change}
                            </span>
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{stat.title}</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '0.25rem' }}>{stat.value}</div>
                    </div>
                ))}
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <section className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Activités Récentes</h2>
                        <button className="btn btn-ghost" style={{ fontSize: '0.8rem' }}>Exporter</button>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left' }}>
                                <th style={{ padding: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500' }}>Utilisateur</th>
                                <th style={{ padding: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500' }}>Action</th>
                                <th style={{ padding: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500' }}>Application</th>
                                <th style={{ padding: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500' }}>Temps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentLogs.map((log, idx) => (
                                <tr key={idx} style={{ borderBottom: idx === recentLogs.length - 1 ? 'none' : '1px solid var(--border)' }}>
                                    <td style={{ padding: '1rem 0', fontSize: '0.9rem', fontWeight: '500' }}>{log.user}</td>
                                    <td style={{ padding: '1rem 0', fontSize: '0.9rem' }}>{log.Action}</td>
                                    <td style={{ padding: '1rem 0', fontSize: '0.9rem' }}>
                                        <span style={{ backgroundColor: 'var(--bg-main)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{log.App}</span>
                                    </td>
                                    <td style={{ padding: '1rem 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{log.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Action Rapide</h2>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Ajouter une Application</button>
                    <button className="btn btn-secondary" style={{ width: '100%' }}>Créer un Utilisateur</button>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
                    <div style={{ backgroundColor: 'var(--primary-soft)', padding: '1rem', borderRadius: '12px', color: 'var(--primary)' }}>
                        <div style={{ fontWeight: '600', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Shield size={16} /> Rapport Sécurité
                        </div>
                        <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Votre score de sécurité est de 98%. 2 nouvelles mises à jour sont disponibles.</p>
                        <button className="btn btn-ghost" style={{ padding: '0.5rem 0', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>
                            Consulter <ArrowUpRight size={14} />
                        </button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default AdminDashboard;
