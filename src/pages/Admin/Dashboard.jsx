import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    AppWindow,
    ShieldCheck,
    Activity,
    Plus,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import { ActivityChart } from '../../components/Admin/AdminCharts';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const stats = [
        { label: 'Utilisateurs Actifs', value: '1,284', change: '+12%', icon: Users, color: '#5E3BEE', trend: 'up' },
        { label: 'Apps Publiées', value: '42', change: '+3', icon: AppWindow, color: '#10B981', trend: 'up' },
        { label: 'Alertes Sécurité', value: '0', change: 'Stable', icon: ShieldCheck, color: '#F59E0B', trend: 'neutral' },
        { label: 'Temps de Réponse', value: '48ms', change: '-5ms', icon: Activity, color: '#3B82F6', trend: 'up' },
    ];

    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header className="page-header">
                <div>
                    <h1 className="page-title">Espace Administrateur</h1>
                    <p className="page-subtitle">Vue d'ensemble de la santé du système et des accès.</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-primary" onClick={() => navigate('/AdminApplications')}>
                        <Plus size={18} /> Nouvelle Application
                    </button>
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ backgroundColor: `${stat.color}15`, color: stat.color, padding: '0.6rem', borderRadius: '10px' }}>
                                <stat.icon size={22} />
                            </div>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.2rem',
                                color: stat.trend === 'up' ? '#10B981' : stat.trend === 'down' ? '#EF4444' : 'var(--text-muted)'
                            }}>
                                {stat.trend === 'up' && <ArrowUpRight size={14} />}
                                {stat.trend === 'down' && <ArrowDownRight size={14} />}
                                {stat.change}
                            </span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{stat.label}</div>
                            <div style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '0.25rem' }}>{stat.value}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <motion.div
                    className="card"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ padding: '1.5rem' }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Activité des Connexions</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Volume des authentifications sur les 7 derniers jours</p>
                    </div>
                    <div style={{ height: '350px' }}>
                        <ActivityChart />
                    </div>
                </motion.div>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ padding: '1.5rem' }}
                >
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Actions Rapides</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem 1rem' }} onClick={() => navigate('/AdminUsers')}>
                            <Users size={18} /> Gérer les Utilisateurs
                        </button>
                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem 1rem' }} onClick={() => navigate('/AdminApplications')}>
                            <AppWindow size={18} /> Configurer SSO
                        </button>
                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem 1rem' }}>
                            <ShieldCheck size={18} /> Rapport de Sécurité
                        </button>
                    </div>

                    <div style={{ marginTop: '2.5rem', padding: '1.25rem', backgroundColor: 'var(--primary-soft)', borderRadius: '15px' }}>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>Conseil Admin</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                            Vous avez 3 demandes d'accès en attente d'approbation pour Google Workspace.
                        </p>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '0.85rem' }}>Examiner les demandes</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
