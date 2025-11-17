import styles from '../../styles/styles-pages/catalogo.module.css'
import Produto1 from '../../assets/imgCatalogo/produtoImg1.png'
import { Link } from 'react-router-dom'

function Catalogo(){

    const produtos = [
        { id: 1, nome: "Filtro de Linha Gamer", preco: "99,90", img: Produto1 },
        { id: 2, nome: "Headset RGB", preco: "149,90", img: Produto1 },
        { id: 3, nome: "Mouse Gamer 7200dpi", preco: "79,90", img: Produto1 },
        { id: 4, nome: "Teclado Mecânico", preco: "199,90", img: Produto1 },
        { id: 5, nome: "Webcam HD", preco: "89,90", img: Produto1 },
        { id: 6, nome: "Cadeira de Escritório", preco: "299,90", img: Produto1 },
        { id: 7, nome: "Suporte para Notebook", preco: "59,90", img: Produto1 },
        { id: 8, nome: "Hub USB 3.0", preco: "39,90", img: Produto1 },
        { id: 9, nome: "Mousepad XL", preco: "49,90", img: Produto1 },
        { id: 10, nome: "Caixa Bluetooth", preco: "129,90", img: Produto1 },
    ];

    return(
        <div className={styles.ContainerCatalogo}>
            <h1 className={styles.Titulo}>Catálogo de Produtos</h1>

            <div className={styles.ContentCatalogo}>
                {produtos.map((produto) => (
                    <div key={produto.id} className={styles.BoxProduto}>
                        
                        <img src={produto.img} alt={produto.nome} className={styles.ImgProduto}/>

                        <h3 className={styles.NomeProduto}>{produto.nome}</h3>

                        <p className={styles.PrecoNovo}>R$ {produto.preco}</p>

                        <Link to={`/produto/${produto.id}`}>
                            <button className={styles.BotaoVer}>Ver Produto</button>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default Catalogo;
