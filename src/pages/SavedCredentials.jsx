import React from 'react';
import { Key, Eye, Copy, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SavedCredentials = () => {
    const credentials = [
        { id: 1, name: 'GitHub Personal', username: 'jd@entreprise.com', lastUsed: 'Il y a 2h' },
        { id: 2, name: 'AWS Console', username: 'admin-prod', lastUsed: 'Hier' },
        { id: 3, name: 'Vercel Deployment', username: 'jean.dupont', lastUsed: 'Il y a 3 jours' },
        { id: 4, name: 'Slack Workspace', username: 'jd.slack', lastUsed: 'Il y a 10 min' },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Identifiants Enregistrés</h1>
                <p style={{ color: 'var(--text-muted)' }}>Gérez vos mots de passe et secrets en toute sécurité.</p>
            </header>

            <section className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Vos Secrets</h2>
                    <button className="btn btn-primary">Ajouter un Secret</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {credentials.map(cred => (
                        <div key={cred.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '1.25rem',
                            borderRadius: 'var(--radius-lg)',
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--border)'
                        }}>
                            <div style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '12px' }}>
                                <Key size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600', fontSize: '1.05rem' }}>{cred.name}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Nom d'utilisateur: {cred.username}</div>
                            </div>
                            <div style={{ textAlign: 'right', display: 'flex', gap: '0.5rem' }}>
                                <button className="btn btn-ghost" title="Afficher"><Eye size={18} /></button>
                                <button className="btn btn-ghost" title="Copier"><Copy size={18} /></button>
                                <button className="btn btn-ghost" title="Modifier"><Edit size={18} /></button>
                                <button className="btn btn-ghost" title="Supprimer" style={{ color: '#EF4444' }}><Trash2 size={18} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default SavedCredentials;
