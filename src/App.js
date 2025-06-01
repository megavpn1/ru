import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              <i className="navbar-brand-icon bi-shield-check me-2"></i>
              <span>SecureVPN</span>
            </a>

            <div className="d-lg-none ms-auto me-3">
              <a href="#section_5" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                <i className="btn-icon bi-download"></i>
                <span>Скачать</span>
              </a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto me-lg-4">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_1">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_2">О VPN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_3">Возможности</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_4">Отзывы</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_5">Получить VPN</a>
                </li>
              </ul>

              <div className="d-none d-lg-block">
                <a href="#section_5" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                  <i className="btn-icon bi-download"></i>
                  <span>Скачать</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section d-flex justify-content-center align-items-center vpn-hero" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">
                <h6>🔒 Безопасный VPN</h6>
                <h1 className="text-white mb-4">Защити свою приватность в интернете</h1>
                <p className="text-white-50 mb-4">
                  Быстрый, безопасный и надежный VPN для полной анонимности в сети. 
                  Разблокируй любой контент и защити свои данные от слежки.
                </p>
                <a href="#section_2" className="btn custom-btn smoothscroll me-3">Узнать больше</a>
                <a href="#section_5" className="link link--kale smoothscroll">Получить VPN бесплатно</a>
              </div>

              <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                <img src="/images/education-online-books.png" className="hero-image img-fluid" alt="VPN защита" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="featured-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="avatar-group d-flex flex-wrap align-items-center">
                  <img src="/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid avatar-image" alt="" />
                  <img src="/images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image avatar-image-left" alt="" />
                  <img src="/images/avatar/pretty-blonde-woman.jpg" className="img-fluid avatar-image avatar-image-left" alt="" />
                  <img src="/images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg" className="img-fluid avatar-image avatar-image-left" alt="" />

                  <div className="reviews-group mt-3 mt-lg-0">
                    <strong>4.8</strong>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <small className="ms-3">12,847 довольных пользователей</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-lg-5"></section>

        {/* About VPN Section */}
        <section className="book-section section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="VPN интерфейс" />
              </div>

              <div className="col-lg-6 col-12">
                <div className="book-section-info">
                  <h6>🚀 Современный &amp; Быстрый</h6>
                  <h2 className="mb-4">Почему именно наш VPN?</h2>
                  <p>
                    Наш VPN использует новейшие технологии шифрования для обеспечения максимальной безопасности. 
                    Мы не ведем логи активности и гарантируем полную анонимность.
                  </p>
                  <p>
                    ✅ Серверы в 50+ странах<br />
                    ✅ Неограниченная скорость<br />
                    ✅ Защита от утечек DNS<br />
                    ✅ Kill Switch защита<br />
                    ✅ 24/7 поддержка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center">
                <h6>Что внутри?</h6>
                <h2 className="mb-5">Возможности нашего VPN</h2>
              </div>

              <div className="col-lg-4 col-12">
                <nav className="h-100 flex-column align-items-stretch">
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link smoothscroll" href="#item-1">🔒 Шифрование данных</a>
                    <a className="nav-link smoothscroll" href="#item-2">🌍 Глобальные серверы</a>
                    <a className="nav-link smoothscroll" href="#item-3">⚡ Высокая скорость</a>
                    <a className="nav-link smoothscroll" href="#item-4">🛡️ Kill Switch</a>
                    <a className="nav-link smoothscroll" href="#item-5">📱 Мульти-платформа</a>
                  </nav>
                </nav>
              </div>

              <div className="col-lg-8 col-12">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" className="scrollspy-example-2">
                  <div className="scrollspy-example-item" id="item-1">
                    <h5>🔒 Военное шифрование</h5>
                    <p>Используем AES-256 шифрование - тот же стандарт, что используют военные и банки для защиты секретной информации.</p>
                    <p><strong>Что это означает?</strong> Ваши данные полностью защищены от перехвата хакерами, правительством или интернет-провайдерами.</p>
                  </div>

                  <div className="scrollspy-example-item" id="item-2">
                    <h5>🌍 Серверы по всему миру</h5>
                    <p>Более 3000 серверов в 50+ странах для максимальной скорости и доступа к любому контенту.</p>
                    <p>Разблокируйте Netflix, YouTube, социальные сети и любые заблокированные сайты одним кликом.</p>
                  </div>

                  <div className="scrollspy-example-item" id="item-3">
                    <h5>⚡ Сверхвысокая скорость</h5>
                    <p>Наша сеть оптимизирована для потокового видео, игр и скачивания файлов без ограничений скорости.</p>
                    <p>Смотрите 4K видео, играйте онлайн без лагов и скачивайте торренты на максимальной скорости.</p>
                  </div>

                  <div className="scrollspy-example-item" id="item-4">
                    <h5>🛡️ Kill Switch защита</h5>
                    <p>Автоматически блокирует весь интернет-трафик при разрыве VPN соединения, предотвращая утечку данных.</p>
                    <p>Ваша настоящая личность никогда не будет раскрыта, даже в случае технических сбоев.</p>
                  </div>

                  <div className="scrollspy-example-item" id="item-5">
                    <h5>📱 Все ваши устройства</h5>
                    <p>Приложения для Windows, Mac, iOS, Android, Linux. Один аккаунт защищает до 10 устройств одновременно.</p>
                    <p>Простая установка за 30 секунд и интуитивно понятный интерфейс на русском языке.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews-section section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-5">
                <h6>Отзывы</h6>
                <h2>Что говорят наши пользователи</h2>
              </div>

              <div className="col-lg-4 col-12">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img src="/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="text-center mt-3">
                      <span className="text-white">Анна</span>
                      <strong className="d-block text-white">Дизайнер</strong>
                    </div>
                  </div>

                  <div className="custom-block-info">
                    <div className="reviews-group mb-3">
                      <strong>5.0</strong>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                    </div>
                    <p className="mb-0">Отличный VPN! Теперь могу работать с зарубежными клиентами без ограничений. Скорость супер, никаких лагов.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 my-5 my-lg-0">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img src="/images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image avatar-image-left" alt="" />
                    <div className="text-center mt-3">
                      <span className="text-white">Максим</span>
                      <strong className="d-block text-white">IT-специалист</strong>
                    </div>
                  </div>

                  <div className="custom-block-info">
                    <div className="reviews-group mb-3">
                      <strong>4.8</strong>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                    </div>
                    <p className="mb-0">Использую уже год для работы и развлечений. Стабильное соединение, много серверов на выбор. Рекомендую!</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img src="/images/avatar/pretty-blonde-woman.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="text-center mt-3">
                      <span className="text-white">Елена</span>
                      <strong className="d-block text-white">Маркетолог</strong>
                    </div>
                  </div>

                  <div className="custom-block-info">
                    <div className="reviews-group mb-3">
                      <strong>5.0</strong>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                    </div>
                    <p className="mb-0">Лучший VPN из тех, что пробовала! Простой в использовании, быстрый, и цена очень доступная. Спасибо!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Download Section */}
        <section className="contact-section section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12 mx-auto">
                <form className="custom-form ebook-download-form bg-white shadow">
                  <div className="text-center mb-5">
                    <h2 className="mb-1">Получить VPN бесплатно</h2>
                    <p className="text-muted">7 дней бесплатного использования</p>
                  </div>

                  <div className="ebook-download-form-body">
                    <div className="input-group mb-4">
                      <input type="text" className="form-control" placeholder="Ваше имя" required />
                      <span className="input-group-text">
                        <i className="custom-form-icon bi-person"></i>
                      </span>
                    </div>

                    <div className="input-group mb-4">
                      <input type="email" className="form-control" placeholder="your@email.com" required />
                      <span className="input-group-text">
                        <i className="custom-form-icon bi-envelope"></i>
                      </span>
                    </div>

                    <div className="col-lg-8 col-md-10 col-8 mx-auto">
                      <button type="submit" className="form-control">Скачать VPN</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-6 col-12">
                <h6 className="mt-5">Есть вопросы?</h6>
                <h2 className="mb-4">Свяжитесь с нами</h2>

                <p className="mb-3">
                  <i className="bi-geo-alt me-2"></i>
                  Москва, Россия
                </p>

                <p className="mb-2">
                  <a href="tel:+78001234567" className="contact-link">
                    +7 (800) 123-45-67
                  </a>
                </p>

                <p>
                  <a href="mailto:support@securevpn.ru" className="contact-link">
                    support@securevpn.ru
                  </a>
                </p>

                <h6 className="site-footer-title mt-5 mb-3">Социальные сети</h6>

                <ul className="social-icon mb-4">
                  <li className="social-icon-item">
                    <a href="https://t.me/securevpn" className="social-icon-link bi-telegram" aria-label="Telegram"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="https://youtube.com/@securevpn" className="social-icon-link bi-youtube" aria-label="YouTube"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="https://facebook.com/securevpn" className="social-icon-link bi-facebook" aria-label="Facebook"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="https://wa.me/78001234567" className="social-icon-link bi-whatsapp" aria-label="WhatsApp"></a>
                  </li>
                </ul>

                <p className="copyright-text">
                  © 2024 SecureVPN. Все права защищены.
                  <br /><br />
                  Защити свою приватность уже сегодня!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
