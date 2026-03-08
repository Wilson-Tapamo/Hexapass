import React, { useState } from 'react';
import { User, Shield, Key, Bell, Globe, Smartphone, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const tabs = [
        { id: 'personal', label: 'Informations Personnelles', icon: User },
        { id: 'security', label: 'Sécurité & MFA', icon: Shield },
        { id: 'notifications', label: 'Préférences Notifications', icon: Bell },
        { id: 'sessions', label: 'Sessions Actives', icon: Globe },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'personal':
                return (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} key="personal" className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Informations du Profil</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label>Prénom</label>
                                    <input type="text" defaultValue="Jean" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" defaultValue="Dupont" className="form-input" />
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Adresse Email PROFESSIONNELLE</label>
                                    <input type="email" defaultValue="jean.dupont@base44.app" className="form-input" />
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Bio (Optionnel)</label>
                                    <textarea className="form-input" rows="3" placeholder="Parlez-nous de vous..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <button className="btn btn-ghost">Annuler</button>
                            <button className="btn btn-primary">Enregistrer les modifications</button>
                        </div>
                    </motion.div>
                );
            case 'security':
                return (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} key="security" className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Sécurité du Compte</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ padding: '0.75rem', backgroundColor: '#DCFCE7', color: '#166534', borderRadius: '10px' }}>
                                            <Smartphone size={24} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600' }}>Authentification à deux facteurs (MFA)</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Actuellement activée via Google Authenticator.</div>
                                        </div>
                                    </div>
                                    <button className="btn btn-ghost" style={{ color: '#EF4444' }}>Désactiver</button>
                                </div>

                                <button className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
                                    <Key size={18} /> Changer le mot de passe
                                </button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'notifications':
                return (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} key="notifications" className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Préférences de Notification</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { id: 'sso', title: 'Nouvelles connexions SSO', desc: 'Recevoir une alerte quand une nouvelle app est connectée.' },
                                { id: 'security', title: 'Alertes de sécurité', desc: 'Alertes sur les tentatives de connexion suspectes.' },
                                { id: 'updates', title: 'Mises à jour plateforme', desc: 'Informations sur les nouvelles fonctionnalités.' }
                            ].map(pref => (
                                <div key={pref.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{pref.title}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pref.desc}</div>
                                    </div>
                                    <div style={{ width: '40px', height: '24px', backgroundColor: 'var(--primary)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                        <div style={{ width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', right: '3px' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'sessions':
                return (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} key="sessions" className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Sessions Actives</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { device: 'Chrome (Mac OS)', location: 'Douala, CM', status: 'Actuelle', time: 'En ligne' },
                                { device: 'Safari (iPhone 15)', location: 'Yaoundé, CM', status: 'Active', time: 'Il y a 4h' },
                            ].map((session, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-main)', borderRadius: '8px' }}>
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600' }}>{session.device}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{session.location} • {session.time}</div>
                                        </div>
                                    </div>
                                    {session.status === 'Actuelle' ? (
                                        <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600', backgroundColor: 'var(--primary-soft)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Session Actuelle</span>
                                    ) : (
                                        <button className="btn btn-ghost" style={{ color: '#EF4444', padding: '0.4rem' }}><LogOut size={16} /></button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 className="page-title">Profil & Paramètres</h1>
                <p className="page-subtitle">Gérez vos informations personnelles, votre sécurité et vos préférences.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '2rem', alignItems: 'start' }}>
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-soft)',
                            margin: '0 auto 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: 'var(--primary)',
                            fontWeight: '700',
                            border: '4px solid var(--bg-card)'
                        }}>
                            JD
                        </div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Jean Dupont</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>Ingénieur Backend | Douala</p>
                        <button className="btn btn-secondary" style={{ width: '100%' }}>Changer la photo</button>
                    </div>

                    <nav className="card" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="btn btn-ghost"
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    backgroundColor: activeTab === tab.id ? 'var(--primary-soft)' : 'transparent',
                                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: activeTab === tab.id ? '600' : '500'
                                }}
                            >
                                <tab.icon size={18} /> {tab.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                <main style={{ minHeight: '500px' }}>
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </main>
            </div>
        </motion.div>
    );
};

export default Profile;
