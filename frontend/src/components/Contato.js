import React from 'react';

function Contato() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Entre em Contato</h1>
            <p>Estamos a disposição para qualquer duvida pu sugestões. Desde já agradecemos!</p>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control" placeholder="Seu nome" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Assunto</label>
                            <input type="text" className="form-control" placeholder="Assunto" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Seu email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensagem</label>
                            <textarea className="form-control" rows="4" placeholder="Sua mensagem" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3 className="mb-3">Nossa Localização</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.907795712393!2d-74.00601528459252!3d40.7127759793306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b4e2b5f9%3A0xa0b07e6cbdb0b6e4!2sNew%20York%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1649913218472!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            
            <footer className="text-center mt-5 py-3" style={{ backgroundColor: 'black', color: 'white' }}>
                <p>&copy; 2024 iPlace Clone. Todos os direitos reservados.</p>
                <p>
                    <a href="https://wa.me/1234567890" className="mx-2 text-white text-decoration-none">
                        <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i> +55 11 98765-4321
                    </a>
                    |
                    <a href="https://instagram.com" className="mx-2 text-white text-decoration-none">
                        <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i> @iplace_clone
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default Contato;
