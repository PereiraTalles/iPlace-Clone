import React from 'react';

function Sobre() {
    return (
        <div className="container text-center my-5">
            <h1 className="mb-4">Sobre Nós</h1>
            <p className="lead">Bem-vindo à <strong>iPlace Clone</strong>, o seu destino para os melhores produtos Apple.</p>
            
            <img 
                src="https://www.apple.com/newsroom/images/product/apple-news/Apple-BKC-Mumbai-India-media-preview-hero_Full-Bleed-Image.jpg.slideshow-xlarge.jpg" 
                alt="Nossa Loja" 
                className="img-fluid my-4 rounded shadow"
            />
            
            <p className="text-muted">
                Nossa missão é oferecer a melhor experiência com tecnologia Apple, garantindo qualidade e inovação
                em cada produto. Trabalhamos para trazer as últimas novidades com um atendimento excepcional.
            </p>
            
            <h2 className="mt-5">Suporte Técnico</h2>
            <p className="text-muted">Nosso time de especialistas está pronto para ajudar você com qualquer problema técnico. Entre em contato conosco:</p>
            <p><strong>Telefone:</strong> (11) 1234-5678</p>
            <p><strong>Email:</strong> suporte@iplaceclone.com</p>
            
            <h2 className="mt-5">Nossas Lojas</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://www.apple.com/newsroom/images/environments/stores/standard/Apple_Changsha_NewStore_09012021_Full-Bleed-Image.jpg.large.jpg" alt="Loja 1" className="img-fluid rounded shadow" />
                    <p className="mt-2">São Paulo - Av. Paulista, 1000</p>
                </div>
                <div className="col-md-4">
                    <img src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R567.png?resize=672:378&output-format=jpg&output-quality=85&interpolation=progressive-bicubic" alt="Loja 2" className="img-fluid rounded shadow" />
                    <p className="mt-2">Rio de Janeiro - Copacabana, 500</p>
                </div>
                <div className="col-md-4">
                    <img src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R608.png?resize=672:378&output-format=jpg&output-quality=85&interpolation=progressive-bicubic" alt="Loja 3" className="img-fluid rounded shadow" />
                    <p className="mt-2">Belo Horizonte - Shopping Central</p>
                </div>
            </div>
            
            <h2 className="mt-5">Trabalhe Conosco</h2>
            <p className="text-muted">Acreditamos que um ambiente de trabalho inovador e colaborativo faz toda a diferença. Se você deseja fazer parte do nosso time, entre em contato conosco!</p>
            <button className="btn btn-primary">Envie seu currículo</button>
            
            <div className="mt-4">
                <button className="btn btn-primary mx-2">Saiba Mais</button>
                <button className="btn btn-outline-secondary mx-2">Contato</button>
            </div>
        </div>
    );
}

export default Sobre;
