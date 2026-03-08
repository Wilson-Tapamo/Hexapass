import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    AppWindow,
    ShieldCheck,
    Activity,
    Plus
} from 'lucide-react';
import { ActivityChart } from '../../components/Admin/AdminCharts';

const AdminDashboard = () => {
    const stats = [
        { label: 'Utilisateurs Actifs', value: '1,284', change: '+12%', icon: Users, color: '#5E3BEE' },
        { label: 'Apps Publiées', value: '42', change: '+3', icon: AppWindow, color: '#10B981' },
        { label: 'Alertes Sécurité', value: '0', change: 'Stable', icon: ShieldCheck, color: '#F59E0B' },
        { label: 'Temps de Réponse', value: '48ms', change: '-5ms', icon: Activity, color: '#3B82F6' },
    ];

    return (
        <div className="page-container">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Espace Administrateur</h1>
                    <p className="page-subtitle">Vue d'ensemble de la santé du système et des accès.</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-primary">
                        <Plus size={18} />
                        Nouvelle App
                    </button>
                </div>
            </header>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="stat-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <stat.icon size={24} />
                        </div>
                        <div className="stat-info">
                            <span className="stat-label">{stat.label}</span>
                            <div className="stat-value-group">
                                <span className="stat-value">{stat.value}</span>
                                <span className={`stat-change ${stat.change.includes('+') ? 'positive' : ''}`}>
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="dashboard-grid" style={{ marginTop: '2rem' }}>
                <motion.div
                    className="card"
                    style={{ gridColumn: 'span 2' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Activité des Connexions</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Volume des authentifications sur les 7 derniers jours</p>
                    </div>
                    <ActivityChart />
                </motion.div>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Actions Rapides</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <Users size={18} /> Gérer les Utilisateurs
                        </button>
                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <AppWindow size={18} /> Configurer SSO
                        </button>
                        <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <ShieldCheck size={18} /> Rapport de Sécurité
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
