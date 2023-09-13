import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../css/App.css'
import '../css/bootstrap.css'


const Welcome = () => {


    const navigate = useNavigate()
    function Add() {
        navigate('/login')
    }
    function Regist() {
        navigate('/signup')
    }
    return (
        <div className='Grad'>
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <NavLink to="signup" className="navbar-brand logo_h"><img src="img/hand2.png" alt=""
                                style={{ width: "100px" }} /></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-center">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Basty</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#nash">Biz tyraly</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#nash">Gallery</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <button className="nav-item primary_btn" onClick={Regist}> Tirkely </button>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <button className="nav-item primary_btn" onClick={Add}  > Kiru </button>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="home_left_img">
                                    <img className="img-fluid" src="/img/home-left.png" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner_content">
                                    <h2>Жестау тілін үйрету</h2>
                                    <p>Қазіргі уақытта сіз біздің YouTube курсын төмендегі батырма арқылы көре аласыз</p>
                                    <div className="d-flex align-items-center">
                                        <a id="play-home-video" className="video-play-button" href="https://youtube.com/shorts/kg1v29L6cok?feature=share">
                                            <span></span>
                                        </a>
                                        <div className="watch_video text-uppercase">Бейне нұсқаулықты қараңыз</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_us_area section_gap_top2" id="nash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1 style={{ color: 'black' }}>Biz tyraly</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row about_content align-items-center">
                        <div className="col-lg-6">
                            <div className="section_content">
                                <img className="img-fluid w-100" src="img/F.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_content">
                                <h6>Біздің Frontend әзірлеушісі</h6>
                                <h1>Шораев Мирас Аскарович</h1>
                                <p>Оның ағымының ең өршіл студенттерінің бірі Болашақ Senior бағдарламашы</p>
                                <a className="primary_btn" href="#">Telegram аккаунтына тiркелу</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_us_area section_gap_top" id="nash">
                <div className="container">

                    <div className="row about_content align-items-center">
                        <div className="col-lg-6">
                            <div className="section_content">
                                <img className="img-fluid w-100" src="/img/b.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_content">
                                <h6>Біздің Backend әзірлеушісі</h6>
                                <h1>Гезлер Джонатан Джон </h1>
                                <p>Оның ағымының ең өршіл студенттерінің бірі Болашақ Senior Python бағдарламашы</p>
                                <a className="primary_btn" href="#">Telegram аккаунтына тiркелу</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about_us_area section_gap_top" id="nash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1>Бізбен бірге жаңа сөз жатта</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image.png" alt="" />
                                <div className="upcoming_title">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image (1).png" alt="" />
                                <div className="upcoming_title">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image (2).png" alt="" />

                                <div className="upcoming_title">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/zyro-image(3).png" alt="" />
                                <div className="upcoming_title">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="frequently_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1>Жестау тілі әлеміне ену</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row frequent_inner">
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item">
                                <h3> Жаңа әлемнің ашылуы: жестау тіліне кіріспе</h3>
                                <p>Жұмбақ және керемет жестау тілі әлеміне еніңіз! Тек қолдар мен дене қимылдарын қолдана отырып, сөзсіз сөйлесудің таңғажайып қабілетін ашыңыз. Әрбір қимыл өзінің ерекше тарихын айтатын әнге айналады, ол назар аударатын және керемет мүмкіндіктерге есік ашатын би сияқты.</p>
                            </div>
                        </div>  
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item">
                                <h3>Рақым мен эмоционалдылық: коммуникау тілі қарым-қатынас өнері ретінде</h3>
                                <p>Жестау тілін үйрену-бұл қарым-қатынастың жаңа өлшеміне ену, мұнда сөздер қолдың серпілуіне және бет әлпетіне жол береді. Бұл таңғажайып саяхатта сіз айналаңыздағы адамдардың қозғалыстарында жасырылған эмоцияларды.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item">
                                <h3>Қозғалыс арқылы түсіну: жестау тіліндегі эмоциялар мен ойларды қабылдау</h3>
                                <p>Әрбір жаңа қимылмен сіз сөздік қорыңызды кеңейтіп, қарым-қатынастың шынайы тереңдігіне жақындай түсесіз. Есту қабілеті нашар адамдармен қарым-қатынас жасау мүмкіндігін ашатын тілдің осы жасырын түрін бақылаңыз, үйреніңіз және сіңіріңіз. Сіздің қолыңыз тек сөздерді ғана емес, сиқырлы құралдарға айналады.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item">
                                <h3>Кедергілер бұзылады: Языкау тілі инклюзивтілік құралы ретінде</h3>
                                <p>Жестау тілін үйрету-бұл мәдени тәжірибені байыту ғана емес, сонымен қатар қоғамда байланыстырушы буын болу мүмкіндігі. Бұл сізге әртүрлі адамдар арасындағы кедергілерді жеңуге және тілдік кедергіге қарамастан күшті байланыстар жасауға мүмкіндік береді.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item last-child">
                                <h3>Көкжиектерді кеңейту: Культурау тілі арқылы мәдени байыту</h3>
                                <p>Айналаңыздағы адамдарды жестау тілінің шеберлігімен қалай қуантып, таң қалдыра алатыныңызды елестетіп көріңіз! Экспрессивтіліктің керемет күшін ашыңыз және өз ойларыңызды рақым мен қозғалыс энергиясымен жеткізіңіз. Қолдарыңыз жақын маңдағы әрбір адамның жүрегіне тікелей сөйлейтін сөздерге айналады.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item last-child">
                                <h3>Сөзсіз экспрессивтілік: энергия мен идеяларды жеткізудегі жестау тілінің күші</h3>
                                <p>Жестау тілін білу және ауызша емес қарым-қатынастың таңғажайып әлемінің бір бөлігі болу қиындықтарын қабылдау мүмкіндігін жіберіп алмаңыз. Жолға шығыңыз, жаңа көкжиектерді ашыңыз және қолдың бірнеше қимылымен жасай алатын сиқырдың куәсі болыңыз. Жестау тілін үйрену-бұл сіздің жүрегіңізде және айналаңыздағы адамдардың жүрегінде мәңгі із қалдыратын саяхат.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer_area section_gap_top">
                    <div className="single-footer-widget">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="social_widget">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    )
}

export default Welcome