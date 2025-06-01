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
              <i className="navbar-brand-icon bi-shield-lock me-2"></i>
              <span>MegaVPN</span>
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
                  <a className="nav-link click-scroll" href="#section_2">Почему MegaVPN</a>
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
                  <span>Скачать MegaVPN</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">
                <h6>🚀 МЕГА ЗАЩИТА</h6>
                <h1 className="text-white mb-4">Свобода в интернете БЕЗ ГРАНИЦ</h1>
                <p className="text-white-50 mb-4">
                  <strong>MegaVPN</strong> - самый быстрый и надежный VPN в России! 
                  Обходи любые блокировки, защищай данные и получай доступ ко всему интернету одним кликом.
                </p>
                <div className="hero-stats mb-4">
                  <span className="badge bg-success me-3">🔥 50,000+ активных пользователей</span>
                  <span className="badge bg-warning">⚡ Скорость до 1 Гбит/с</span>
                </div>
                <a href="#section_2" className="btn custom-btn smoothscroll me-3">Узнать больше</a>
                <a href="#section_5" className="link link--kale smoothscroll">Получить MegaVPN БЕСПЛАТНО</a>
              </div>

              <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                <img src="/images/education-online-books.png" className="hero-image img-fluid" alt="MegaVPN защита" />
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
                    <strong>4.9</strong>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <small className="ms-3">25,847 довольных пользователей</small>
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
                <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="MegaVPN интерфейс" />
              </div>

              <div className="col-lg-6 col-12">
                <div className="book-section-info">
                  <h6>💥 МОЩНЫЙ &amp; БЕЗОПАСНЫЙ</h6>
                  <h2 className="mb-4">Почему именно MegaVPN?</h2>
                  <p>
                    <strong>MegaVPN</strong> - это не просто VPN, это твой ключ к свободному интернету! 
                    Мы используем военное шифрование AES-256 и собственные серверы в 60+ странах.
                  </p>
                  <div className="features-list">
                    <p className="feature-item">
                      🚀 <strong>Сверхскорость</strong> - До 1 Гбит/с без лимитов<br />
                      🔒 <strong>Военное шифрование</strong> - AES-256 + Perfect Forward Secrecy<br />
                      🌍 <strong>60+ стран</strong> - 5000+ серверов по всему миру<br />
                      📱 <strong>Все устройства</strong> - Windows, Mac, iOS, Android, Linux<br />
                      🛡️ <strong>Kill Switch</strong> - Автоматическая защита от утечек<br />
                      ⚡ <strong>Мгновенное подключение</strong> - Один клик = полная защита
                    </p>
                  </div>
                  <div className="alert alert-success mt-3">
                    <i className="bi-shield-check me-2"></i>
                    <strong>ГАРАНТИЯ:</strong> 30 дней возврат денег без вопросов!
                  </div>
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
                <h6>💣 ЧТО УМЕЕТ?</h6>
                <h2 className="mb-5">Возможности MegaVPN</h2>
              </div>

              <div className="col-lg-4 col-12">
                <nav className="h-100 flex-column align-items-stretch">
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link smoothscroll" href="#item-1">🔥 Обход любых блокировок</a>
                    <a className="nav-link smoothscroll" href="#item-2">⚡ Турбо скорость</a>
                    <a className="nav-link smoothscroll" href="#item-3">🛡️ Абсолютная анонимность</a>
                    <a className="nav-link smoothscroll" href="#item-4">🌍 Серверы везде</a>
                    <a className="nav-link smoothscroll" href="#item-5">📱 Простота использования</a>
                  </nav>
                </nav>
              </div>

              <div className="col-lg-8 col-12">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" className="scrollspy-example-2">
                  <div className="scrollspy-example-item" id="item-1">
                    <h5>🔥 Обход ЛЮБЫХ блокировок</h5>
                    <p>YouTube, Instagram, Facebook, Netflix, TikTok - ВСЁ работает! Забей на блокировки раз и навсегда.</p>
                    <p><strong>Работает даже там, где другие VPN бессильны:</strong></p>
                    <ul>
                      <li>✅ Глубокая фильтрация пакетов (DPI)</li>
                      <li>✅ Корпоративные файрволы</li>
                      <li>✅ Университетские и школьные сети</li>
                      <li>✅ Отельные и кафе WiFi</li>
                    </ul>
                    <blockquote className="blockquote">Попробуй заблокировать ТАКОЕ! 😎</blockquote>
                  </div>

                  <div className="scrollspy-example-item" id="item-2">
                    <h5>⚡ Скорость как у молнии</h5>
                    <p>Наши серверы работают на 10-гигабитных каналах. Стриминг 4K, онлайн-игры, торренты - всё летает!</p>
                    <p>Специальные протоколы:</p>
                    <div className="row">
                      <div className="col-lg-6 col-12 mb-3">
                        <img src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                      </div>
                      <div className="col-lg-6 col-12 mb-3">
                        <img src="/images/businessman-sitting-by-table-cafe.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                      </div>
                    </div>
                    <ul>
                      <li>🚀 <strong>WireGuard</strong> - самый быстрый протокол</li>
                      <li>⚡ <strong>IKEv2</strong> - для мобильных устройств</li>
                      <li>🔧 <strong>OpenVPN</strong> - максимальная совместимость</li>
                    </ul>
                  </div>

                  <div className="scrollspy-example-item" id="item-3">
                    <h5>🛡️ Абсолютная анонимность</h5>
                    <p>Мы НЕ ведем логи. Никто и никогда не узнает, что ты делал в интернете. ГАРАНТИРОВАННО!</p>
                    <p>Защита на военном уровне:</p>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-12">
                        <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-6 col-12">
                        <ul>
                          <li>🔐 <strong>AES-256</strong> шифрование</li>
                          <li>🔑 <strong>Perfect Forward Secrecy</strong></li>
                          <li>🚫 <strong>DNS Leak Protection</strong></li>
                          <li>⚡ <strong>Kill Switch</strong></li>
                          <li>🕵️ <strong>No Logs Policy</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="scrollspy-example-item" id="item-4">
                    <h5>🌍 Серверы по всему миру</h5>
                    <p>5000+ серверов в 60+ странах. От США до Японии - выбирай любую локацию!</p>
                    <p>Популярные локации:</p>
                    <img src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid mb-3" alt="" />
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>🇺🇸 США (1200+ серверов)</li>
                          <li>🇬🇧 Великобритания (800+)</li>
                          <li>🇩🇪 Германия (600+)</li>
                          <li>🇯🇵 Япония (400+)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>🇳🇱 Нидерланды (500+)</li>
                          <li>🇸🇬 Сингапур (300+)</li>
                          <li>🇨🇦 Канада (400+)</li>
                          <li>🇦🇺 Австралия (200+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="scrollspy-example-item" id="item-5">
                    <h5>📱 Проще не бывает</h5>
                    <p>Установка за 30 секунд. Подключение одним кликом. Работает на всех устройствах!</p>
                    <p>Что получаешь:</p>
                    <blockquote className="blockquote">
                      "Скачал, установил, нажал кнопку - и ВСЁ! Теперь весь интернет в моих руках!" - Типичный отзыв пользователя
                    </blockquote>
                    <ul>
                      <li>📱 <strong>Мобильные приложения</strong> - iOS/Android</li>
                      <li>💻 <strong>Десктоп клиенты</strong> - Windows/Mac/Linux</li>
                      <li>🌐 <strong>Браузерные расширения</strong> - Chrome/Firefox</li>
                      <li>📺 <strong>Smart TV и роутеры</strong> - настройка за 5 минут</li>
                    </ul>
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
                <h6>💬 Отзывы</h6>
                <h2>Что говорят пользователи MegaVPN</h2>
              </div>

              <div className="col-lg-4 col-12">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img src="/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="text-center mt-3">
                      <span className="text-white">Анна, 24</span>
                      <strong className="d-block text-white">Блогер</strong>
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
                    <p className="mb-0">"НЕРЕАЛЬНО крутой VPN! Инстаграм, ютуб, всё летает как ракета. Раньше мучилась с тормозными VPN, а тут просто космос! 🚀"</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 my-5 my-lg-0">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img src="/images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image avatar-image-left" alt="" />
                    <div className="text-center mt-3">
                      <span className="text-white">Максим, 31</span>
                      <strong className="d-block text-white">IT-специалист</strong>
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
                    <p className="mb-0">"Как айтишник говорю - это топ! WireGuard протокол, никаких логов, серверы быстрые. Пользуюсь уже год - ноль нареканий! 💪"</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img src="/images/avatar/pretty-blonde-woman.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="text-center mt-3">
                      <span className="text-white">Елена, 28</span>
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
                    <p className="mb-0">"Работаю с зарубежными клиентами, нужен стабильный VPN. MegaVPN - просто огонь! Netflix, соцсети, всё работает идеально! ❤️"</p>
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
                    <h2 className="mb-1">🔥 Получить MegaVPN</h2>
                    <p className="text-muted">7 дней БЕСПЛАТНО + гарантия возврата денег</p>
                    <div className="price-tag">
                      <span className="old-price">₽990/мес</span>
                      <span className="new-price">₽290/мес</span>
                      <span className="discount">-70%</span>
                    </div>
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

                    <div className="col-lg-10 col-md-10 col-10 mx-auto">
                      <button type="submit" className="form-control btn-mega">
                        <i className="bi-download me-2"></i>
                        СКАЧАТЬ MEGAVPN
                      </button>
                    </div>
                    
                    <div className="text-center mt-3">
                      <small className="text-muted">
                        <i className="bi-shield-check me-1"></i>
                        30 дней гарантия возврата денег
                      </small>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-6 col-12">
                <h6 className="mt-5">🎯 Есть вопросы?</h6>
                <h2 className="mb-4">Свяжитесь с нами</h2>

                <p className="mb-3">
                  <i className="bi-geo-alt me-2"></i>
                  Москва, Россия
                </p>

                <p className="mb-2">
                  <a href="tel:+78001234567" className="contact-link">
                    📞 +7 (800) 123-45-67 (бесплатно)
                  </a>
                </p>

                <p>
                  <a href="mailto:support@megavpn.ru" className="contact-link">
                    📧 support@megavpn.ru
                  </a>
                </p>

                <h6 className="site-footer-title mt-5 mb-3">Мы в соцсетях</h6>

                <ul className="social-icon mb-4">
                  <li className="social-icon-item">
                    <a href="https://t.me/megavpn_official" className="social-icon-link bi-telegram" aria-label="Telegram"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="https://youtube.com/@megavpn" className="social-icon-link bi-youtube" aria-label="YouTube"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="https://vk.com/megavpn" className="social-icon-link bi-browser-safari" aria-label="VK"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="https://discord.gg/megavpn" className="social-icon-link bi-discord" aria-label="Discord"></a>
                  </li>
                </ul>

                <div className="guarantees">
                  <p className="copyright-text">
                    © 2024 MegaVPN. Все права защищены.
                  </p>
                  <div className="badges mt-3">
                    <span className="badge bg-success me-2">🔒 No Logs Policy</span>
                    <span className="badge bg-info me-2">⚡ 99.9% Uptime</span>
                    <span className="badge bg-warning">💰 30 дней гарантия</span>
                  </div>
                  <p className="mt-3">
                    <strong>Получи свободу в интернете ПРЯМО СЕЙЧАС!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
