import React from 'react';
import { User, Shield, Key, Bell, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Profil & Sécurité</h1>
                <p style={{ color: 'var(--text-muted)' }}>Gérez vos informations personnelles et vos paramètres de sécurité.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-soft)',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.5rem',
                            color: 'var(--primary)',
                            border: '4px solid white',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            JD
                        </div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Jean Dupont</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Développeur Fullstack @ Base44</p>
                        <button className="btn btn-secondary" style={{ width: '100%' }}>Changer la photo</button>
                    </div>

                    <nav className="card" style={{ padding: '0.5rem' }}>
                        <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', color: 'var(--primary)', background: 'var(--primary-soft)' }}>
                            <User size={18} /> Informations Personnelles
                        </button>
                        <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <Shield size={18} /> Sécurité & MFA
                        </button>
                        <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <Bell size={18} /> Préférences Notifications
                        </button>
                        <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <Globe size={18} /> Sessions Actives
                        </button>
                    </nav>
                </section>

                <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Informations Personnelles</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Prénom</label>
                                <input type="text" defaultValue="Jean" className="btn" style={{ border: '1px solid var(--border)', textAlign: 'left', fontWeight: '400' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Nom</label>
                                <input type="text" defaultValue="Dupont" className="btn" style={{ border: '1px solid var(--border)', textAlign: 'left', fontWeight: '400' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Adresse Email</label>
                                <input type="email" defaultValue="jean.dupont@base44.app" className="btn" style={{ border: '1px solid var(--border)', textAlign: 'left', fontWeight: '400' }} />
                            </div>
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Sécurité du Compte</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Authentification à deux facteurs (MFA)</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ajoutez une couche de sécurité supplémentaire à votre compte.</div>
                                </div>
                                <div style={{ width: '40px', height: '24px', backgroundColor: 'var(--primary)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                    <div style={{ width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', right: '3px' }}></div>
                                </div>
                            </div>

                            <button className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
                                <Key size={18} /> Changer le mot de passe
                            </button>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button className="btn btn-ghost">Annuler</button>
                        <button className="btn btn-primary">Enregistrer les modifications</button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Profile;
