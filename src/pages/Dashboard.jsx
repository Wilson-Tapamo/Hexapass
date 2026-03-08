import React from 'react';
import {
    LayoutDashboard,
    AppWindow,
    Clock,
    Flame,
    ShieldCheck,
    ChevronRight,
    Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className="card" style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{
                backgroundColor: `${color}15`,
                color: color,
                padding: '0.6rem',
                borderRadius: '10px'
            }}>
                <Icon size={20} />
            </div>
            {trend && (
                <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                    {trend}
                </span>
            )}
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{title}</div>
        <div style={{ fontSize: '1.75rem', fontWeight: '700' }}>{value}</div>
    </div>
);

const ActivityItem = ({ type, title, time, status }) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem 0' }}>
        <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: status === 'success' ? '#DCFCE7' : status === 'warning' ? '#FEF3C7' : '#FEE2E2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: status === 'success' ? '#166534' : status === 'warning' ? '#92400E' : '#991B1B'
        }}>
            <ShieldCheck size={18} />
        </div>
        <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{time}</div>
        </div>
    </div>
);

const Dashboard = () => {
    const navigate = useNavigate();

    const quickAccess = [
        { id: 1, name: 'Figma', icon: 'F', category: 'Design', desc: 'Collaborative interface design tool.' },
        { id: 2, name: 'Notion', icon: 'N', category: 'Documentation', desc: 'All-in-one workspace for notes and docs.' },
    ];

    const activities = [
        { title: 'SSO Login - Figma', time: '10 mins ago', status: 'success' },
        { title: 'Session Expired - AWS Console', time: '2 hours ago', status: 'warning' },
        { title: 'SSO Login - Slack', time: '5 hours ago', status: 'success' },
        { title: 'Failed Login Attempt - Salesforce', time: '1 day ago', status: 'danger' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-container"
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
            <section style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <StatCard title="Active Applications" value="12" icon={AppWindow} color="#5E3BEE" />
                <StatCard title="Pending Requests" value="3" icon={Clock} color="#F59E0B" />
                <StatCard title="Login Streak" value="15 days" icon={Flame} color="#3B82F6" trend="↗ +2" />
                <StatCard title="Security Score" value="92%" icon={ShieldCheck} color="#10B981" trend="↗ +5%" />
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <section>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Quick Access</h2>
                        <button className="btn btn-ghost" style={{ fontSize: '0.85rem', color: 'var(--primary)' }} onClick={() => navigate('/MyApplications')}>View all</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {quickAccess.map((app) => (
                            <div key={app.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        backgroundColor: 'var(--primary-soft)',
                                        color: 'var(--primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '700',
                                        borderRadius: '10px'
                                    }}>
                                        {app.icon}
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-main)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{app.category}</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{app.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{app.desc}</p>
                                </div>
                                <button className="btn btn-secondary" style={{ width: '100%', marginTop: '0.5rem', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', border: 'none' }} onClick={() => navigate(`/app/${app.id}`)}>
                                    Open Application
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Recent Activity</h2>
                    <div className="card" style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {activities.map((activity, idx) => (
                                <ActivityItem key={idx} {...activity} />
                            ))}
                        </div>
                        <button className="btn btn-ghost" style={{ width: '100%', marginTop: '1rem', fontSize: '0.85rem', backgroundColor: 'var(--bg-main)' }}>
                            View full log
                        </button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Dashboard;
