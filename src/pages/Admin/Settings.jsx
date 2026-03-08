import React from 'react';
import { Settings, Globe, Shield, Bell, Database, Save } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminSettings = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Paramètres Systèmes</h1>
                <p style={{ color: 'var(--text-muted)' }}>Configurez les options globales de la plateforme HexaPass.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
                <aside className="card" style={{ padding: '0.5rem', height: 'fit-content' }}>
                    <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', background: 'var(--primary-soft)', color: 'var(--primary)' }}>
                        <Globe size={18} /> Général
                    </button>
                    <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>
                        <Shield size={18} /> Sécurité & Auth
                    </button>
                    <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>
                        <Bell size={18} /> Notifications
                    </button>
                    <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>
                        <Database size={18} /> Base de données
                    </button>
                </aside>

                <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Informations de l'Organisation</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Nom de l'Organisation</label>
                                <input type="text" defaultValue="Base44 Hub" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Domaine Principal</label>
                                <input type="text" defaultValue="base44.app" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Logo URL</label>
                                <input type="text" defaultValue="https://hexa-pass-hub.base44.app/logo.png" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                            </div>
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Paramètres Globaux</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Autoriser l'Auto-Inscription</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Permettre aux nouveaux utilisateurs de créer leur compte eux-mêmes.</div>
                                </div>
                                <div style={{ width: '40px', height: '24px', backgroundColor: 'var(--border)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                    <div style={{ width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: '3px' }}></div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Mode Maintenance</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Désactiver l'accès à la plateforme pour tous les non-administrateurs.</div>
                                </div>
                                <div style={{ width: '40px', height: '24px', backgroundColor: 'var(--border)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                    <div style={{ width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: '3px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button className="btn btn-primary"><Save size={18} /> Sauvegarder les Paramètres</button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default AdminSettings;
