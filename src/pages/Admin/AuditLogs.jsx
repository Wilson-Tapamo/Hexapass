import React from 'react';
import { ScrollText, Search, Filter, Download, Activity, AlertCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLogs = () => {
    const logs = [
        { id: 1, type: 'success', event: 'Connexion SSO réussie', user: 'jean.dupont@base44.app', ip: '192.168.1.45', app: 'Figma', time: '08/03/2026 10:45' },
        { id: 2, type: 'warning', event: 'Échec de connexion (MDP incorrect)', user: 'alice.m@entreprise.fr', ip: '82.234.12.90', app: 'Slack', time: '08/03/2026 10:30' },
        { id: 3, type: 'info', event: 'Changement de politique MFA', user: 'admin.system@base44.app', ip: '10.0.0.1', app: 'Système', time: '08/03/2026 09:12' },
        { id: 4, type: 'error', event: 'Accès non autorisé détecté', user: 'inconnu', ip: '45.182.201.5', app: 'Admin Panel', time: '07/03/2026 23:55' },
        { id: 5, type: 'success', event: 'Nouvelle application publiée', user: 'marc.admin@base44.app', ip: '192.168.1.12', app: 'GitHub', time: '07/03/2026 18:20' },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>Journaux d'Audit</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Historique complet des actions effectuées sur la plateforme.</p>
                </div>
                <button className="btn btn-secondary"><Download size={18} /> Exporter les Logs</button>
            </header>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input type="text" placeholder="Rechercher par utilisateur, IP, événement..." style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.8rem', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }} />
                </div>
                <button className="btn btn-secondary"><Filter size={18} /> Filtres Avancés</button>
            </div>

            <section className="card" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left', backgroundColor: 'var(--bg-main)' }}>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Événement</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Utilisateur / IP</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Application</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Date & Heure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        {log.type === 'success' && <Activity size={18} color="#10B981" />}
                                        {log.type === 'warning' && <AlertCircle size={18} color="#F59E0B" />}
                                        {log.type === 'error' && <AlertCircle size={18} color="#EF4444" />}
                                        {log.type === 'info' && <Info size={18} color="#3B82F6" />}
                                        <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{log.event}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ fontSize: '0.9rem' }}>{log.user}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{log.ip}</div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <span style={{ backgroundColor: 'var(--bg-main)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' }}>{log.app}</span>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    {log.time}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </motion.div>
    );
};

export default AdminLogs;
