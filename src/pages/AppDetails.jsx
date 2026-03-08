import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Shield, Info, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data based on ID
    const app = {
        name: id === 'figma' ? 'Figma' : 'Application',
        icon: '🎨',
        category: 'Design',
        desc: 'Figma est l\'outil de conception d\'interface collaboratif par excellence. Il permet de créer, tester et livrer des designs dans un environnement cloud partagé.',
        status: 'Connecté (SSO)',
        lastSync: 'Il y a 5 min',
        publisher: 'Figma Inc.',
        permissions: ['Vues des fichiers', 'Édition collaborative', 'Accès API']
    };

    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <button onClick={() => navigate(-1)} className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>
                <ArrowLeft size={18} /> Retour
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <section className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'var(--bg-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            borderRadius: '20px'
                        }}>
                            {app.icon}
                        </div>
                        <div>
                            <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>{app.name}</h1>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Info size={14} /> {app.category}
                                </span>
                                <span style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <CheckCircle size={14} /> {app.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                            Ouvrir l'Application <ExternalLink size={18} />
                        </button>
                        <button className="btn btn-secondary">Paramètres SSO</button>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Description</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{app.desc}</p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Permissions de l'Utilisateur</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {app.permissions.map((p, idx) => (
                                <span key={idx} style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: 'var(--bg-main)',
                                    borderRadius: '8px',
                                    fontSize: '0.85rem',
                                    border: '1px solid var(--border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Shield size={14} color="var(--primary)" /> {p}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.25rem' }}>Détails de Sécurité</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Éditeur</span>
                                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{app.publisher}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Dernière Synchro</span>
                                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{app.lastSync}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Type d'Auth</span>
                                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>SAML 2.0</span>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'var(--primary-soft)', border: 'none' }}>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>Besoin d'Aide ?</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.8, marginBottom: '1.25rem' }}>
                            Si vous rencontrez des problèmes pour vous connecter à cette application, veuillez contacter le support informatique.
                        </p>
                        <button className="btn btn-primary" style={{ width: '100%', backgroundColor: 'var(--primary)' }}>Ouvrir un Ticket</button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default AppDetails;
