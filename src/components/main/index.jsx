import logo from '../../assets/imgs/logoTransparente.png';
import qrcode from '../../assets/imgs/qrcode.png';
import foto1 from '../../assets/imgs/foto1.png';
import foto2 from '../../assets/imgs/foto2.png';
import foto3 from '../../assets/imgs/foto3.png';
import { scrollToSection } from './scrollToSection';
import styles from './main.module.css'
import '../../styles/global.css'
import footer from '../../styles/footer.module.css'
import nav from '../../styles/header.module.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/useAuth';
import '../../services/firebase'


function Main() {

    const user = useAuth();
    const navigate = useNavigate();

    const verificarlogin = () => {
        if (user == null) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <div> <img className={nav.logo} src={logo} alt="" /></div>
                    <ul className={nav.navlist}>
                        <li><span onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}> Sobre</span></li>
                        <li><span onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }}> Projetos</span></li>
                        <li><span onClick={(e) => { e.preventDefault(); scrollToSection('doe'); }}> Doe Agora</span></li>
                        <li>
                            <span onClick={verificarlogin}>
                                Acesso interno
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className={styles.container}>
                <div className={styles.sliderwrapper}>
                    <div className={styles.slider}>
                        <img id="slide-1" src={foto1} alt="Slide 1" />
                        <img id="slide-2" src={foto2} alt="Slide 2" />
                        <img id="slide-3" src={foto3} alt="Slide 3" />
                    </div>
                    <div className={styles.slidernav}>
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                    <button 
                        className={`${styles.arrow} ${styles.left}`} 
                        onClick={() => document.querySelector(`.${styles.slider}`).scrollBy({ left: -window.innerWidth, behavior: 'smooth' })}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button 
                        className={`${styles.arrow} ${styles.right}`} 
                        onClick={() => document.querySelector(`.${styles.slider}`).scrollBy({ left: window.innerWidth, behavior: 'smooth' })}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </section>

            <main className='mainhome'>
                <br />
                <br />
                <br />
                <section id="sobre">
                    <h2 className={styles.titlesobre}>Sobre o Projeto Arte Suave</h2>
                    <div className={styles.conteudo}>
                        <div className={styles.sobre}>
                            <h2>
                                <img className= {styles.imgsobre} src={logo} alt="Logo Arte Suave" />
                            </h2>
                        </div>
                        <div className={styles.containertextsobre}>
                            <p className={styles.textsobre}>
                                A ONG Arte Saúde desenvolve um projeto de Jiu-Jitsu voltado <br />
                                para a inclusão social, promovendo a disciplina e o bem-estar <br />
                                físico e mental de crianças e adolescentes em situação de <br />
                                vulnerabilidade. Por meio da arte marcial, os participantes <br />
                                aprendem valores como respeito, autocontrole e superação, além <br />
                                de melhorar suas condições de saúde e cidadania. A iniciativa visa <br />
                                não apenas formar atletas, mas também cidadãos conscientes <br />
                                e preparados para enfrentar desafios da vida.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={styles.linha}></div>

                <section id="projetos">
                    <div className={styles.projetos}>
                        <div className={styles.projeto1}>
                            <div className={styles.projeto1conteudotxt}>
                                <h2 className={styles.tituloprojeto1}>Jiu-Jitsu</h2> <br />
                                <p className={styles.textoprojeto1}>
                                    A ONG Arte Saúde desenvolve um projeto de <br />
                                    Jiu-Jitsu voltado para a inclusão social, <br />
                                    promovendo a disciplina e o bem-estar físico <br />
                                    e mental de crianças e adolescentes em <br />
                                    situação de vulnerabilidade. Por meio da arte <br />
                                    marcial, os participantes aprendem valores <br />
                                    como respeito, autocontrole e superação, <br />
                                    além de melhorar suas condições de saúde e <br />
                                    cidadania. A iniciativa visa não apenas formar <br />
                                    atletas, mas também cidadãos conscientes e <br />
                                    preparados para enfrentar desafios da vida.
                                </p>
                            </div>
                            <div>
                                <img className={styles.imgprojeto1} src={foto1} alt="Imagem Jiu-Jitsu" />
                            </div>
                        </div>

                        <div className={styles.projeto1}>
                            <div className={styles.projeto1conteudotxt}>
                                <h2 className={styles.tituloprojeto1}>Sopão</h2> <br />
                                <p className={styles.textoprojeto1}>
                                    A ONG Arte Saúde desenvolve um projeto de <br />
                                    Jiu-Jitsu voltado para a inclusão social, <br />
                                    promovendo a disciplina e o bem-estar físico <br />
                                    e mental de crianças e adolescentes em <br />
                                    situação de vulnerabilidade. Por meio da arte <br />
                                    marcial, os participantes aprendem valores <br />
                                    como respeito, autocontrole e superação, <br />
                                    além de melhorar suas condições de saúde e <br />
                                    cidadania. A iniciativa visa não apenas formar <br />
                                    atletas, mas também cidadãos conscientes e <br />
                                    preparados para enfrentar desafios da vida.
                                </p>
                            </div>
                            <div>
                                <img className={styles.imgprojeto1} src={foto2} alt="Imagem Sopão" />
                            </div>
                        </div>

                        <div className={styles.projeto1}>
                            <div className={styles.projeto1conteudotxt}>
                                <h2 className={styles.tituloprojeto1}>Mutirão para realização <br /> de documentos</h2>
                                <br />
                                <p className={styles.textoprojeto1}>
                                    A ONG Arte Saúde desenvolve um projeto de <br />
                                    Jiu-Jitsu voltado para a inclusão social, <br />
                                    promovendo a disciplina e o bem-estar físico <br />
                                    e mental de crianças e adolescentes em <br />
                                    situação de vulnerabilidade. Por meio da arte <br />
                                    marcial, os participantes aprendem valores <br />
                                    como respeito, autocontrole e superação, <br />
                                    além de melhorar suas condições de saúde e <br />
                                    cidadania. A iniciativa visa não apenas formar <br />
                                    atletas, mas também cidadãos conscientes e <br />
                                    preparados para enfrentar desafios da vida.
                                </p>
                            </div>
                            <div>
                                <img className={styles.imgprojeto1} src={foto3} alt="Imagem Mutirão" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="doe">
                    <div className={styles.container}>
                        <div className={styles.conteudo2}>
                            <div className={styles.sobre}>
                                <h2>
                                    <img className={styles.imgqr} src={qrcode} alt="Logo Arte Suave" />
                                </h2>
                            </div>

                            <div className={styles.containertextqr}>
                                <h2 className={styles.h2qr}>Ajude o Arte Suave!</h2> <br />
                                <p className={styles.textqr}>
                                    Dependemos exclusivamente de <br />
                                    pessoas solidárias como você <br />
                                    para financiar nossas atividades e <br />
                                    garantir nossa independência.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            <footer>
                <div className={footer.footercontainer}>
                    <div>
                        <img className={footer.logofooter} src={logo} alt="" />
                    </div>
                    <div className={footer.textfooter}>
                        <h3>Contato</h3>
                        <p>
                            Rua Capetinga, Nº 679, Paulista 53429120 <br />
                            Telefone - (81)3948294 <br />
                            Email - email@gmail.com
                        </p>
                    </div>
                    <div>
                        <h3 className={footer.redesfooter}>Redes Sociais</h3>
                        <br />
                        <div className={footer.icons}>
                            <a href="#"><i className="fa-brands fa-instagram" style={{ color: '#d42a31' }}></i></a>
                            <a href="#"><i className="fa-brands fa-whatsapp" style={{ color: '#d42a31' }}></i></a>
                        </div>
                    </div>
                </div>
         </footer>

        </div>
    );
}

export default Main;