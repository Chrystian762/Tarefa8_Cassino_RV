import { useParams, Link } from "react-router-dom";
import styles from "../../styles/styles-pages/produto.module.css";
import Produto1 from "../../assets/imgCatalogo/produtoImg1.png";

function Produto() {
    const { id } = useParams();

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

    const produto = produtos.find((p) => p.id === Number(id));

    if (!produto) {
        return <h1 className={styles.Erro}>Produto não encontrado.</h1>;
    }

    return (
        <div className={styles.Container}>

            <img src={produto.img} alt={produto.nome} className={styles.ImgProduto}/>

            <div className={styles.InfoProduto}>
                <h1 className={styles.Titulo}>{produto.nome}</h1>
                <p className={styles.Preco}>R$ {produto.preco}</p>

                <p className={styles.Descricao}>
                    Produto de alta qualidade ideal para o seu dia a dia ou ambiente de trabalho.
                </p>

                <Link to={`/comprar/${produto.id}`}>
                    <button className={styles.BotaoComprar}>Comprar Agora</button>
                </Link>
            </div>

        </div>
    );
}

export default Produto;
