import React from 'react';
import { Bell, Shield, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Notifications = () => {
    const notifications = [
        { id: 1, type: 'security', title: 'Nouvelle connexion détectée', desc: 'Une connexion a été établie depuis un nouvel appareil à Paris.', time: 'Il y a 10 min', icon: Shield, color: '#F59E0B' },
        { id: 2, type: 'info', title: 'Mise à jour du système', desc: 'HexaPass a été mis à jour vers la version 2.4.0.', time: 'Il y a 2h', icon: Info, color: '#3B82F6' },
        { id: 3, type: 'warning', title: 'Expiration de mot de passe', desc: 'Votre mot de passe GitHub expirera dans 3 jours.', time: 'Hier', icon: AlertTriangle, color: '#EF4444' },
        { id: 4, type: 'success', title: 'Application ajoutée', desc: 'L\'administrateur vous a donné accès à Linear.', time: 'Il y a 2 jours', icon: CheckCircle, color: '#10B981' },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Notifications</h1>
                <p style={{ color: 'var(--text-muted)' }}>Restez informé des activités de votre compte.</p>
            </header>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Flux récent</h2>
                    <button className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>Tout marquer comme lu</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {notifications.map((notif, idx) => (
                        <div key={notif.id} style={{
                            display: 'flex',
                            gap: '1rem',
                            padding: '1.5rem',
                            borderBottom: idx === notifications.length - 1 ? 'none' : '1px solid var(--border)',
                            backgroundColor: idx < 2 ? 'var(--primary-soft)' : 'transparent',
                            transition: 'background-color 0.2s'
                        }}>
                            <div style={{ color: notif.color }}>
                                <notif.icon size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ fontWeight: '600' }}>{notif.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{notif.time}</div>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>{notif.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Notifications;
