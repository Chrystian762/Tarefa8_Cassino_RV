
import { Link } from 'react-router-dom'
import styles from '../../styles/styles-layouts/footer.module.css'
import ImgFooter from '../../assets/imgFooter/LogoEmpresa.png'
import ImgRodrigo from '../../assets/imgFooter/Rodrigo.jpg'
import ImgChrystian from '../../assets/imgFooter/Chrystian.png'
import ImgLinkedin from '../../assets/imgFooter/linkedin.svg'
import ImgGithub from '../../assets/imgFooter/git-hub.svg'

function Footer(){
    const empresaPath = "/empresa"
    
    return(
        <footer className={styles.Footer}>
            <div className={styles.BoxFooter}>
                <Link to={empresaPath}>
                    <img src={ImgFooter} alt="ByteStore" className={styles.ImgEmpresa}/>
                </Link>
                <p className={styles.DireitosFooter}>
                    © 2025 BytStore Inc. All rights reservaduss.
                </p>
            </div>
            <div className={styles.ContentFooter}>
                <p className={styles.DireitosFooter}>Criadores</p>
                <div className={styles.BoxFooterCriadores}>
                    <div className={styles.CriadoresFooter}>
                    <img src={ImgRodrigo} alt="Rodrigo" className={styles.ImgPessoa} />
                        <div className={styles.RedesSociais}>
                            <a href="https://www.linkedin.com/in/rodrigo-santos-a950b2343" target='_blank'>
                                <img src={ImgLinkedin} alt="Linkedin" className={styles.ImgIcone} />
                            </a>
                            <a href="https://github.com/YzMenoH" target='_blank'>
                                <img src={ImgGithub} alt="GitHub" className={styles.ImgIcone} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.CriadoresFooter}>
                    <img src={ImgChrystian} alt="Chrystian" className={styles.ImgPessoa}/>
                        <div className={styles.RedesSociais}>
                            <a href="https://www.linkedin.com/in/chrystian-gabriel-93799a29b" target='_blank'>
                                <img src={ImgLinkedin} alt="Linkedin" className={styles.ImgIcone} />
                            </a>
                            <a href="https://github.com/Chrystian762" target='_blank'>
                                <img src={ImgGithub} alt="GitHub" className={styles.ImgIcone} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
