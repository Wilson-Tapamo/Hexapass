import React from 'react';
import { LayoutDashboard, AppWindow, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="card" style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
            backgroundColor: `${color}15`,
            color: color,
            padding: '0.75rem',
            borderRadius: '12px'
        }}>
            <Icon size={24} />
        </div>
        <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{title}</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>{value}</div>
        </div>
    </div>
);

const Dashboard = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    const recentApps = [
        { name: 'Figma', icon: '🎨', category: 'Design', status: 'Active' },
        { name: 'GitHub', icon: '💻', category: 'Développement', status: 'Active' },
        { name: 'Slack', icon: '💬', category: 'Communication', status: 'Active' },
        { name: 'Jira', icon: '✅', category: 'Gestion', status: 'Active' },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
            <header>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Bonjour, Jean 👋</h1>
                <p style={{ color: 'var(--text-muted)' }}>Voici un aperçu de vos accès et applications.</p>
            </header>

            <section style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <StatCard title="Total Applications" value="24" icon={AppWindow} color="#5E3BEE" />
                <StatCard title="Connexions SSO" value="12" icon={ShieldCheck} color="#10B981" />
                <StatCard title="Alertes Sécurité" value="0" icon={Zap} color="#F59E0B" />
                <StatCard title="Temps d'Action" value="1.2s" icon={LayoutDashboard} color="#3B82F6" />
            </section>

            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Applications Récemment Utilisées</h2>
                    <button className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>Voir tout</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {recentApps.map((app, idx) => (
                        <motion.div key={idx} variants={item} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                backgroundColor: 'var(--bg-main)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                borderRadius: '12px'
                            }}>
                                {app.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600' }}>{app.name}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{app.category}</div>
                            </div>
                            <div style={{
                                padding: '0.25rem 0.75rem',
                                backgroundColor: '#DCFCE7',
                                color: '#166534',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                            }}>
                                {app.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Dashboard;
